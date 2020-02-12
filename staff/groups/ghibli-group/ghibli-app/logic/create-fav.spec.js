describe ('createFav', ()  => {

    let name, email, username, password, favs, token, id

    const ids = ['2baf70d1-42bb-4437-b551-e5fed5a87abe', '12cfb892-aac0-4c5b-94af-521852e46d6a', '58611129-2dbc-4a81-a72f-77ddfc1b1b49', '5fdfb320-2a02-49a7-94ff-5ca418cae602', '578ae244-7750-4d9f-867b-f3cd3d6fecf4', '67405111-37a5-438f-81cc-4666af60c800', '45db04e4-304a-4933-9823-33f389e8d74d', '2de9426b-914a-4a06-a3a0-5e6d9d3886f6', '758bf02e-3122-46e0-884e-67cf83df1786', '112c1e67-726f-40b1-ac17-6974127bb9b9', 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa', '90b72513-afd4-4570-84de-a56c312fdf81', 'dc2e6bd1-8156-4886-adff-b39e6043af0c', '45204234-adfd-45cb-a505-a8e7a676b114']

    beforeEach(() => {

        name = `name-${Math.floor(Math.random() * 999999999)} `
        email = `email-${Math.floor(Math.random() * 999999999)} `
        username = `username-${Math.floor(Math.random() * 999999999)} `
        password = `password-${Math.floor(Math.random() * 999999999)} `
        datapp =  "datapp-ghibli"
        favs = []

        favs.push(ids[Math.floor(Math.random()) * 13]) * Math.floor(Math.random()) * 13

        id = Math.floor(Math.random() * 13).toString()

    })

    beforeEach(done => 

        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, username, password, favs })
        }, (error, response) => {
            if (error) return done(error)
    
            if (response.content) {
                const { error } = JSON.parse(response.content)
    
                if (error) return done(new Error(error))
            }
    
            call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            }, (error, response) => {
                if (error) return done(error)

                token = JSON.parse(response.content).token

                done()
            })
        })
    )

    fit('should add the id of the item to user favs on click', done => {
            createFav(token, id, (response) => {})
        }).toBeDefined()

        expect(() => {
            createFav(token, id, (response) => {})
        }).toBeInstanceOf()
    })

    it('should remove the id of the item on click if the item is already on favs list', () => {

    })

    afterEach(done => {
        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ password })
        }, (error, response) => {
            if (error) return done(error)

            if (response.content) {
                const { error } = JSON.parse(response.content)

                if (error) return done(new Error(error))
            }

            done()
        })
    })

    it('should not work on ')

})







// describe('toggleFavVehicle', () => {
//     let name, surname, username, password, token, id
//     const ids = ['FYG51', 'FYD40', 'FYF88', 'FYB45', 'FYD88', 'FYG08', 'FYF37', 'FYD95', 'FYC23', 'FYC48', 'FYC56', 'FYF11', 'FYD81', 'FYD93', 'FYF64', 'FYC08', 'FYD86', 'FYB52', 'FYF24', 'FKB94', 'FYF53', 'FYD84', 'FYB51', 'FYD46', 'GBT50', 'GBT83', 'GBT35', 'FYF55', 'GBT39', 'GBT40', 'GBT42', 'GBT45', 'GBT47', 'FYD82', 'FYG19', 'FYB50', 'FYF06', 'FYD59', 'FYC37', 'FYC83', 'FYD98', 'FYF42', 'FYC91', 'FYB76', 'FYD15', 'FYC07', 'FYG77', 'FJX08', 'FYB60', 'FYD24', 'FYB77', 'FYB64', 'FJY98', 'FYB95', 'FYC59', 'FYC52', 'FYD66', 'FYC40', 'FYG00', 'FYD28', 'FJY63', 'FKB51', 'FJY08', 'FKB18', 'FJW70', 'FJY50', 'FJY85', 'FJY01', 'FYJ52', 'FKB34', 'FRR82', 'FKB52', 'FJY25', 'FJV73', 'FJX14', 'FKC09', 'FRR87', 'FJW23', 'FJY56', 'FJX73', 'FJY46', 'FJY55', 'FTX88', 'FKC01', 'FJY97', 'FJW93', 'FRR92', 'FJW68', 'FJX41', 'FJW20', 'FJW24', 'FJX78', 'FJW16', 'FJX80', 'FJX20', 'FKB40', 'FJW47', 'FKC00', 'FKB26', 'FJX53', 'FJX84', 'FJW57', 'FJW05', 'DTY34', 'DVB64', 'DVC40', 'DVC28', 'DTY60', 'DTY95', 'DTY10', 'DVC34', 'DTY74', 'DTX24', 'DTY41', 'DTY38', 'DVB67', 'DVB40', 'DTY07', 'DTX40', 'DVB89', 'DVC23', 'DVB09', 'DVB80', 'DVB66', 'DVB14', 'DVB16', 'DTX13', 'DTY80', 'DTY48', 'DTY70', 'DTY27', 'DTX29', 'DTX50', 'DTX82', 'DTY25', 'DTY01', 'DTY39', 'DTX34', 'DTX36', 'DTW95', 'DJM21', 'BDM54', 'DJJ50', 'DHT35', 'DHR85', 'DHR93', 'DHR67', 'DHP94', 'DHX49', 'DHY12', 'DHP21', 'DHP55', 'DHP58', 'DHW55', 'DHR09', 'DHX29', 'DHT27', 'DHW65', 'DHP74', 'DHW71', 'DHT90', 'DHT28', 'DHT29', 'DHX79', 'DHX97', 'DHX46', 'DHT30', 'DHT31', 'DHP36', 'DHX11', 'DHR52', 'DHW89', 'DHP82', 'DHP87', 'DHP88', 'DHX84', 'DHX54', 'DHT06', 'DHX10', 'DHW95', 'DHR73', 'DHT20', 'DHX98', 'DHR35', 'DHT83', 'DHW54', 'DHX23', 'DHW84', 'DHR96', 'DHR98', 'DHY06', 'DHR20', 'DHY10', 'DHR25', 'DHP44', 'DHT95']

