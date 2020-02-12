describe('search-people', ()=>{
    it('should response with people content on query',(done)=>{

        searchPeople('totoro', (error, people)=>{
    
            expect(error).toBeUndefined()
            expect(people).toBeDefined()

            done()
        })
    })

    it('should fail on non string query', ()=>{

        expect(()=>{
            searchPeople(true, ()=>{})
        
        }).toThrowError(TypeError, 'query true is not a string')

        expect(()=>{
            searchPeople(1, ()=>{})
        
        }).toThrowError(TypeError, 'query 1 is not a string')
    })

    it('should fail on non callback function', ()=>{

        expect(()=>{
            searchPeople('string', true)
        
        }).toThrowError(TypeError, 'true is not a function')

        expect(()=>{
            searchPeople('string', 1)
        
        }).toThrowError(TypeError, '1 is not a function')

        expect(()=>{
            searchPeople('string', 'string')
        
        }).toThrowError(TypeError, 'string is not a function')
    })
})