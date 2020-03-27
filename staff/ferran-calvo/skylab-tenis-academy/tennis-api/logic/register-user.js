const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotAllowedError } = require('../../tennis-errors')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')

module.exports = (name, surname, email, password) => {
    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')
    let memberNumber_

    return User.findOne({ email })
        .then(user => {
            if (user) throw new NotAllowedError(`User with email ${email} already exists`)
            return bcrypt.hash(password, 10)
        })
        .then(nPassword => {
            password = nPassword
            return User.estimatedDocumentCount()
        })
        .then(memberNumber => {
            memberNumber += 1
            memberNumber_ = memberNumber
            user = new User({ name, surname, memberNumber , email, password, created: new Date})
            return user.save()
        })
        .then(() => {
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'skylab.tennis.academy@gmail.com',
                    pass: 'Skylab1234'
                }
            })
                mailOptions = {
                    from: 'skylab.tennis.academy@gmail.com',
                    to: `${email}`,
                    subject: 'Welcome to Break Point Club',
                    text: `Dear ${name}, \n\nWelcome to our tennis club! You have registered sucesfully. \n\nYour member number is: ${memberNumber_}. You can login in our membership area using your email address or you member number. Let's play!`
                }
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                })
        })
        .then(() => { })
}