describe('call', () => {
    it('should succeed on valid url', done => {

        call(`https://ghibliapi.herokuapp.com/films`, undefined, (error, response) => {
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