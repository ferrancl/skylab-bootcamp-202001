/**
 * Delete User from Users API
 * @param {String} password - user password
 * @param {String} token - user token
 * @param {Function} callback - function that response status or error
 */

function deleteUser(password, token, callback) {
    /* if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');
    if(typeof token !== 'string') throw new TypeError('token' + token + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback ' + callback + ' is not a function'); */
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)
    if(typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    if (!sub) throw new Error('no user id in token')


    call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
        body: JSON.stringify({ password })
   
    }, (error,response) => {
        if (error) return callback(new ReferenceError(error))

        const { error: _error} = JSON.parse(response.content)

        if (_error) return callback(new ReferenceError(_error))
        //if (error) return callback(error)
        if (response.status === 204) callback()
    })
}