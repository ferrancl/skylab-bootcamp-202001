const { validate } = require('tennis-utils')
const { models: { Booking } } = require('tennis-data')
const { NotFoundError } = require('tennis-errors')

module.exports = id => {
    validate.string(id, 'id')

    return Booking.find({ users: id, date: {$gt: Date.now()}}).sort({ date: 1 })
        .lean()
        .then(books => {
            if (!books) throw new NotFoundError(`No books of this user`)

            books.forEach(book => {
                book.id = book._id.toString()
                book.court.id = book.court._id.toString()
                delete book._id
                delete book.__v
                delete book.court._id
            })
            
            return books
        })  
}