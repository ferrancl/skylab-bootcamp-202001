const { validate } = require('../../tennis-utils')
const { models: { User, Booking} } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (userId, body) => {
    validate.string(userId, 'userId')
    validate.string(bookingId, 'bookingId')

    return User.findById(userId)
        .then((user) => {
            if (user) {
                return User.findOneAndUpdate({ _id: userId }, { $set: {body} })
            }
            else{
                throw new NotAllowedError ('This user cannot modify this book')
            }
        })
        .then(() => {})
}