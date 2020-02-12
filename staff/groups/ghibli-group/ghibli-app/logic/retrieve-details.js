function retrieveDetails(id, category, callback) {
    var characterFilm =[]
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
    // if (typeof category !== 'string') throw new TypeError(`${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://ghibliapi.herokuapp.com/${category}/${id}`, undefined, (error, response) => {
        if (error) return callback(error)
        debugger
        if (response.status === 200) {
            var result = JSON.parse(response.content)   
            if (category === 'films'){
                (result.species).map(character=> call(character ,undefined, (error, response) => {
                    if (error) return callback(error)

                    if (response.status === 200) {
                        debugger
                        characterFilm.push(JSON.parse(response.content).name)
                        callback(undefined, result, characterFilm)
                    }
                }))
            }
            debugger
            callback(undefined, result, characterFilm)
        }
    })
}
