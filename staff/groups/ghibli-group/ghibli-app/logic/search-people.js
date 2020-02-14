/**
 * Search in people endpoint
 * @param {String} query - query to search on people category
 * @param {Funtion} callback - response with content or error
 */

function searchPeople (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let people = []

    call(`https://ghibliapi.herokuapp.com/people`, undefined, (error, response) => {
        
        if (error) return callback(error)

        if (response.status === 200) {

            const _people = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            // console.log(people)

            _people.forEach(person => person.name.includes(query) ? people.push(person) : '')

            callback(error, people)
        }
    })
}