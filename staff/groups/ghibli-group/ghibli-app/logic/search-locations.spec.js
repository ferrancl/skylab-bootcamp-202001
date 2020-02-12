describe('search-locations', ()=>{
    it('should response with locations content on query',(done)=>{

        searchLocations('totoro', (error, locations)=>{
    
            expect(error).toBeUndefined()
            expect(locations).toBeDefined()

            done()
        })
    })

    it('should fail on non string query', ()=>{

        expect(()=>{
            searchLocations(true, ()=>{})
        
        }).toThrowError(TypeError, 'query true is not a string')

        expect(()=>{
            searchLocations(1, ()=>{})
        
        }).toThrowError(TypeError, 'query 1 is not a string')
    })

    it('should fail on non callback function', ()=>{

        expect(()=>{
            searchLocations('string', true)
        
        }).toThrowError(TypeError, 'true is not a function')

        expect(()=>{
            searchLocations('string', 1)
        
        }).toThrowError(TypeError, '1 is not a function')

        expect(()=>{
            searchLocations('string', 'string')
        
        }).toThrowError(TypeError, 'string is not a function')
    })
})