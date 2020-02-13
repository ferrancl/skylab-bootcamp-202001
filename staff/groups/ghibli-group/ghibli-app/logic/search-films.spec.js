describe('search-films', ()=>{
    
    it('should succed on search query', (done) => {

        let querys = ['Castle in the Sky',
                    'Grave of the Fireflies',
                    'My Neighbor Totoro',
                    'Kikis Delivery Service',
                    'Only Yesterday',
                    'Porco Rosso',
                    'Pom Poko',
                    'Whisper of the Heart'    
                    ]
        let query = querys.random()

        searchFilms(query, undefined, undefined, (error, films) => {

            expect(error).toBeUndefined()
            expect(films).toBeDefined()

            done()
        })
    })

    it('should fail on non query string or undefined', () => {
        
        expect(() => {
            searchFilms(true, undefined, undefined, ()=>{})
        }).toThrowError(TypeError, 'query true is not a string')
        
        expect(() => {
            searchFilms(3, undefined, undefined, ()=>{})
        }).toThrowError(TypeError, 'query 3 is not a string')

    })

    it('should fail on non function callback', () => {
        
        expect(() => {
            searchFilms('query', undefined, undefined, 'not-function')
        }).toThrowError(TypeError, 'not-function is not a function')
        
        expect(() => {
            searchFilms('query', undefined, undefined, undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            searchFilms('query', undefined, undefined, 2)
        }).toThrowError(TypeError, '2 is not a function')
    })
    
})