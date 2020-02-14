/**
 * 
 * @param {String} name - user name 
 * @param {String} email - user email
 * @param {String} username - user username
 * @param {String} password - user paswword
 * @param {String} callback - function that response error/status
 */

function registerUser(name, email, username, password, callback) {
    if (typeof name !== 'string') throw new TypeError(`name ${name} is not a string`)
    if (!name.trim()) throw new ReferenceError('name is empty')
    if (typeof email !== 'string') throw new TypeError(`email ${email} is not a string`)
    if (!email.trim()) throw new ReferenceError('email is empty')
    if (typeof username !== 'string') throw new TypeError(`username ${username} is not a string`)
    if (!username.trim()) throw new ReferenceError('username is empty')
    if (typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)
    if (!password.trim()) throw new ReferenceError('password is empty')
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, username, password, datapp: 'ghibli', favs: [] })
    }, (error, response) => {
        if (error) return callback(new ReferenceError(error))

        if (response.status === 201) callback()
        else if (response.status === 409) {
            const { error } = JSON.parse(response.content)

            callback(new ReferenceError(error))
        } else callback(new ReferenceError('Unknown error'))
    })
}