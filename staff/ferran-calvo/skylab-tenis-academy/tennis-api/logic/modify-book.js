const { validate } = require('../../tennis-utils')
const { models: { User, Booking, Court} } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (userId, number, date, bookingId) => {
    validate.string(userId, 'userId')
    validate.string(bookingId, 'bookingId')

    let court_
    const dateWithoutHour = date.split('T')[0]

    date = new Date(date)
    validate.type(date, 'date', Date)

    debugger
    const now = new Date(Date.now())
    if ((date.getHours())< 8 || (date.getHours())>22){
        throw new NotAllowedError ('Bookings only allowed between 8 and 22 hours')
    }

    //Bookings only allowed for the next 48 hours
    let limitTime = new Date(now)
    limitTime.setDate(limitTime.getDate()+2)
    if (date > limitTime){
        throw new NotAllowedError ('Bookings only allowed for the next 48 hours')  
    } 

    return Court.findOne({number})
        .then(courtBook => {
            court_ = courtBook._id
            return Booking.findOne({ court: court_, date})
        })
        .then(book => {
            if (book) throw new NotAllowedError(`This court is not avalable at ${date}`)
            return Booking.findOneAndUpdate({ _id: bookingId }, { $set: { court: court_, date: date, day: dateWithoutHour } })
        })
        .then(() => { return date.toString()})
}