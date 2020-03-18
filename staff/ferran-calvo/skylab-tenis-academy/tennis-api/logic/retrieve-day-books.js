const { models: { Booking } } = require('tennis-data')

module.exports = (day) => {

    return Booking.find({day})
        .then(books => {
            return books
        })
}