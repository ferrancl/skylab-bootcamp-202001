const { validate } = require('../../tennis-utils')
const { models: { User, Booking} } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (userId, date, bookingId) => {
    validate.string(userId, 'userId')
    validate.string(bookingId, 'bookingId')

    const dateWithoutHour = date.split('T')[0]

    date = new Date(date)
    validate.type(date, 'date', Date)

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

    return User.findOne({ _id: userId, bookings: bookingId })
        .then((correct) => {
            if (correct) {
                return Booking.findOneAndUpdate({ _id: bookingId }, { $set: { date: date, day: dateWithoutHour } })
            }
            else{
                throw new NotAllowedError ('This user cannot modify this book')
            }
        })
        .then(() => { return date.toString()})
}