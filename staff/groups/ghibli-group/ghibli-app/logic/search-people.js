function searchPeople (query, callback) {
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    let people = new Array

    call(`https://ghibliapi.herokuapp.com/people`, undefined, (error, response) => {
        
        if (error) return callback(error)

        if (response.status === 200) {

            const _people = JSON.parse(response.content)

            //results.forEach(result => result.isFav = favs.includes(result.id))
            console.log(results)

            _people.forEach(person => person.name.includes(query) ? people.push(person) : '')

            callback(error, people)
        }
    })
}