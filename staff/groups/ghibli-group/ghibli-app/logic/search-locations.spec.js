describe('search-locations', ()=>{
    
    it('should succed on search query', (done) => {

        let querys = ['CaIrontown',
                    'Gutiokipanja',
                    'The Cat Kingdom',
                    'The Marsh House',
                    'Hospital',
                    'Gondoa',
                    'Ursulas Log Cabin' 
                    ]
        let query = querys.random()

        searchLocations(query, (error, location) => {

            expect(error).toBeUndefined()
            expect(location).toBeDefined()

            done()
        })
    })

    it('should fail on non query string', () => {
        
        expect(() => {
            searchLocations(true, ()=>{})
        }).toThrowError(TypeError, 'query true is not a string')
        
        expect(() => {
            searchLocations(3, ()=>{})
        }).toThrowError(TypeError, 'query 3 is not a string')

        expect(() => {
            searchLocations(undefined, ()=>{})
        }).toThrowError(TypeError, 'query undefined is not a string')
    })

    it('should fail on non function callback', () => {
        
        expect(() => {
            searchLocations('query', 'not-function')
        }).toThrowError(TypeError, 'not-function is not a function')
        
        expect(() => {
            searchLocations('query', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            searchLocations('query', 2)
        }).toThrowError(TypeError, '2 is not a function')
    })
    
})