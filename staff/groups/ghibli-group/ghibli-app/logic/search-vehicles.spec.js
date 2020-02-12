describe('search-vehicles', ()=>{
    
    it('should succed on search query', (done) => {

        let querys = ['Air Destroyer Goliath','Red Wing','Sosukes Boat']
        let query = querys.random()

        searchVehicles(query, (error, vehicles) => {

            expect(error).toBeUndefined()
            expect(vehicles).toBeDefined()

            done()
        })
    })

    it('should fail on non query string', () => {
        
        expect(() => {
            searchVehicles(true, ()=>{})
        }).toThrowError(TypeError, 'query true is not a string')
        
        expect(() => {
            searchVehicles(3, ()=>{})
        }).toThrowError(TypeError, 'query 3 is not a string')

        expect(() => {
            searchVehicles(undefined, ()=>{})
        }).toThrowError(TypeError, 'query undefined is not a string')
    })

    it('should fail on non function callback', () => {
        
        expect(() => {
            searchVehicles('query', 'not-function')
        }).toThrowError(TypeError, 'not-function is not a function')
        
        expect(() => {
            searchVehicles('query', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            searchVehicles('query', 2)
        }).toThrowError(TypeError, '2 is not a function')
    })
    
})