const { validate } = require('../../tennis-utils')
const { models: { User } } = require('../../tennis-data')
const { NotFoundError, NotAllowedError } = require('../../tennis-errors')
const bcrypt = require('bcryptjs')

module.exports = (userId, body) => {
    const {email, oldPassword, password} =  body

    let email_

    validate.string(userId, 'userId')
    if (email){
        validate.string(email, 'email')
        validate.email(email)
        email_ = email
    }
    if (oldPassword && password){
        validate.string(oldPassword, 'oldPassword')
        validate.string(password, 'password')
    }

    return User.findOne({email})
        .then(incorrect =>{
            if (incorrect) throw new NotAllowedError('This email is already in use.')
            return User.findById(userId)
        })
        .then(user => {
            if (!email){
                email_ = user.email
            }
            if (user) {
                if (oldPassword){
                    return bcrypt.compare(oldPassword, user.password)
                }
                return
            }else{
                throw new NotFoundError('This user cannot change the data')
            }
        })
        .then((correct) => {
            if (correct && oldPassword){
                return bcrypt.hash(password, 10)

            }if (oldPassword){
                throw new NotAllowedError('Old password incorrect')
            }else{
                return
            }    
        })
        .then(nPassword => {
            if (nPassword){
                return User.findByIdAndUpdate(userId , { $set: {email: email_, password: nPassword}})
            }
            else{
                return User.findByIdAndUpdate(userId , { $set: {email: email_}})
            }
        })
        .then(() => {})
}