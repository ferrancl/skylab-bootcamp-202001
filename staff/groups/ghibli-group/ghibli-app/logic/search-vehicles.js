function searchVehicle (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let vehicles = new Array

    call(`https://ghibliapi.herokuapp.com/people`, undefined, (error, response) => {
        
        if (error) return callback(error)

        if (response.status === 200) {

            const _vehicles = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            console.log(vehicles)

            _vehicles.forEach(vehicle => vehicle.name.includes(query) ? vehicles.push(vehicle) : '')

            callback(error, vehicles)
        }
    })
}