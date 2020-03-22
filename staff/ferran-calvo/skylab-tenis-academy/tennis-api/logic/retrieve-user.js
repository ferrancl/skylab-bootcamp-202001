const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')
const { mongoose: { Types: { ObjectId } } } = require('../../tennis-data')

module.exports = id => {
    validate.string(id, 'id')

    return User.findById(id)
        .lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} does not exist`)

            user.id = user._id.toString()
            delete user._id
            delete user.__v

            return user
        })
        .then(({ name, surname, memberNumber, email, bookings }) => ({ name, surname, memberNumber, email, bookings }))
}