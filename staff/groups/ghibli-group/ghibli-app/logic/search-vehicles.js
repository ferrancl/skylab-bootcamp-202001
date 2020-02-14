/**
 * Search in vehicles endpoint
 * @param {String} query - query to search on vehicles category
 * @param {Funtion} callback - response with content or error
 */

function searchVehicles (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let vehicles = []

    call(`https://ghibliapi.herokuapp.com/vehicles`, undefined, (error, response) => {
        
        if (error) return callback(error)

        if (response.status === 200) {

            const _vehicles = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))

            _vehicles.forEach(vehicle => vehicle.name.includes(query) ? vehicles.push(vehicle) : '')

            callback(error, vehicles)
        }
    })
}