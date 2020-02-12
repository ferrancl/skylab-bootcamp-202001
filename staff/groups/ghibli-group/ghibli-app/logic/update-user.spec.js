describe('update user', ()=> {
    let name, email, username, password, oldPassword

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'email-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
        oldPassword = 'oldPassword-' + Math.random()
    })

    describe('when user already exist', () => {

        beforeEach(done=>{
            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, emaik, username, password, oldPassword })
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

                    const { error: _error, token: _token } = JSON.parse(response.content)

                    if (_error) return done(new Error(_error))

                    token = _token

                    done()
                })

            })
        })
        it('should succeed on correct token', (done)=>{
            name += '-update'
            email += '-update'
            username += '-update'
            oldPassword = password
            password += '-update'


            updateUser(token, {name,email,username,oldPassword,password},(error, response)=>{
                expect(error).toBeUndefined()
                expect(response).toBeUndefined()

                call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                },(error, response) =>{
                    if (error) return callback(error)

                    // retrieve user to check public info has actually been updated

                    const user = JSON.parse(response.content), { error: _error } = user

                    if (_error) return callback(new Error(_error))

                    expect(user.name).toBe(name)
                    expect(user.email).toBe(email)
                    expect(user.username).toBe(username)
                    expect(user.password).toBeUndefined()

                    call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    }, (error, response) => {
                        if (error) return callback(error)

                        const { error: _error, token } = JSON.parse(response.content)

                        if (_error) return done(new Error(_error))

                        expect(token).toBeA('string')

                        done()
                    })

                }) 
            })
            
        })
        it()
    })

})