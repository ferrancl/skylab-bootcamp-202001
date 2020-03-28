const { validate } = require('../../tennis-utils')
const { models: { User, Booking, Court } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')

module.exports = (userId, hour) => {
    validate.string(userId, 'userId')
    validate.string(hour, 'hour')
    hour = parseInt(hour)
    let courtsArray_ = []
    let date = new Date(Date.now())
    if (hour < date.getHours()) throw new NotAllowedError("Wrong data")
    let dateWithoutMinutes = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour + 1)
    date.setHours(22) 

    return Court.find({})
        .then(courts=> {
            courts.forEach(court => {
                courtsArray_.push({id: court.id, number: court.number})
            })
            async function quickBook(){
                while (dateWithoutMinutes<date){
                    debugger
                    for (let court of courts) {
                        let result = await Booking.find({court, date: dateWithoutMinutes})
                        if (result.length === 0){
                            return [court, dateWithoutMinutes]
                        } 
                    }
                    dateWithoutMinutes.setHours(dateWithoutMinutes.getHours()+1)
                }
                return "No  bookings available for today"
            }
            return quickBook()
        })
        .then(book => {
            console.log(book)
            return book
        })
}