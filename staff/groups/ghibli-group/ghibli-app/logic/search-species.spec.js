describe('search-species', ()=>{
    
    it('should succed on search query', (done) => {

        let querys = ['Human','Deer','Spirit','God','Cat','Totoro']
        let query = querys.random()

        searchSpecies(query, (error, species) => {

            expect(error).toBeUndefined()
            expect(species).toBeDefined()

            done()
        })
    })

    it('should fail on non query string', () => {
        
        expect(() => {
            searchSpecies(true, ()=>{})
        }).toThrowError(TypeError, 'query true is not a string')
        
        expect(() => {
            searchSpecies(3, ()=>{})
        }).toThrowError(TypeError, 'query 3 is not a string')

        expect(() => {
            searchSpecies(undefined, ()=>{})
        }).toThrowError(TypeError, 'query undefined is not a string')
    })

    it('should fail on non function callback', () => {
        
        expect(() => {
            searchSpecies('query', 'not-function')
        }).toThrowError(TypeError, 'not-function is not a function')
        
        expect(() => {
            searchSpecies('query', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            searchSpecies('query', 2)
        }).toThrowError(TypeError, '2 is not a function')
    })
    
})