// require('dotenv').config()

// const { expect } = require('chai')
// const { random } = Math
// const { mongoose, models: { User, Booking, Court } } = require('tennis-data')
// const book = require('./book')

// const { env: { TEST_MONGODB_URL } } = process

// describe('book', () => {
//     let name, surname, email, email2, password, memberNumber, memberNumber2, number
    
//     before(() =>
//         mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//             .then(() => User.deleteMany())
//     )

//     beforeEach(() => {
//         name = `name-${random()}`
//         surname = `surname-${random()}`
//         email = `email-${random()}@mail.com`
//         email2 = `email2-${random()}@mail.com`
//         password = `password-${random()}`
//         memberNumber = `memberNumber-${Math.floor(random())}`
//         memberNumber2 = `memberNumber2-${Math.floor(random())}`
//         number = `number-${Math.floor(random())}`
//     })
//     describe('when user already exists', () => {
        
//         let _id, _other, user3, user4, __id
        
//         beforeEach(() =>
//             User.insertMany([
//                 { name, surname, memberNumber, email, password },
//                 { name, surname, memberNumber: memberNumber2, email: email2, password }
//             ])
//             .then(([{ id }, { id: other }]) => {
//                 _id = id
//                 _other = other
//                 Court.create({number, surface: "clay"})
//             })
//             .then(court => {
//                 __id = court.id
//             })
            
//             )

//         it('should succeed on correct user data', () =>
//             book(_id, memberNumber2, user3, user4, number, "2020-03-15T09:00")
//             .then(result => {
//                 expect(result).not.to.exist
//                 expect(result).to.be.undefined

//                 return Booking.findOne({ users: _id })
//             })
//             .then(book => {
//                 expect(book).to.exist
//                 expect(book.id).to.be.a('string')
//                 // expect(book.users).to.equal([_id, _other])
//                 expect(book.court).to.equal(__id)
//                 expect(book.date).to.be.instanceOf(Date)
//             })
//         )
//         // TODO unhappy paths and other happies if exist
    
//         after(() => Booking.deleteMany().then(() => mongoose.disconnect()))
//     })
// })