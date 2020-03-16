require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { mongoose, models: { User } } = require('tennis-data')
const { expect } = require('chai')
const { random } = Math
const updateUser = require('./update-user')
const bcrypt = require('bcryptjs')

describe('updateUser', () => {
    before(() =>
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => User.deleteMany())
    )

    let name, surname, email, password, memberNumber, email_, newPassword

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        memberNumber = `memberNumber - ${Math.floor(random())}`
        email_ = `email-${random()}@mail.com`
        newPassword = `newPassword-${random()}`
    })

    describe('when user already exists', () => {
        let _id

        beforeEach(() =>
            bcrypt.hash(password, 10)
                .then(password =>
                    User.create({ name, surname, memberNumber, email, password })
                )
                .then(user => _id = user.id)
        )

        it('should succeed on correct and valid and right credentials', () =>
            updateUser(_id, { email: email_, oldPassword: password, password: newPassword})
                .then(() => {
                    return User.findById(_id)
                })
                .then (user => {
                    expect(user.email).to.equal(email_)
                    return bcrypt.compare(newPassword, user.password)
                })
                .then(validPassword => expect(validPassword).to.be.true)
        )
    })

    // TODO more happies and unhappies

    after(() => User.deleteMany().then(() => mongoose.disconnect()))
})