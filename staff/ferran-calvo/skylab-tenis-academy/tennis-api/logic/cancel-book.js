const { validate } = require('../../tennis-utils')
const { models: { User, Booking } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (userId, bookingId) => {
    validate.string(userId, 'userId')
    validate.string(bookingId, 'bookingId')

    return User.findOne({ _id: userId, bookings: bookingId })
        .then((correct) => {
            if (correct) {
                return User.find({ bookings: bookingId })
            }
            else {
                throw new NotAllowedError('This user cannot cancel this book')
            }
        })
        .then(usersArray => {
            return usersArray.forEach(async user => await User.findByIdAndUpdate(user.id, { $pull: { bookings: bookingId } }))
        })
        .then(() => Booking.findByIdAndRemove(bookingId))
        .then(() => { })
}