describe('retrieve-details', ()=>{

    it('should succed on valid url', done =>{
        let id = '2baf70d1-42bb-4437-b551-e5fed5a87abe'
        let category = 'films'
        
        retrieveDetails(id, category, (error,result) =>{
            expect(error).toBeUndefined()

            expect(result).toBeDefined()

            done()
        })
    })
    
    it('should fail on non-string id', () => {

        expect(()=>{
            retrieveDetails( true, 'films', ()=>{})
        }).toThrowError(TypeError, 'true is not a string')
    })
})