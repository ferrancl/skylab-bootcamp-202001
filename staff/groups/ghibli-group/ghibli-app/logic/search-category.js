/**
 * search in API by Category
 * @param {String} category - category to search
 * @param {Function} callback - response with results content
 */

function searchCategory(category, callback) {
   
    if(typeof category !== 'string') throw new TypeError(`${category} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)


    call(`https://ghibliapi.herokuapp.com/${category}`, undefined, (error, response) => {
        
        
        if (response.status === 200) {
            const results = JSON.parse(response.content)

            callback(undefined, results)
        }
    })
}