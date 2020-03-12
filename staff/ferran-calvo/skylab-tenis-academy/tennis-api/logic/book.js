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
    if ((date.getHours()) < 8 || (date.getHours()) > 22) {
        throw new NotAllowedError('Bookings only allowed between 8 and 22 hours')
    }

    //Bookings only allowed for the next 48 hours
    let limitTime = new Date(now)
    limitTime.setDate(limitTime.getDate() + 2)
    if (date > limitTime) {
        throw new NotAllowedError('Bookings only allowed for the next 48 hours')
    }

    let booking
    let user4_
    let user3_
    let user2_
    let court_
    let user1_

    return User.findOne({ memberNumber: user2 })
        .then(user2 => {
            if (!user2) throw new NotFoundError(`user with member number ${user2} not found`)
            user2_ = user2
            return User.findById(idUser1)
        })
        .then(user => {
            user1_ = user
            return User.findOne({ memberNumber: user3 })
        })
        .then(user3 =>{
            user3_ = user3
            return User.findOne({ memberNumber: user4 })
        })
        .then(user4 => {
            user4_ = user4
            return Court.findOne({ number })   
        })
        .then(court => {
            court_ = court
            return Booking.findOne({ court: court_.id, date })
        })
        .then(bookExists => {
            if (bookExists) throw new NotFoundError(`court ${number} already booked for ${date}`)
            User.findById(idUser1).populate({path: 'bookings', match: {day: dateWithoutHour}}).exec(async (err, bookings) => {
                console.log(bookings)
                return bookings
            })
        })
        .then(book => {
            debugger
            // console.log(book)
            if (book) {
                throw new NotAllowedError (`This user has already booked a court for ${dateWithoutHour}`)
            }
            if (user3 && user4){
                booking = new Booking({ users:[idUser1, user2_.id, user3_.id, user4_.id], court: court_.id, date, day: dateWithoutHour, status: "PRE" })
                user3_.bookings.push(booking.id)
                user4_.bookings.push(booking.id)
                Promise.all([user3_.save(), user4_.save()])
            }
            else{
                booking = new Booking({ users:[idUser1, user2_.id], court: court_.id, date, day: dateWithoutHour, status: "PRE" })      
            }
            user1_.bookings.push(booking.id)
            user2_.bookings.push(booking.id)
            return Promise.all([user1_.save(), user2_.save(), booking.save()])
        })
        // .then(user => {
        //     user.bookings.push(booking.id)
        //     return Promise.all([user.save(), booking.save()])
        // })
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

              // .then(b => {
        //     debugger
        //     console.log(b)
        //     return user1.bookings.forEach(async oldBook => {
        //         // console.log('hola')
        //         // console.log(await Booking.findOne({ _id: oldBook, day: dateWithoutHour }))
        //         if ( await Booking.findOne({ _id: oldBook, day: dateWithoutHour }) != null){
        //             return true
        //         }       
        //     })
        // })

        // .then(calls => Promise.all(calls))