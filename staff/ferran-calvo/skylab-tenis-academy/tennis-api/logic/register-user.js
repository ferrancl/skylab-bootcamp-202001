const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotAllowedError } = require('../../tennis-errors')
const bcrypt = require('bcryptjs')

module.exports = (name, surname, email, password) => {
    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')

    return User.findOne({ email })
        .then(user => {
            if (user) throw new NotAllowedError(`user with email ${email} already exists`)
            return bcrypt.hash(password, 10)
        })
        .then(nPassword => {
            password = nPassword
            return User.estimatedDocumentCount()
        })
        .then(memberNumber => {
            memberNumber += 1
            user = new User({ name, surname, memberNumber , email, password, created: new Date})
            return user.save()
        })
        .then(() => { })
}