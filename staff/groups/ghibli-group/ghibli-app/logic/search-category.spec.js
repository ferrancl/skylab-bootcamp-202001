describe('search-category', () => {

    it('should succed on valid url and category', (done) => {

        let categories = ['films', 'locations', 'people', 'species', 'vehicles']
        let category = categories.random()

        searchCategory(category, (error, response)=>{

            expect(error).toBeUndefined()
            expect(response).toBeDefined()

            done()
        })
    })

    it('should fail on non string category', ()=> {

        expect(()=>{
            searchCategory(true, ()=>{})
        }).toThrowError(TypeError, 'true is not a string')

        expect(()=>{
            searchCategory(undefined, ()=>{})
        }).toThrowError(TypeError, 'undefined is not a string')

        expect(()=>{
            searchCategory(8, ()=>{})
        }).toThrowError(TypeError, '8 is not a string')
    })

    it('should fail on non function callback', ()=> {

        expect(()=>{
            searchCategory('films', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(()=>{
            searchCategory('films', true)
        }).toThrowError(TypeError, 'true is not a function')

        expect(()=>{
            searchCategory('films', 'not-function-callback')
        }).toThrowError(TypeError, 'not-function-callback is not a function')
    })
})