//     beforeEach(() => {
//         name = 'name-' + Math.random()
//         surname = 'surname-' + Math.random()
//         username = 'username-' + Math.random()
//         password = 'password-' + Math.random()

//         id = ids.random()
//     })

//     describe('when user already exists', () => {
//         beforeEach(done =>
//             call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, surname, username, password })
//             }, (error, response) => {
//                 if (error) return done(error)

//                 if (response.content) {
//                     const { error } = JSON.parse(response.content)

//                     if (error) return done(new Error(error))
//                 }

//                 call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ username, password })
//                 }, (error, response) => {
//                     if (error) return done(error)

//                     const { error: _error, token: _token } = JSON.parse(response.content)

//                     if (_error) return done(new Error(_error))

//                     token = _token

//                     done()
//                 })
//             })
//         )

//         it('should add a vehicle id when it was not previously there', done =>
//             toggleFavVehicle(token, id, error => {
//                 expect(error).toBeUndefined()

//                 call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 }, (error, response) => {
//                     if (error) return done(error)

//                     // retrieve user to check fav has been added

//                     const user = JSON.parse(response.content), { error: _error } = user

//                     if (_error) return done(new Error(_error))

//                     const { favs } = user

//                     expect(favs).toContain(id)

//                     done()
//                 })
//             })
//         )

//         describe('when fav vehicle already exists', () => {
//             beforeEach(done => {
//                 const favs = [id]

//                 call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`
//                     },
//                     body: JSON.stringify({ favs })
//                 }, (error, response) => {
//                     if (error) return done(error)

//                     if (response.content) {
//                         const { error } = JSON.parse(response.content)

//                         if (error) return done(new Error(error))
//                     }

//                     done()
//                 })
//             })

//             it('should succeed removing a vehicle id when previously added', done => {
//                 toggleFavVehicle(token, id, error => {
//                     expect(error).toBeUndefined()

//                     call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
//                         method: 'GET',
//                         headers: {
//                             'Authorization': `Bearer ${token}`
//                         }
//                     }, (error, response) => {
//                         if (error) return done(error)

//                         // retrieve user to check fav has been removed

//                         const user = JSON.parse(response.content), { error: _error } = user

//                         if (_error) return done(new Error(_error))

//                         const { favs } = user

//                         expect(favs).not.toContain(id)

//                         done()
//                     })
//                 })
//             })
//         })

//         it('should fail on invalid token', done => {
//             toggleFavVehicle(`${token}-wrong`, id, error => {
//                 expect(error).toBeInstanceOf(Error)
//                 expect(error.message).toBe('invalid token')

//                 done()
//             })
//         })

//         afterEach(done => {
//             call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify({ password })
//             }, (error, response) => {
//                 if (error) return done(error)

//                 if (response.content) {
//                     const { error } = JSON.parse(response.content)

//                     if (error) return done(new Error(error))
//                 }

//                 done()
//             })
//         })
//     })

//     it('should fail on non-string token', () => {
//         token = 1
//         expect(() =>
//             toggleFavVehicle(token, id, () => { })
//         ).toThrowError(TypeError, `token ${token} is not a string`)

//         token = true
//         expect(() =>
//             toggleFavVehicle(token, id, () => { })
//         ).toThrowError(TypeError, `token ${token} is not a string`)

//         token = undefined
//         expect(() =>
//             toggleFavVehicle(token, id, () => { })
//         ).toThrowError(TypeError, `token ${token} is not a string`)
//     })

//     it('should fail on invalid token format', () => {
//         token = 'abc'

//         expect(() =>
//             toggleFavVehicle(token, id, () => { })
//         ).toThrowError(Error, 'invalid token')
//     })

//     it('should fail on non-function callback', () => {
//         token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNiZDhmZDE3YjgwOTFiYWFjMTIxMzgiLCJpYXQiOjE1ODA5ODA3NjEsImV4cCI6MTU4MDk4NDM2MX0.t8g49qXznSCYiK040NvOWHPXWqnj9riJ_6MD2vwIv3M'

//         callback = 1
//         expect(() =>
//             toggleFavVehicle(token, id, callback)
//         ).toThrowError(TypeError, `callback ${callback} is not a function`)

//         callback = true
//         expect(() =>
//             toggleFavVehicle(token, id, callback)
//         ).toThrowError(TypeError, `callback ${callback} is not a function`)

//         callback = undefined
//         expect(() =>
//             toggleFavVehicle(token, id, callback)
//         ).toThrowError(TypeError, `callback ${callback} is not a function`)
//     })
// })