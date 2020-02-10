const {Component, Fragment} = React

class App extends Component {
    state= {view: 'start', error: undefined, token: undefined, results: undefined, film: undefined, loggedIn: false, toggleMenu: false}

    // componentWillMount() {
    //     const {token} = sessionStorage

    //     if(token) {
    //         try{

    //         }
    //     }
    // }


    handleGoToHome = () => {
        this.setState({view: 'home'})
    }

    handleToggleMenu = () => {
        this.setState({toggleMenu: true ? false : true})
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
    
                            this.setState({ view: 'home', user })
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
            
            const { token } = sessionStorage

            //const query = location.queryString

            searchCategory(category,token, (error, results) => {
                if (error)
                    return this.setState({error: error.message})

                //location.queryString = { q: query }
            
                console.log(results)

                this.setState({view: 'category_results', results})

                if (!results.length)
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            })
        } catch (error) {
            this.setState({error: error})
        }
    }

    // handleDetail = id => {
    //     try {
    //         retrieveFilms(id, (error, films) => {
    //             if (error)
    //                 return this.__handleError__(error)
    //             })
    //     } catch (error) {
    //         this.__handleError__(error)
    //     }
    // }

    // handleLogout = () => {
    //     sessionStorage.clear()

    //     // TODO clear querystring in url

    //     this.setState({ view: 'login', user: undefined })
    // }





    render() {

        const {props: {title, query}, state: {view, error, results, loggedIn, toggleMenu}, handleGoToHome, handleGoToLogin, 
        handleResults, handleToggleMenu, 
        handleLogin, handleRegister, handleGoToRegister, handleSearchCategories, 
        handleDetail} = this

        return <main className="main">
            {view === "start" && <Init title={title} goToLanding={handleGoToHome}/>}

            {view !== "start" && <Header goToLogin={handleGoToLogin} goToSearch={handleResults} goHome={handleGoToHome} showNav={handleToggleMenu} toggleMenu={toggleMenu} loggedIn={loggedIn} onSubmit={handleSearchCategories} warning={error} />}
            
            {view === "home" && <Landing goToResults={handleSearchCategories}/>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {/* {view === 'search' && <Search onSubmit={handleSearchFilms}  warning={error} />} */}

            {view === 'category_results' && results && <Results results={results} />}

            {/* {user && <Fragment><h2>{user.name} <button onClick={handleLogout}>Logout</button></h2></Fragment>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search onSubmit={handleSearchFilms} query={query} warning={error} />}

            {view === 'search' && films && <Results results={films} onItemClick={handleDetail} onItemFavClick={handleFav} />}

            {view === 'search' && film && <Detail film={film}/>} */}

            {view !== "start" && <Footer/>}

        </main>
    }
}