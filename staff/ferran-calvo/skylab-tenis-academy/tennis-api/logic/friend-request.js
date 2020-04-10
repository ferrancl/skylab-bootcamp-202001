const { validate } = require('tennis-utils')
const { models: { User } } = require('tennis-data')
const { NotAllowedError } = require('tennis-errors')

/**
 * Checks user credentials against the storage
 * 
 * @param {string} idUser1 user's id that is doing the friend request 
 * @param {string} user2 user's member number that is inviting user1
 * 
 * @returns {Promise}
 * 
 * @throws {NotAllowedError} on wrong credentials
 */
module.exports = (idUser1, user2) => {
    validate.string(idUser1, 'idUser1')
    validate.string(user2, 'user2')

    return Promise.all([User.findById(idUser1), User.findOne({ memberNumber: user2 })])
        .then(result => { 
            const [user1, user2_] = result
            if (!user2_) throw new NotAllowedError(`User with ${user2} member number does not exist`)
            if (user2_.friends){
                if (user2_.friends.includes(idUser1)) throw new NotAllowedError(`User with member number ${user2} and you are already friends`)}
            if (user2_.invitations){
                if (user2_.invitations.includes(idUser1)) throw new NotAllowedError(`You have already sent a friend request to user with member number ${user2}`)}
            if (user1.invitations){
                if (user1.invitations.includes(user2_.id)) throw new NotAllowedError(`You have a friend request pending of user with member number ${user2}`)}

            user1.requests.push(user2_.id)
            user2_.invitations.push(user1.id)
            return Promise.all([user1.save(), user2_.save()])
        })
        .then(() => {})
}