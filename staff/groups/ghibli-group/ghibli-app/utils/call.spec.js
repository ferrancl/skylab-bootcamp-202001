describe('call', () => {
    it('should succeed on valid url', done => {


        let urls = ['https://ghibliapi.herokuapp.com/films',
                    'https://ghibliapi.herokuapp.com/people',
                    'https://ghibliapi.herokuapp.com/locations',
                    'https://ghibliapi.herokuapp.com/species',
                    'https://ghibliapi.herokuapp.com/vehicles'
        ]

        let url = urls.random()

        call(url, undefined, (error, response) => {
            expect(error).toBeUndefined()

            expect(response.status).toBe(200)

            done()
        })
    })

    it('should fail on invalid url', () => {
        const url = 'invalid-url'

        expect(() =>
            call(url, undefined, () => { })
        ).toThrowError(SyntaxError, url + ' is not an url')
    })

    it('should fail on valid non-existing url', done => {
        const url = 'https://non-existing.url'

        call(url, undefined, (error, response) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('network error')

            expect(response).toBeUndefined()

            done()
        })
    })
})