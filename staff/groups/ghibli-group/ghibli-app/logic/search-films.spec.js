describe('search-films', ()=>{
    it('should response with films url',(done)=>{

        searchFilms('https://ghibliapi.herokuapp.com/films', (error, films)=>{
    
            expect(error).toBeUndefined()
            expect(films).toBeDefined()

            done()
        })
    })

    it('should fail on non string query', ()=>{

        expect(()=>{
            searchFilms(true, ()=>{})
        
        }).toThrowError(TypeError, 'query true is not a string')

        expect(()=>{
            searchFilms(1, ()=>{})
        
        }).toThrowError(TypeError, 'query 1 is not a string')
    })

    it('should fail on non callback function', ()=>{

        expect(()=>{
            searchFilms('string', true)
        
        }).toThrowError(TypeError, 'true is not a function')

        expect(()=>{
            searchFilms('string', 1)
        
        }).toThrowError(TypeError, '1 is not a function')

        expect(()=>{
            searchFilms('string', 'string')
        
        }).toThrowError(TypeError, 'string is not a function')
    })
})