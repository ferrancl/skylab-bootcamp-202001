function searchSpecies (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let species = []

    call(`https://ghibliapi.herokuapp.com/species`, undefined, (error, response) => {
        
        if (error) return callback(error)

        if (response.status === 200) {

            const _species = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            _species.forEach(specie => specie.name.includes(query) ? species.push(specie) : '')

            callback(error, species)
        }
    })
}