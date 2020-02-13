describe('search-people', ()=>{
    
    it('should succed on search query', (done) => {

        let querys = ['Ashitaka', 'San', 'Eboshi', 'Jigo', 'Kohroku', 'Gonza',
                    'Hii-sama', 'Yakul', 'Shishigami', 'Moro']
        let query = querys.random()

        searchPeople(query, (error, people) => {

            expect(error).toBeUndefined()
            expect(people).toBeDefined()

            done()
        })
    })

    it('should fail on non query string', () => {
        
        expect(() => {
            searchPeople(true, ()=>{})
        }).toThrowError(TypeError, 'query true is not a string')
        
        expect(() => {
            searchPeople(3, ()=>{})
        }).toThrowError(TypeError, 'query 3 is not a string')

        expect(() => {
            searchPeople(undefined, ()=>{})
        }).toThrowError(TypeError, 'query undefined is not a string')
    })

    it('should fail on non function callback', () => {
        
        expect(() => {
            searchPeople('query', 'not-function')
        }).toThrowError(TypeError, 'not-function is not a function')
        
        expect(() => {
            searchPeople('query', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            searchPeople('query', 2)
        }).toThrowError(TypeError, '2 is not a function')
    })
    
})