/**
 * Include the id of the films to the favs list
 * @param {String} token the token to indetificate the user 
 * @param {String} id the id of the films
 * @param {Function} callback function that modify the user
 */


function createFav (token, id, callback) {
    if (typeof token !== 'string') throw new TypeError (`token ${token} is not a string`)
    if (typeof callback !== 'function') throw new TypeError (`callback ${callback} is not a function`)

    let user

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
        
    }, (error, response) => {

        if (error) return callback(error)

        user = JSON.parse(response.content)

        user.favs.includes(id) ? user.favs.splice(user.favs.indexOf(id), 1) : user.favs.push(id)

        var favs = user.favs

        if (response.status === 200) {

            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
                body: JSON.stringify({favs})
            }, (error, response) => {
    
                if (error) return callback(error)
    
                //if (_error) return callback(new Error(_error))

                if (response.status === 204) {
                    
                    callback(user)
                }
    
            })

        }

    })
}