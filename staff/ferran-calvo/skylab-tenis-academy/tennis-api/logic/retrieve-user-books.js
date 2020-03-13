const { validate } = require('tennis-utils')
const { models: { Booking } } = require('tennis-data')
const { NotFoundError } = require('tennis-errors')

module.exports = id => {
    validate.string(id, 'id')

    return Booking.find({ users: id, date: {$gt: Date.now()}}).sort({ date: 1 })
        .then(book => {
            if (!book) throw new NotFoundError(`No books of this user`)
            
            return book
        })  
}