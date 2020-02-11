function SearchFilms (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let films = new Array

    call(`https://ghibliapi.herokuapp.com/films`, undefined, (error, response) => {
            
        if (error) return callback(error)

        if (response.status === 200) {
            const _films = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            // films.forEach(film => console.log('films: ' + film.title))

            _films.forEach(film => film.title.includes(query) ? films.push(film) : '')

            console.log(results)

            callback(error, films)
        }
    })
}