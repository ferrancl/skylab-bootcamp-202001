const {Component, Fragment} = React

class App extends Component {
  
    state= {view: 'start', error: undefined, token: undefined, results: undefined, category: undefined, result: undefined, loggedIn: false, toggleMenu: false, user: undefined, message: undefined}


    // componentWillMount() {
    //     const {token} = sessionStorage

    //     if(token) {
    //         try{

    //         }
    //     }
    // }

    __handleError__(error) {
        this.setState({ error: error.message + ' ' })

        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)
    }

    handleGoToHome = () => {
        this.setState({view: 'home', toggleMenu: false})
    }

    handleToggleMenu = (toggleMenu) => {
        if (toggleMenu === true){
            this.setState({toggleMenu: false})
            toggleMenu = false
        }
        else {
            this.setState({toggleMenu: true})
            toggleMenu = true
        }
    }

    handleGoToEditProfile = () => {
        this.setState({view: "editProfile", toggleMenu: false})
    }

    handleLogin = (username, password) => {
        try{
            authenticateUser(username, password, (error, token)=>{
                if(error){
                    this.setState({error: error.message})
                } else {
                    retrieveUser(token, (error, user) => {
                        if(error){

                            return this.setState({error: error.message})
    
                        }else{

                            sessionStorage.token = token 
                            user.username = user.username.toUpperCase()
                            this.setState({ view: 'home', user: user.username, loggedIn: true })

                        }
                    })
                }
            })
    
        }catch(error){
            this.setState({error: error})
        }
    }
    
    handleGoToRegister = () => {this.setState({ view: 'register' })}
    
    handleRegister = (name, email, username, password) => {
        try{
            registerUser(name, email, username, password, error => {
                if(error){
                    this.setState({error: error.message})
                }else{
                    this.setState({view: 'login'})
                }
            })
        }catch(error){
            this.setState(error)
        }
    }
    
    handleGoToLogin = () => {this.setState({ view: 'login' })}

    handleSearchCategories = (category) => {
        try {
            // const { token } = sessionStorage

            //const query = location.queryString
            this.setState({category})

            searchCategory(category, (error, results) => {
                if (error)
                    return this.setState({error: error.message})

                //location.queryString = { q: query }

                this.setState({view: 'category_results', results, category})

                if (!results.length)
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            })
        } catch (error) {
            this.setState({error: error})
        }
    }

    handleResults = (query) => {

        const _query = toProperCase(query)

        searchAll(_query, (error, results) => {

            if(error)
                this.setState({error: error.message})

            console.log(results)
            console.log(error)
            this.setState({results})
        })
    }


    handleGoToUpdate = () => {this.setState({ view: 'update' })}

    handleUpdate = (data) => {

        const { token } = sessionStorage

        try{
            updateUser(token, data, error => {
                if(error){
                    this.setState({error: error.message})

                    setTimeout(()=>{
                        this.setState({ error: undefined })
                    },3000)
                }else{
                    this.setState({message: `Updated ${Object.keys(data)[0]} successfully`})
                }
            })
        
        }catch(error){
            this.setState(error)
        }

    }

    handleDeleteUser = (password) => {

        const { token } = sessionStorage

        try{
            deleteUser(password, token, error => {
                if(error){
                    this.setState({error: error.message})

                    setTimeout(()=>{
                        this.setState({ error: undefined })
                    },3000)
                }else{
                    this.setState({view: 'login'})
                }
            })
        
        }catch(error){
            this.setState(error)
        }
    }

    handleDetail = (id, category) => {
        try {
            retrieveDetails(id, category, (error, result) => {
                if (error){
                    return this.__handleError__(error)
                }else{
                    console.log(result)
                    this.setState({view: "details", result})
                }
            })    
        } catch(error) {
            this.__handleError__(error)
        }
    }

    handleLogout = () => {
        sessionStorage.clear()

        this.setState({ view: 'home', user: undefined, toggleMenu: false, loggedIn: false })
    }

    render() {


        const {props: {title, query}, state: {view, error, results, category, result, user, loggedIn, toggleMenu, message}, handleGoToHome, handleGoToLogin, 
        handleResults, handleToggleMenu, handleGoToWatchlist, handleGoToEditProfile, handleLogout, handleUpdate, handleDeleteUser,
        handleLogin, handleRegister, handleGoToRegister, handleSearchFilms, handleSearch, handleSearchCategories, 
        handleDetail} = this

        return <main className="main">
            {view === "start" && <Init title={title} goToLanding={handleGoToHome}/>}

            {view !== "start" && <Header goToLogin={handleGoToLogin} search={handleResults} goHome={handleGoToHome} showNav={handleToggleMenu} toggleMenu={toggleMenu} loggedIn={loggedIn} 
            //onSubmit={handleSearchFilms} 
            warning={error} goToWatchList={handleGoToWatchlist} goToEditProfile={handleGoToEditProfile} logout={handleLogout} user={user}/>}
            
            {view === "home" && <Landing categories={['films', 'people', 'locations', 'species', 'vehicles']} goToResults={handleSearchCategories}/>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {/* {view === 'search' && <Search onSubmit={handleSearchFilms}  warning={error} />} */}

            {view === 'category_results' && category === 'films' && <Films results={results} category={category} onClick={handleDetail}/>}

            {view === 'category_results' && category==='people' && <People results={results} category={category} onClick={handleDetail}/>}

            {view === 'category_results' && category==='locations' && <Locations results={results} category={category} onClick={handleDetail}/>}

            {view === 'category_results' && category==='species' && <Species results={results} category={category} onClick={handleDetail}/>}

            {view === 'category_results' && category==='vehicles' && <Vehicles results={results} category={category} onClick={handleDetail}/>}

            {view === 'details' && category === 'films' && <DetailsFilms result={result} loggedIn={loggedIn} category={category}/>}

            {view === 'details' && category === 'people' && <DetailsPeople result={result} loggedIn={loggedIn} category={category}/>}

            {view === 'details' && category === 'locations' && <DetailsLocations result={result} loggedIn={loggedIn} category={category}/>}

            {view === 'details' && category === 'species' && <DetailsSpecies result={result} loggedIn={loggedIn} category={category}/>}

            {view === 'details' && category === 'vehicles' && <DetailsVehicles result={result} loggedIn={loggedIn} category={category}/>}

            {/* {view === 'category_results' && results && <Results results={results} category={category}/>} */}

            {view === "editProfile" && <EditProfile onSubmit={handleUpdate} onSubmitDelete={handleDeleteUser} handleGoToLogin={handleGoToLogin} error={error} message={message}/>

            /* {user && <Fragment><h2>{user.name} <button onClick={handleLogout}>Logout</button></h2></Fragment>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search onSubmit={handleSearchFilms} query={query} warning={error} />}

            {view === 'search' && films && <Results results={films} onItemClick={handleDetail} onItemFavClick={handleFav} />}

            {view === 'search' && film && <Detail film={film}/>} */}

            {view !== "start" && <Footer/>}

        </main>
    }
}