const { validate } = require('../../tennis-utils')
const { models: { User, Booking, Court } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')
const nodemailer = require('nodemailer')

/**
 * Books a court 
 * 
 * @param {string} idUser1 user's id that is doing the booking
 * @param {string} user2 user 2 unique member number
 * @param {string} user3 user 3 unique member number (optional)
 * @param {string} user4 user 4 unique member number (optional)
 * @param {string} number number that identifies the court
* @param {string} date date for the booking of the court
 
 * 
 * @returns {Promise}
 * 
 * @throws {NotAllowedError} on wrong credentials
 * @throws {NotFoundError} when not found data
 */


module.exports = (idUser1, user2, user3, user4, number, date) => {
    validate.string(idUser1, 'idUser1')
    validate.string(user2, 'user2')
    if (user3) validate.string(user3, 'user3')
    if (user4) validate.string(user4, 'user4')

    validate.string(number, 'number')

    date = new Date(date)
    date.setHours(date.getHours()+2)
    validate.type(date, 'date', Date)
    const dateWithoutHour = date.toLocaleDateString()

    const now = new Date(Date.now())
    now.setHours(now.getHours()+1)

    let limitTime = new Date(now)
    if (date < limitTime) {
        throw new NotAllowedError('Invalid hour')
    }
    if (user3 && !user4){
        throw new NotAllowedError('Please enter the user member number of the 4th player')
    }

    if (!user3 && user4){
        throw new NotAllowedError('Please enter the user member number of the 3rd player')
    }

    let usersArray = []
    let booking
    let user4_
    let user3_
    let user2_
    let court_
    let user1_

    return User.findOne({ memberNumber: user2 })
        .then(user2Found => {
            if (!user2Found) throw new NotFoundError(`User with member number ${user2} not found`)
            user2_ = user2Found
            return User.findById(idUser1)
        })
        .then(user => {
            user1_ = user
            if (user1_.memberNumber === user2_.memberNumber) throw new NotAllowedError("Please, check the member number introduced of player 2")
            usersArray.push(user1_, user2_)
            return User.findOne({ memberNumber: user3 })
        })
        .then(user3Found =>{
            if (user3 && !user3Found) throw new NotFoundError(`User with member number ${user3} not found`)
            user3_ = user3Found
            return User.findOne({ memberNumber: user4 })
        })
        .then(user4Found => {
            if (user4 && !user4Found) throw new NotFoundError(`User with member number ${user3} not found`)
            user4_ = user4Found
            if (user4) usersArray.push(user3_, user4_)
            return Court.findOne({ number })   
        })
        .then(court => {
            court_ = court
            return Booking.findOne({ court: court_, date })
        })
        .then(bookExists => {
            if (bookExists) throw new NotFoundError(`Court ${number} already booked at this time`)
            return Booking.find({users: idUser1, day: dateWithoutHour})
        })
        .then(book=> {
            if (book != undefined){
                if (book.length === 1 && book[0].date.getTime() === date.getTime()) throw new NotAllowedError (`User with member number ${user1_.memberNumber} has already booked a court at the same time`)
                if (book.length>1) throw new NotAllowedError (`User with member number ${user1_.memberNumber} has already booked 2 courts for ${dateWithoutHour}`)      
            }
            return Booking.find({users: user2_.id, day: dateWithoutHour})
        })
        .then(book =>{
            if (book != undefined){
                if (book.length === 1 && book[0].date.getTime() === date.getTime()) throw new NotAllowedError (`User with member number ${user2} has already booked a court at the same time`)
                if (book.length>1) throw new NotAllowedError (`User with member number ${user2} has already booked 2 courts for ${dateWithoutHour}`)      
            }
            if (user3) return Booking.find({users: user3_.id, day: dateWithoutHour})
            return
        })
        .then(book =>{
            if (book != undefined){
                if (book.length === 1 && book[0].date.getTime() === date.getTime()) throw new NotAllowedError (`User with member number ${user3} has already booked a court at the same time`)
                if (book.length>1) throw new NotAllowedError (`User with member number ${user3} has already booked 2 courts for ${dateWithoutHour}`)      
            }
            if(user4) return Booking.find({users: user4_.id, day: dateWithoutHour})
            return
        })
        .then(book =>{
            if (book != undefined){
                if (book.length === 1 && book[0].date.getTime() === date.getTime()) throw new NotAllowedError (`User with member number ${user4} has already booked a court at the same time`)
                if (book.length>1) throw new NotAllowedError (`User with member number ${user4} has already booked 2 courts for ${dateWithoutHour}`)      
            }
            if (user3 && user4){
                booking = new Booking({ users:[idUser1, user2_.id, user3_.id, user4_.id], court: court_, date, day: dateWithoutHour, status: "PRE" })
                user3_.bookings.push(booking.id)
                user4_.bookings.push(booking.id)
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
                    user: 'info.break.point.club@gmail.com',
                    pass: 'breakpoint123'
                }
            })
            usersArray.forEach(user =>{
                mailOptions = {
                    from: 'Break Point',
                    to: `${user.email}`,
                    subject: 'Tennis court booked succesfully',
                    text: `You have booked court ${number} for ${date.toLocaleDateString()} at ${date.getHours()-2}h. \nYou can view your bookings in your profile.\n\nContact us for any problem\nTN: 111 222 3333\nEmail: info.break.point.club@gmail.com\nOffice: Street 11, nº22, Barcelona (8-18h)`,
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