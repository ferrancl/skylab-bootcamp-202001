const { validate } = require('../../tennis-utils')
const { models: { User, Booking, Court } } = require('../../tennis-data')
const { NotFoundError } = require('../../tennis-errors')

module.exports = (idUser1, user2, user3, user4, number, date) => {
    validate.string(idUser1, 'idUser1')
    validate.string(user2, 'user2')
    // validate.string(user3, 'user3')
    // validate.string(user4, 'user4')
    validate.string(number, 'number')
    // validate.type(date, 'date', Date)

    let booking
    let user2_
    console.log(idUser1)

    debugger
    return User.findOne({memberNumber: user2})
        .then(user2 => {
            if (!user2) throw new NotFoundError(`user with member number ${user2} not found`)
            user2_ = user2
            return Court.findOne({number})
        })
        .then((court) => {
            booking = new Booking({ user1: idUser1, user2: user2_.id, court: court.id, date, status: "PRE"})
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