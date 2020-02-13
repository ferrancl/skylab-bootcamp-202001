describe('retrieve-details', ()=>{

    it('should succed on locations url and valid id', (done) =>{

        let locationsIds = ['11014596-71b0-4b3e-b8c0-1c4b15f28b9a', '64a996aa-481e-4627-9624-ab23f59a05a9',
                'a8bd9c03-7c80-4a97-b7c0-6a668acaf576','56e423c4-d9a1-44c4-8bdb-1cab45fbf63e','660c8c91-bd92-43db-b475-b2df6ca96fec','6ba60a86-7c74-4ec4-a6f4-7112b5705a2f','fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2','a072ec53-0467-4fac-864f-df234f9c4315','26361a2c-32c6-4bd5-ae9c-8e40e17ae28d','42f787d8-1fcb-4d3d-82f2-a74409869368',
            '0fafa7a3-64c1-43fe-881b-ecb605c01e09']
    
        let locationId = locationsIds.random() 
        
        retrieveDetails('locations', locationId, (error,result) =>{
            expect(error).toBeUndefined()
            console.log(result)
            expect(result).toBeDefined()
            done()
         
        })
    })

    it('should succed on locations url and valid id', (done) =>{

        let locationsIds = []
    
        let locationId = locationsIds.random() 
        
        retrieveDetails('locations', locationId, (error,result) =>{
            expect(error).toBeUndefined()
            console.log(result)
            expect(result).toBeDefined()
            done()
         
        })
    })
    
    /* it('should fail on non-string id', () => {

        expect(()=>{
            retrieveDetails( true, 'films', ()=>{})
        }).toThrowError(TypeError, 'true is not a string')
    }) */
})