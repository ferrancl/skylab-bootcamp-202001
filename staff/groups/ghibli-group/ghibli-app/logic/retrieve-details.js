/**
 * retrieve category details by id
 * @param {String} id - item id
 * @param {String} category - possible category
 * @param {Function} callback - function that response with the content
 */

function retrieveDetails(id, category, callback) {
    let categories = ['films', 'people', 'locations', 'species', 'vehicles']
    let films = undefined
    let characters = undefined
    let locations = undefined
    let species = undefined
    let vehicles = undefined
    
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
    if (typeof category !== 'string') throw new TypeError(`${category} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://ghibliapi.herokuapp.com/${category}/${id}`, undefined, (error, response) => {
        if (error) return callback(error)
        if (response.status === 200) {
            var result = JSON.parse(response.content)
            
            categories.splice(categories.indexOf(category), 1)

            //['people','locations', 'species', 'vehicles']

            for (i=0; i<categories.length; i++){
                switch (categories[i]){
                    case 'films':
                        if (result.films instanceof Array && result.films != "https://ghibliapi.herokuapp.com/films/") {
                            films = []
                            result.films.map(film=> call(film ,undefined, (error, response) => {
                                if (error) return callback(error)
            
                                if (response.status === 200) {
                                    films.push(JSON.parse(response.content))
                                    callback(undefined, result, films, characters, locations, species, vehicles)
                                }
                            }))
                        
                        }
                        break
                        
                        
                    case 'people':
                        if (result.people instanceof Array && result.people != "https://ghibliapi.herokuapp.com/people/") {
                            characters = []
                            result.people.map(character=> call(character ,undefined, (error, response) => {
                                if (error) return callback(error)
            
                                if (response.status === 200) {
                                    characters.push(JSON.parse(response.content))
                                    callback(undefined, result, films, characters, locations, species, vehicles)
                                }
                            }))
                            
                        }
                        break
                        
                    case 'locations':
                        if (result.locations instanceof Array && result.locations != "https://ghibliapi.herokuapp.com/locations/"){
                            locations = []
                            result.locations.map(location=> call(location ,undefined, (error, response) => {
                                if (error) return callback(error)
            
                                if (response.status === 200){
                                    locations.push(JSON.parse(response.content))
                                    callback(undefined, result, films, characters, locations, species, vehicles)
                                }
                            }))
                        }                           
                        break

                    case 'species':
                        if (result.species instanceof Array && result.species != "https://ghibliapi.herokuapp.com/species/"){
                            species = []
                            result.species.map(specie=> call(specie ,undefined, (error, response) => {
                                if (error) return callback(error)
            
                                if (response.status === 200) {
                                    species.push(JSON.parse(response.content))
                                    callback(undefined, result, films, characters, locations, species, vehicles)
                                }
                            }))
                        }
                        break

                    case 'vehicles':
                        if (result.vehicles instanceof Array && result.vehicles != "https://ghibliapi.herokuapp.com/vehicles/"){
                            vehicles= []
                            result.vehicles.map(vehicle=> call(vehicle ,undefined, (error, response) => {
                                if (error) return callback(error)
            
                                if (response.status === 200) {
                                    vehicles.push(JSON.parse(response.content))
                                    callback(undefined, result, films, characters, locations, species, vehicles)
                                }
                            }))
                        }
                        break
                }
                    
            }
            callback(undefined, result, films, characters, locations, species, vehicles)
        }
    })
}
