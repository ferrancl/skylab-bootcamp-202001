/**
 * Authenticate User to take the token
 * Call to the users API authorization endpoint 
 * @param {String} username - login username
 * @param {String} password - login password
 * @param {Function} callback - function that retrieve the users APi response with the token
*/

function authenticateUser(username, password, callback){
    if (typeof username !== 'string') throw new TypeError(`username ${username} is not a string`)
    if (typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }, (error, response) => {
        if (error) return callback(new ReferenceError(error))

        const { error: _error, token } = JSON.parse(response.content)

        if (_error) return callback(new ReferenceError(_error))

        callback(undefined, token)
    })
}