const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = id => {
    validate.string(id, 'id')

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} does not exist`)

            if (user.deactivated) throw new NotAllowedError(`user with id ${id} is deactivated`)

            return user

            // user.retrieved = new Date

            // return user.save()
        })
        .then(({ name, surname, memberNumber, email, bookings }) => ({ name, surname, memberNumber, email, bookings }))
}