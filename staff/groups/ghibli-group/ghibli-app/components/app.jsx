const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, error: undefined, query: '', token: undefined, results: undefined, category: undefined, result: undefined, loggedIn: false, toggleMenu: false, user: undefined, favs: undefined, message: undefined, resultsFilms: undefined, resultsPeople: undefined, resultsLocations: undefined, resultsSpecies: undefined, resultsVehicles: undefined, linkedFilms: undefined, linkedCharacters: undefined, linkedLocations: undefined, linkedSpecies: undefined, linkedVehicles: undefined }

    componentWillMount() {
        
        const { token } = sessionStorage       

        if(address.search.query){
            const {query} = address.search

            if (token && query){
                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            this.__handleError__(error)
                            this.handleLogout()
                        }
    
                        if (user !== undefined) this.setState({ user, loggedIn: true })
                        this.handleResults(query)
                    })
                    
                
                } catch (error) {
                    this.__handleError__(error)
                  
                    sessionStorage.clear()
    
                    this.setState({ view: 'start' })
                }
            }else if(query){
                this.handleResults(query)
            }
            
        
        }else if(address.hash && address.hash.startsWith(`${this.state.category}/`)){
            const [,id] = address.hash.split('/')
            
            this.handleDetail(id, this.state.category)
        }else{
            if (token){
                try {
                    retrieveUser(token, (error, user) => {
                        if (error) {
                            this.__handleError__(error)
                            this.handleLogout()
                        }
    
                        if (user !== undefined) this.setState({ view: 'home', user, loggedIn: true })
                    })
                    
                
                } catch (error) {
                    this.__handleError__(error)
                  
                    sessionStorage.clear()
    
                    this.setState({ view: 'start' })
                }
            }
            else {
                this.setState({view: 'start'})

                setTimeout(() => {
                    this.handleGoToHome()
                }, 1500)
            }
        }  
    }

    __handleError__(error) {
        this.setState({ error: error.message })

        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)
    }

    handleGoToHome = () => {
        this.setState({ view: 'home', toggleMenu: false })
    }

    handleToggleMenu = (toggleMenu) => {
        if (toggleMenu === true) {
            this.setState({ toggleMenu: false })
            toggleMenu = false
        }
        else {
            this.setState({ toggleMenu: true })
            toggleMenu = true
        }
    }

    handleGoToEditProfile = () => {
        this.setState({ view: "editProfile", toggleMenu: false })
    }

    handleLogin = (username, password) => {
        
        this.setState({error: undefined})

        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.__handleError__(error)

                } else {
                    retrieveUser(token, (error, user) => {

                        if (error) {
                            return this.__handleError__(error)    
                        }
                        else {
                            sessionStorage.token = token
                            user.username = user.username.toUpperCase()

                            this.setState({ view: 'home', user: user, loggedIn: true })
                        }
                    })
                }
            })

        } catch (error) {
            this.__handleError__(error)

        }
    }

    handleGoToRegister = () => { this.setState({ view: 'register' }) }

    handleRegister = (name, email, username, password) => {

        this.setState({error: undefined})

        try {
            registerUser(name, email, username, password, error => {
                if (error) {
                    this.__handleError__(error)
                } else {
                    this.setState({ view: 'login' })
                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleGoToLogin = () => { this.setState({ view: 'login', toggleMenu: false }) }

    handleSearchCategories = (category) => {
        try {
            // const { token } = sessionStorage

            //const query = location.queryString
            this.setState({ category, toggleMenu: false })

            searchCategory(category, (error, results) => {
                if (error)
                    return this.setState({ error: error.message })

                //location.queryString = { q: query }

                this.setState({ view: 'category_results', results, category, toggleMenu: false, query: undefined })

                if (!results.length)
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            })
        } catch (error) {
            this.setState({ error: error })
        }
    }

    handleResults = (_query) => {

        this.setState({error: undefined})

        // No sé acerca de este query, se es query o _query
        
        this.setState({query: _query})

        address.search = {_query}

        //searchFilms(_query, undefined, undefined, (error, resultsFilms) => {
            //if(error)
                //this.setState({error: error.message})

        let query = _query.split(' ')

        query = query.map(word => word.charAt(0).toUpperCase() + word.substring(1))
        //const _query = toProperCase(query)
        const results = []

        for (let i = 0; i<query.length; i++) {

            searchFilms(query[i], undefined, undefined, (error, resultsFilms) => {
                if (error)
                    this.__handleError__(error)
    
                if (resultsFilms) results.push(resultsFilms)
    
                this.setState({ view: 'search-results', resultsFilms, toggleMenu: false })
            })
            searchPeople(query[i], (error, resultsPeople) => {
                if (error)
                    this.__handleError__(error)
    
                if (resultsPeople) results.push(resultsPeople)
    
                this.setState({ view: 'search-results', resultsPeople, toggleMenu: false })
            })
            searchLocations(query[i], (error, resultsLocations) => {
                if (error)
                    this.__handleError__(error)
                
                if (resultsLocations) results.push(resultsLocations)
    
                this.setState({ view: 'search-results', resultsLocations, toggleMenu: false })
            })
            searchSpecies(query[i], (error, resultsSpecies) => {
                if (error)
                    this.__handleError__(error)
    
                if(resultsSpecies) results.push(resultsSpecies)
    
                this.setState({ view: 'search-results', resultsSpecies, toggleMenu: false })
            })
            searchVehicles(query[i], (error, resultsVehicles) => {
                if (error)
                    this.__handleError__(error)
                
                if(resultsVehicles) results.push(resultsVehicles)
    
                this.setState({ view: 'search-results', resultsVehicles, toggleMenu: false })
            })
    
        }

        try{
            if(!results.length) throw new ReferenceError ('No results')
        }
        catch(error) {
            this.setState({ view: 'search-results', error: error.message})
        }
    }


    handleGoToUpdate = () => { this.setState({ view: 'update', toggleMenu: false }) }

    handleUpdate = (data) => {

        this.setState({error: undefined})

        const { token } = sessionStorage

        try {
            updateUser(token, data, error => {

                if (error) {
                    this.__handleError__(error)
                } else {
                    this.setState({ message: `Updated ${Object.keys(data)[0]} successfully` })
                  
                    retrieveUser(token , (error, user) =>{
                        if(error){
                            this.setState({error: error.message})
        
                            setTimeout(()=>{
                                this.setState({ error: undefined })
                            },3000)
                        }else{
                            this.setState({user})
                        }
                    })

                }
                
            })

        } catch (error) {
            this.__handleError__(error)

        }

    }

    handleFav = (id, user) => {

        const { token } = sessionStorage

        try {
            createFav(token, id, (userInfo) => {
                //if(error) this.setState({error})
                this.setState({ user: userInfo })
            })

        } catch (error) {

        }
    }

    handleGoToWatchlist = (user) => {

        this.setState({error: undefined})

        const { token } = sessionStorage

        if(user.favs.length !== 0)
            user.favs.map(film =>
                searchFilms(undefined, token, film, (error, films) => {
                    if (error) {
                        this.__handleError__(error)
                    } else {
                        this.setState({ view: 'watchlist', toggleMenu: false, favs: films })
                    }
                })
            )
        else {
            this.setState({ view: 'watchlist', toggleMenu: false, favs: undefined })
        }
    }

    handleDeleteUser = (password) => {

        const { token } = sessionStorage

        try {
            deleteUser(password, token, error => {
                if (error) {
                    this.__handleError__(error)
                } else {
                    this.setState({ view: 'login', toggleMenu: false })
                }
            })

        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleDetail = (id, category) => {

        this.setState({error: undefined})

        try {
            retrieveDetails(id, category, (error, result, linkedFilms, linkedCharacters, linkedLocations, linkedSpecies, linkedVehicles) => {
                if (error) {
                    return this.__handleError__(error)

                } else {
                    this.setState({ view: "details", category, result, linkedFilms, linkedCharacters, linkedLocations, linkedSpecies, linkedVehicles, toggleMenu: false })

                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleLogout = () => {
        sessionStorage.clear()

        this.setState({ view: 'home', user: undefined, toggleMenu: false, loggedIn: false })
    }

    handleLeaveError = () => {
        this.setState({ error: undefined, message: undefined })
    }

    randomImage = ['images/dust.png', 'images/mask.png', 'images/fire.png', 'images/duck.png', 'images/animal.png']

    handleGoBack = (category, query) => {
        if (query === undefined){
            try {
                // const { token } = sessionStorage
                //this.setState({category})

                searchCategory(category, (error, results) => {
                    if (error)
                        return this.setState({error: error.message})

                    //location.queryString = { q: query }

                    this.setState({view: 'category_results', results})

                    if (!results.length)
                        setTimeout(() => {
                            this.setState({ error: undefined })
                        }, 3000)
                })
            } catch (error) {
                this.setState({error: error})
            }
        }else{
            const _query = toProperCase(query)

            this.setState({query})
            searchFilms(_query, undefined, undefined, (error, resultsFilms) => {
                if(error)
                    this.setState({error: error.message})
    
                this.setState({view: 'search-results', resultsFilms})   
            })
            searchPeople(_query, (error, resultsPeople) => {
                if(error)
                    this.setState({error: error.message})
    
                this.setState({view: 'search-results',resultsPeople})   
            })
            searchLocations(_query, (error, resultsLocations) => {
                if(error)
                    this.setState({error: error.message})
    
                this.setState({view: 'search-results', resultsLocations})   
            })
            searchSpecies(_query, (error, resultsSpecies) => {
                if(error)
                    this.setState({error: error.message})
    
                this.setState({resultsSpecies})   
            })
            searchVehicles(_query, (error, resultsVehicles) => {
                if(error)
                    this.setState({error: error.message})
    
                this.setState({view: 'search-results', resultsVehicles})   
            })
        } 
    }
    

    render() {
      
         const { props: { title }, state: { view, error, results, category, query, result,user, resultsFilms, resultsPeople, resultsLocations, resultsSpecies, resultsVehicles, loggedIn, toggleMenu, message, linkedFilms, favs, linkedCharacters, linkedLocations, linkedSpecies, linkedVehicles }, handleGoToHome, handleGoToLogin, handleResults, handleToggleMenu, handleGoToWatchlist, handleGoToEditProfile, handleLogout, handleUpdate, handleDeleteUser, handleLogin, handleRegister, handleGoToRegister, handleSearchFilms, handleSearch, handleSearchCategories, handleFav,handleLeaveError, handleDetail, randomImage, handleGoBack } = this

        return <main className="main">
            {view === "start" && <Init title={title} goToLanding={handleGoToHome} />}

            {view !== "start" && <Header query={query} goToLogin={handleGoToLogin} search={handleResults} goHome={handleGoToHome} showNav={handleToggleMenu} toggleMenu={toggleMenu} loggedIn={loggedIn} 
            //onSubmit={handleSearchFilms} 
            warning={error} goToWatchlist={handleGoToWatchlist} goToEditProfile={handleGoToEditProfile} logout={handleLogout} user={user}/>}

            {view === "home" && <Landing categories={['films', 'people', 'locations', 'species', 'vehicles']} goToResults={handleSearchCategories} error={error} message={message} onClick={handleLeaveError}/>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} errorClick={handleLeaveError} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} errorClick={handleLeaveError} />}

            {view === 'category_results' && category === 'films' && <Films results={results} category={category} onClick={handleDetail} user={user} fav={handleFav} loggedIn={loggedIn} goToLogin={handleGoToLogin} error={error}/>}

            {view === 'category_results' && category === 'people' && <People results={results} category={category} onClick={handleDetail} error={error}/>}

            {view === 'category_results' && category === 'locations' && <Locations results={results} category={category} onClick={handleDetail} error={error}/>}

            {view === 'category_results' && category === 'species' && <Species results={results} category={category} onClick={handleDetail} error={error}/>}

            {view === 'category_results' && category === 'vehicles' && <Vehicles results={results} category={category} onClick={handleDetail} error={error}/>}
        
            {view === 'details' && category === 'films' && <DetailsFilms query={query} category={category} result={result} fav={handleFav} user={user} loggedIn={loggedIn} onClick={handleDetail} linkedCharacters={linkedCharacters} linkedLocations={linkedLocations} linkedSpecies={linkedSpecies} linkedVehicles={linkedVehicles} goToLogin={handleGoToLogin} goBack={handleGoBack} image={randomImage}/>}

            {view === 'details' && category === 'people'  && <DetailsPeople query={query} category={category}result={result} loggedIn={loggedIn} onClick={handleDetail} linkedFilms={linkedFilms} linkedLocations={linkedLocations} linkedSpecies={linkedSpecies} linkedVehicles={linkedVehicles} goToLogin={handleGoToLogin} goBack={handleGoBack} image={randomImage}/>}

            {view === 'details' && category === 'locations'  && <DetailsLocations query={query} category={category} result={result} loggedIn={loggedIn} onClick={handleDetail} linkedFilms={linkedFilms} linkedCharacters={linkedCharacters} linkedSpecies={linkedSpecies} linkedVehicles={linkedVehicles} goToLogin={handleGoToLogin} goBack={handleGoBack} image={randomImage}/>}

            {view === 'details' && category === 'species'  && <DetailsSpecies query={query} category={category} result={result} loggedIn={loggedIn} onClick={handleDetail} linkedFilms={linkedFilms} linkedCharacters={linkedCharacters} linkedLocations={linkedLocations} linkedVehicles={linkedVehicles} goToLogin={handleGoToLogin} goBack={handleGoBack} image={randomImage}/>}

            {view === 'details' && category === 'vehicles'  && <DetailsVehicles query={query} category={category} result={result} loggedIn={loggedIn} onClick={handleDetail} linkedFilms={linkedFilms} linkedCharacters={linkedCharacters}  linkedLocations={linkedLocations} linkedSpecies={linkedSpecies} goToLogin={handleGoToLogin} goBack={handleGoBack} image={randomImage}/>}

            {view === 'search-results'  && resultsFilms && resultsFilms.length>0  && <Films results={resultsFilms} category={'films'} onClick={handleDetail} user={user} fav={handleFav} loggedIn={loggedIn} goToLogin={handleGoToLogin}/>}

            {view === 'search-results' && resultsPeople && resultsPeople.length > 0 && <People results={resultsPeople} category={'people'} onClick={handleDetail} />}

            {view === 'search-results' && resultsLocations && resultsLocations.length > 0 && <Locations results={resultsLocations} category={'locations'} onClick={handleDetail} />}

            {view === 'search-results' && resultsSpecies && resultsSpecies.length > 0 && <Species results={resultsSpecies} category={'species'} onClick={handleDetail} />}

            {view === 'search-results' && resultsVehicles && resultsVehicles.length > 0 && <Vehicles results={resultsVehicles} category={'vehicles'} onClick={handleDetail} />}

            {view === "editProfile" && <EditProfile onSubmit={handleUpdate} onSubmitDelete={handleDeleteUser} handleGoToLogin={handleGoToLogin} error={error} message={message} errorClick={handleLeaveError} />}

            {
            view === 'search-results' && 
            // error &&
            resultsVehicles && resultsVehicles.length === 0 && resultsSpecies && resultsSpecies.length === 0 && resultsSpecies && resultsSpecies.length === 0 && resultsLocations && resultsLocations.length === 0 && resultsPeople && resultsPeople.length === 0 && resultsFilms && resultsFilms.length === 0 && 
            <NoResults/>}
          
            {view === 'watchlist' && <Watchlist user={user} favs={favs} onClick={handleDetail} user={user} loggedIn={loggedIn} fav={handleFav}/>}

            {/* { {view === 'category_results' && results && <Results results={results} category={category}/>} }

            {user && <Fragment><h2>{user.name} <button onClick={handleLogout}>Logout</button></h2></Fragment>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search onSubmit={handleSearchFilms} query={query} warning={error} />}

            {view === 'search' && films && <Results results={films} onItemClick={handleDetail} onItemFavClick={handleFav} />}

            {view === 'search' && film && <Detail film={film}/>} */}

            {view !== "start" && <Footer />}

        </main>
    }
}