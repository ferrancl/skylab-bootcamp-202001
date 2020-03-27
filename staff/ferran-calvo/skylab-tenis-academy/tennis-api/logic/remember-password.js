const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')


module.exports = (email) => {
    validate.string(email, 'email')
    validate.email(email)

    let transporter
    let mailOptions
    let password_

    return User.findOne({ email })
        .then(user => {
            if (!user) throw new NotFoundError('Email not registered')
            password_ = (Math.floor(Math.random() * (9999999 - 1)) + 1).toString()
            return bcrypt.hash(password_, 10)
                .then(newPassword => {
                    return User.findOneAndUpdate({ email }, { $set: { password: newPassword } })
                        .then(user => {
                            return user.save()
                                .then(() => {
                                    transporter = nodemailer.createTransport({
                                        service: 'gmail',
                                        auth: {
                                            user: 'info.break.point.club@gmail.com',
                                            pass: 'breakpoint123'
                                        }
                                    })
                                    mailOptions = {
                                        from: 'Break Point',
                                        to: `${email}`,
                                        subject: 'Password for online access',
                                        text: `You have asked for a new password. Your new password is: ${password_}. You can change it in settings`
                                    }
                                    transporter.sendMail(mailOptions, function (error, info) {
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            console.log('Email sent: ' + info.response);
                                        }
                                    })
                                })
                        })
                })

        })
        .then(() => { })
}