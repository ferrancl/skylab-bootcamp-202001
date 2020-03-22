const { models: { Booking } } = require('tennis-data')

module.exports = (day) => {

    return Booking.find({day})
        .lean()
        .then(books => {
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