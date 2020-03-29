require('dotenv').config()

const { expect } = require('chai')
const { random } = Math
const { mongoose, models: { User, Booking, Court } } = require('tennis-data')
const { NotAllowedError } = require('tennis-errors')
const book = require('./book')

const { env: { TEST_MONGODB_URL } } = process

describe('book', () => {
    let name, surname, email, email2, email3, password, memberNumber, memberNumber2, memberNumber3, number
    
    before(() =>
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => User.deleteMany())
    )

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        email2 = `email2-${random()}@mail.com`
        email3 = `email3-${random()}@mail.com`
        password = `password-${random()}`
        memberNumber = `memberNumber-${Math.floor(random())}`
        memberNumber2 = `memberNumber2-${Math.floor(random())*5}`
        memberNumber3 = `memberNumber3-${Math.floor(random())*10}`
        number = `number-${Math.floor(random())}`
    })
    describe('when user already exists', () => {
        
        let _id1, _other, user3, user4, __id
        
        beforeEach(() =>
            User.insertMany([
                { name, surname, memberNumber, email, password },
                { name, surname, memberNumber: memberNumber2, email: email2, password },
                { name, surname, memberNumber: memberNumber3, email: email3, password }

            ])
            .then(([{ id }, { id: other }]) => {
                _id1 = id
                _other = other
                return Court.create({number, surface: "clay"})
            })
            .then(court => {
                __id = court.id
            })
            
            )

        it('should succeed on correct user data', () =>         
            book(_id1, memberNumber2, user3, user4, number, new Date(Date.now()))
            .then(() => {
                return Booking.findOne({ users: _id1 })
            })
            .then(book => {
                expect(book).to.exist
                expect(book.id).to.be.a('string')
                expect(book.users[0].toString()).to.equal(_id1)
                expect(book.users[1].toString()).to.equal(_other)
                expect(book.court.number).to.equal(number)
                expect(book.date).to.be.instanceOf(Date)
            })
        )

        it('should fail on wrong hour', () => {
            let date = new Date(Date.now())
            date.setDate(date.getDate()-2)
            expect(() => book(_id1, memberNumber2, user3, user4, number, date)).to.throw(NotAllowedError, 'Wrong data')
        })

        it('should fail when member user 3 is provided and member number 4 is empty', () => {
            expect(() => book(_id1, memberNumber2, memberNumber3, user4, number, new Date(Date.now()))).to.throw(NotAllowedError, 'Please enter the user member number of the 4th player')
        })

        it('should fail when member user 4 is provided and member number 3 is empty', () => {
            expect(() => book(_id1, memberNumber2, user3, memberNumber3, number, new Date(Date.now()))).to.throw(NotAllowedError, 'Please enter the user member number of the 3rd player')
        })

        after(() => Booking.deleteMany().then(() => mongoose.disconnect()))
    })
})