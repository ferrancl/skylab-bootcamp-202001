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
    let dateWithoutMinutes = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour + 2)
    date.setHours(22) 

    return Court.find({})
        .then(courts=> {
            courts.forEach(court => {
                courtsArray_.push({id: court.id, number: court.number})
            })
            async function quickBook(){
                while (dateWithoutMinutes<date){
                    for (let court of courts) {
                        let result = await Booking.find({court, date: dateWithoutMinutes})
                        if (result.length === 0){
                            return [court.number, dateWithoutMinutes]
                        } 
                    }
                    dateWithoutMinutes.setHours(dateWithoutMinutes.getHours()+1)
                }
                throw new Error("No bookings availables for today")
            }
            return quickBook()
        })
        .then(book => {
            debugger
            book[1] = book[1].getMonth() + 1 +  "/" + (book[1].getDate())+"/" + (book[1].getFullYear())+ " " + (book[1].getHours()-2)+":00"
            return book
        })
}