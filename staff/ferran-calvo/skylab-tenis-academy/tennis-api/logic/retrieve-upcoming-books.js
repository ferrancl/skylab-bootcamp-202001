const { models: { Booking } } = require('tennis-data')

module.exports = () => {

    return Booking.find({date: {$gt: Date.now()}}).sort({ date: -1 })
        .then(books => {
            return books
        })
}