const { validate } = require('../../tennis-utils')
const { models: { User, Booking, Court } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')
const nodemailer = require('nodemailer')

module.exports = (idUser1, user2, user3, user4, number, date) => {
    validate.string(idUser1, 'idUser1')
    validate.string(user2, 'user2')
    if (user3) validate.string(user3, 'user3')
    if (user4) validate.string(user4, 'user4')

    validate.string(number, 'number')

    //Checks if the booking is out of the available schedule
    date = new Date(date)
    date.setHours(date.getHours()+1)
    validate.type(date, 'date', Date)
    const dateWithoutHour = date.toLocaleDateString()

    const now = new Date(Date.now())
    if ((date.getHours()) < 8 || (date.getHours()) > 23) {
        throw new NotAllowedError('Bookings only allowed between 8 and 22 hours')
    }

    let limitTime = new Date(now)
    if (date < limitTime) {
        throw new NotAllowedError('Wrong data')
    }
    if (user3 && !user4){
        throw new NotAllowedError('Please enter the user member number of the 4th player')
    }

    if (!user3 && user4){
        throw new NotAllowedError('Please enter the user member number of the 3rd player')
    }
    debugger

    let usersArray = []
    let booking
    let user4_
    let user3_
    let user2_
    let court_
    let user1_

    return User.findOne({ memberNumber: user2 })
        .then(user2Found => {
            if (!user2Found) throw new NotFoundError(`user with member number ${user2} not found`)
            user2_ = user2Found
            return User.findById(idUser1)
        })
        .then(user => {
            user1_ = user
            return User.findOne({ memberNumber: user3 })
        })
        .then(user3Found =>{
            if (user3 && !user3Found) throw new NotFoundError(`user with member number ${user3} not found`)
            user3_ = user3Found
            return User.findOne({ memberNumber: user4 })
        })
        .then(user4Found => {
            if (user4 && !user4Found) throw new NotFoundError(`user with member number ${user3} not found`)
            user4_ = user4Found
            return Court.findOne({ number })   
        })
        .then(court => {
            court_ = court
            return Booking.findOne({ court: court_.id, date })
        })
        .then(bookExists => {
            if (bookExists) throw new NotFoundError(`Court ${number} already booked for ${date}`)
            return Booking.findOne({users: idUser1, day: dateWithoutHour})
        })
        .then(book => {
            if (book) {
                throw new NotAllowedError (`One of the users has already booked a court for ${dateWithoutHour}`)
            }
            if (user3 && user4){
                booking = new Booking({ users:[idUser1, user2_.id, user3_.id, user4_.id], court: court_, date, day: dateWithoutHour, status: "PRE" })
                user3_.bookings.push(booking.id)
                user4_.bookings.push(booking.id)
                usersArray.push(user1_, user2_, user3_, user4_)
                Promise.all([user3_.save(), user4_.save()])
            }
            else{
                usersArray.push(user1_, user2_)
                booking = new Booking({ users:[idUser1, user2_.id], court: court_, date, day: dateWithoutHour, status: "PRE" })      
            }
            user1_.bookings.push(booking.id)
            user2_.bookings.push(booking.id)
            return Promise.all([user1_.save(), user2_.save(), booking.save()])
        })
        .then(() => {
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'skylab.tennis.academy@gmail.com',
                    pass: 'Skylab1234'
                }
            })
            usersArray.forEach(user =>{
                mailOptions = {
                    from: 'skylab.tennis.academy@gmail.com',
                    to: `${user.email}`,
                    subject: 'Tennis court booked succesfully',
                    text: `You have booked court ${number} for ${date.toLocaleDateString()} at ${date.getHours()-1}h. \nYou can view your bookings in your profile.`
              }
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                })
            })
        })
        .then(() => {})
}