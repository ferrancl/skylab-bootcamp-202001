describe('retrieve-details', ()=>{

    it('should succed on locations url and valid id', (done) =>{

        let locationsIds = ['11014596-71b0-4b3e-b8c0-1c4b15f28b9a', '64a996aa-481e-4627-9624-ab23f59a05a9',
                'a8bd9c03-7c80-4a97-b7c0-6a668acaf576','56e423c4-d9a1-44c4-8bdb-1cab45fbf63e','660c8c91-bd92-43db-b475-b2df6ca96fec','6ba60a86-7c74-4ec4-a6f4-7112b5705a2f','fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2','a072ec53-0467-4fac-864f-df234f9c4315','26361a2c-32c6-4bd5-ae9c-8e40e17ae28d','42f787d8-1fcb-4d3d-82f2-a74409869368',
            '0fafa7a3-64c1-43fe-881b-ecb605c01e09']
    
        let locationId = locationsIds.random() 
        
        retrieveDetails(locationId,'locations', (error,result) =>{
            expect(error).toBeUndefined()
           
            expect(result).toBeDefined()
            done()
         
        })
    })
    it('should succed on vehicles url and valid id', (done) =>{

        let vehiclesIds = ['4e09b023-f650-4747-9ab9-eacf14540cfb','d8f893b5-1dd9-41a1-9918-0099c1aa2de8','923d70c9-8f15-4972-ad53-0128b261d628']
    
        let vehicleId = vehiclesIds.random() 
        
        retrieveDetails(vehicleId,'vehicles', (error,result) =>{
            expect(error).toBeUndefined()
            
            expect(result).toBeDefined()
            done()
         
        })
    })

    it('should succed on films url and valid id', (done) =>{

        let filmsIds = ['2baf70d1-42bb-4437-b551-e5fed5a87abe','12cfb892-aac0-4c5b-94af-521852e46d6a','58611129-2dbc-4a81-a72f-77ddfc1b1b49','ea660b10-85c4-4ae3-8a5f-41cea3648e3e','4e236f34-b981-41c3-8c65-f8c9000b94e7','ebbb6b7c-945c-41ee-a792-de0e43191bd8','1b67aa9a-2e4a-45af-ac98-64d6ad15b16c']
    
        let filmId = filmsIds.random() 
        
        retrieveDetails(filmId,'films', (error,result) =>{
            expect(error).toBeUndefined()
            
            expect(result).toBeDefined()
            done()
         
        })
    })

    it('should succed on species url and valid id', (done) =>{

        let speciesIds = ['af3910a6-429f-4c74-9ad5-dfe1c4aa04f2','6bc92fdd-b0f4-4286-ad71-1f99fb4a0d1e','b5a92d0e-5fb4-43d4-ba60-c012135958e4','f25fa661-3073-414d-968a-ab062e3065f7','603428ba-8a86-4b0b-a9f1-65df6abef3d3','74b7f547-1577-4430-806c-c358c8b6bcf5']
    
        let specieId = speciesIds.random() 
        
        retrieveDetails(specieId,'species', (error,result) =>{
            expect(error).toBeUndefined()
            
            expect(result).toBeDefined()
            done()
         
        })
    })

    it('should succed on people url and valid id', (done) =>{

        let peopleIds = ['ba924631-068e-4436-b6de-f3283fa848f0','ebe40383-aad2-4208-90ab-698f00c581ab','34277bec-7401-43fa-a00a-5aee64b45b08','91939012-90b9-46e5-a649-96b898073c82','20e3bd33-b35d-41e6-83a4-57ca7f028d38','8bccdc78-545b-49f4-a4c8-756163a38c91','116bfe1b-3ba8-4fa0-8f72-88537a493cb9','030555b3-4c92-4fce-93fb-e70c3ae3df8b']
    
        let personId = peopleIds.random() 
        
        retrieveDetails(personId,'people', (error,result) =>{
            expect(error).toBeUndefined()
            
            expect(result).toBeDefined()
            done()
         
        })
    })

    
    
    it('should fail on non-string id', () => {

        expect(()=>{
            retrieveDetails( true, 'films', ()=>{})
        }).toThrowError(TypeError, 'true is not a string')

        expect(()=>{
            retrieveDetails( 2, 'films', ()=>{})
        }).toThrowError(TypeError, '2 is not a string')

        expect(()=>{
            retrieveDetails( undefined, 'films', ()=>{})
        }).toThrowError(TypeError, 'undefined is not a string')
    })

    it('should fail on non callback function', ()=>{
        expect(()=>{
            retrieveDetails('id', 'films', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(()=>{
            retrieveDetails('id', 'films', true)
        }).toThrowError(TypeError, 'true is not a function')

        expect(()=>{
            retrieveDetails('id', 'films', 5)
        }).toThrowError(TypeError, '5 is not a function')

        expect(()=>{
            retrieveDetails('id', 'films', 'non-function')
        }).toThrowError(TypeError, 'non-function is not a function')
    })

    it('should fail on non category string', ()=>{
        expect(()=>{
            retrieveDetails('id', undefined, ()=>{})
        }).toThrowError('undefined is not a string')

        expect(()=>{
            retrieveDetails('id', true, ()=>{})
        }).toThrowError('true is not a string')

        expect(()=>{
            retrieveDetails('id', 5, ()=>{})
        }).toThrowError('5 is not a string')
    })
    

    
})