const { validate } = require('../../tennis-utils')
const { models: { User, Booking, Court } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (idUser1, user2, user3, user4, number, date) => {
    validate.string(idUser1, 'idUser1')
    validate.string(user2, 'user2')
    if (user3) validate.string(user3, 'user3')
    if (user4) validate.string(user4, 'user4')

    validate.string(number, 'number')

    //Checks if the booking is out of the available schedule
    const dateWithoutHour = date.split('T')[0]

    date = new Date(date)
    validate.type(date, 'date', Date)
    const now = new Date(Date.now())
    if ((date.getHours())< 8 || (date.getHours())>22){
        throw new NotAllowedError ('Bookings only allowed between 8 and 22 hours')
    }

    //Bookings only allowed for the next 48 hours
    let limitTime = new Date(now)
    limitTime.setDate(limitTime.getDate()+2)
    if (date > limitTime){
        throw new NotAllowedError ('Bookings only allowed for the next 48 hours')  
    } 
        
    let booking
    let user2_
    let court_


    return User.findOne({memberNumber: user2})
        .then(user2 => {
            if (!user2) throw new NotFoundError(`user with member number ${user2} not found`)
            user2_ = user2
            return Court.findOne({number})
        })
        .then(court => {
            court_ = court
            return Booking.findOne({court: court_.id, date})
        })
        .then((bookExists) => {
            if (bookExists) throw new NotFoundError(`court ${number} already booked for ${date}`)
            booking = new Booking({ user1: idUser1, user2: user2_.id, court: court_.id, date, day: dateWithoutHour, status: "PRE"})
            user2_.bookings.push(booking.id)
            user2_.save()
            return User.findById(idUser1)       
        })
        .then(user => {
            user.bookings.push(booking.id)
            return Promise.all([user.save(), booking.save()])
        })
        .then(() => { })
}

// module.exports = (userId, eventId) => {
//     validate.string(userId, 'user ID')
//     validate.string(eventId, 'event ID')

//     return User.find({ subscribedEvents: eventId })
//         .then(usersArray => usersArray.forEach(user => User.findByIdAndUpdate(user.id, { $pull: { subscribedEvents: eventId } })))
//         .then(calls => Promise.all(calls))
//         .then(() => User.findByIdAndUpdate(userId, { $pull: { publishedEvents: eventId } }))
//         .then(() => Event.findByIdAndRemove(eventId))
//         .then(() => { })

        //     return User.findById(idUser1).bookings
        //     populate('bookings').execPopulate()
        //     // User.findById(idUser1).populate('bookings', 'day')

        //     // return User.findById(idUser1)
        // })
        // // .then(user => {
        // // })
        // // .then(calls => Promise.all(calls))
        // .then((b) => {
        //     console.log(b)