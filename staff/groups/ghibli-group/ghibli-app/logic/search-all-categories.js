/**
 * Search by category
 * @param {String} query - query to search in category 
 * @param {String} category - category that search
 * @param {Function} callback - response with search content or error
 */

function searchAllCategories (query, category, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let results = new Array

    call(`https://ghibliapi.herokuapp.com/${category}`, undefined, (error, response) => {
            
        if (error) return callback(error)

        if (response.status === 200) {
            const _results = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            // films.forEach(film => console.log('films: ' + film.title))

            _results.forEach(result => result.title.includes(query) ? results.push(result) : '')

            // console.log(films)

            callback(error, results)
        }
    })
}