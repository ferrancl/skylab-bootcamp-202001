const { validate } = require('../utils')
const { models: { Booking } } = require('../data')
const { NotFoundError } = require('../errors')

module.exports = id => {
    validate.string(id, 'id')

    return Booking.find({ users: id })
        .then(book => {
            if (!book) throw new NotFoundError(`No books of this user`)
            
            return book
        })
        
}