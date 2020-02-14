
function searchAll(query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let results = new Array

    call(`https://ghibliapi.herokuapp.com/films`, undefined, (error, response) => {
            
        if (error) return callback(error)

        if (response.status === 200) {
            const films = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            // films.forEach(film => console.log('films: ' + film.title))

            films.forEach(film => film.title.includes(query) ? results.push(film) : '')

            console.log(results)

            call(`https://ghibliapi.herokuapp.com/people`, undefined, (error, response) => {
        
                if (error) return callback(error)
    
                if (response.status === 200) {

                    const people = JSON.parse(response.content)
    
                    //results.forEach(result => result.isFav = favs.includes(result.id))
                    console.log(results)
    
                    people.forEach(person => person.name.includes(query) ? results.push(person) : '')

                    call(`https://ghibliapi.herokuapp.com/species`, undefined, (error, response) => {
        
                        if (error) return callback(error)
            
                        if (response.status === 200) {

                            const species = JSON.parse(response.content)
            
                            //results.forEach(result => result.isFav = favs.includes(result.id))
                            console.log(results)

                            
                            species.forEach(specie => specie.name.includes(query) ? results.push(specie) : '')

                            call(`https://ghibliapi.herokuapp.com/locations`, undefined, (error, response) => {
        
                                if (error) return callback(error)
                    
                                if (response.status === 200) {

                                    const locations = JSON.parse(response.content)
                    
                                    //results.forEach(result => result.isFav = favs.includes(result.id))
                                    console.log(results)

                    
                                    locations.forEach(location => location.name.includes(query) ? results.push(location) : '')

                                    call(`https://ghibliapi.herokuapp.com/vehicles`, undefined, (error, response) => {
        
                                        if (error) return callback(error)
                            
                                        if (response.status === 200) {

                                            const vehicles = JSON.parse(response.content)
                            
                                            //results.forEach(result => result.isFav = favs.includes(result.id))
                                            
                                            console.log(results)

                                            vehicles.forEach(vehicle => vehicle.name.includes(query) ? results.push(vehicle) : '')

                                            if (results.length === 0) throw new Error ('No results')

                                            callback(error, results)
                                        }
                                    })            
                                }
                            })     
                        }
                    })        
                }
            })
        }
    })
}