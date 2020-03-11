const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')
const nodemailer = require('nodemailer')


module.exports = (email) => {
    validate.string(email, 'email')
    validate.email(email)

    let transporter
    let mailOptions
    let password_

    return User.findOne({email})
        .then(user => {
            debugger
            password_ = user.password
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
                subject: 'Password for online access',
                text: `You have asked for your password. Your password is: ${password_}`
            }
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            })
        })
        .then(()=>{})         
}