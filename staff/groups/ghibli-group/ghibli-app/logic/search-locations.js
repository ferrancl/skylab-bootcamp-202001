/**
 * Search in locations endpoint
 * @param {String} query - query to search on locations category
 * @param {Funtion} callback - response with content or error
 */

function searchLocations (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let locations = []

    call(`https://ghibliapi.herokuapp.com/locations`, undefined, (error, response) => {
        
        if (error) return callback(error)

        if (response.status === 200) {

            const _locations = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))

            _locations.forEach(location => location.name.includes(query) ? locations.push(location) : '')
            
            callback(error, locations)
        }
    })
}