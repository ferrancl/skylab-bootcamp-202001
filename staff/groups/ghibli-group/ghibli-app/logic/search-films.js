/**
 * search on films category and retrieve results
 * check if the user is logged in and if have favs
 * @param {String} query - to search in films category
 * @param {String} token - to identificate the user
 * @param {String} id - id of the film
 * @param {Function} callback - response with the content of results or error
 */

function searchFilms (query, token, id, callback) {

    if (typeof query !== 'string' && typeof query !== 'undefined') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let films = new Array

    if(token && id) {

        const [header, payload, signature] = token.split('.')
        if (!header || !payload || !signature) throw new Error('invalid token')
    
        const { sub } = JSON.parse(atob(payload))
    
        if (!sub) throw new Error('no user id in token')
    
            call(`https://skylabcoders.herokuapp.com/api/v2/users/${sub}`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            }, (error, response) => {
                if (error) return callback(error)
    
                const data = JSON.parse(response.content), { error: _error } = data
    
                if (_error) return callback(new Error(_error))
    
                const { name, email, username, favs } = data
    
                if(response.status === 200)
                    call(`https://ghibliapi.herokuapp.com/films`, undefined, (error, response) => {
                            
                        if (error) return callback(error)
                
                        if (response.status === 200) {
                            const _films = JSON.parse(response.content)
                
                            //results.forEach(result => result.isFav = favs.includes(result.id))
                            // films.forEach(film => console.log('films: ' + film.title))
                
                            _films.map(film => favs.includes(film.id) ? films.push(film) : '')
                
                            // console.log(films)
                
                            callback(error, films)
                        }
                    })
    
            })
    }

    else call(`https://ghibliapi.herokuapp.com/films`, undefined, (error, response) => {
                            
            if (error) return callback(error)
    
            if (response.status === 200) {
                const _films = JSON.parse(response.content)
    
                //results.forEach(result => result.isFav = favs.includes(result.id))
                // films.forEach(film => console.log('films: ' + film.title))
    
                _films.forEach(film => film.title.includes(query) ? films.push(film) : '')
    
                // console.log(films)
    
                callback(error, films)
            }
        })
}