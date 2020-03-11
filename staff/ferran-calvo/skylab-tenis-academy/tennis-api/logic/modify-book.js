const { validate } = require('../../tennis-utils')
const { models: { User, Booking} } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (userId, date, bookingId) => {
    validate.string(userId, 'userId')
    validate.string(bookingId, 'bookingId')

    const dateWithoutHour = date.split('T')[0]

    date = new Date(date)
    validate.type(date, 'date', Date)

    
    return User.findOne({ _id: userId, bookings: bookingId })
        .then((correct) => {
            if (correct) {
                return Booking.findOneAndUpdate({ _id: bookingId }, { $set: { date: date, day: dateWithoutHour } })
            }
        })
        .then(() => { return date.toString()})
}