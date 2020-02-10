function searchAll(query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://ghibliapi.herokuapp.com/films/${query}`, undefined, (error, response) => {
            
            if (error) return callback(error)

            if (response.status === 200) {
                const films = JSON.parse(response.content)

                //results.forEach(result => result.isFav = favs.includes(result.id))
console.log(films)
                callback(undefined, results)
            }
        })
}