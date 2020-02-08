const {Component, Fragment} = React

class App extends Component {
    state= {view: 'login', error: undefined, token: undefined, films: undefined, film: undefined}

    handleLogin = (username, password) => {
        try{

            authenticateUser(username, password, (error, token)=>{
                if(error){
                    this.setState({error: error.message})

                    setTimeout(()=>{
                        this.setState({error: undefined})
                    },3000)
                }else{
                    retrieveUser(token, (error, user) => {
                        if(error){
                            
                            return this.setState({error: error.message})

                        }else{
                            
                            sessionStorage.token = token

                            this.setState({ view: 'search', user })
                        }
                    })
                }
            })

        }catch(error){
            this.setState({error: error})
        }
    }

    handleGoToRegister = () => {this.setState({ view: 'register' })}

    handleRegister = (name, surname, username, password) => {

        try{
            registerUser(name, surname, username, password, error => {
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

    handleGoToLogin = () => {this.setState({ view: 'login' })}


    handleSearchFilms = () => {
        try {
            debugger
            const { token } = sessionStorage

            searchFilms(token, query, (error, results) => {
                if (error)
                    return this.setState({error: error.message})

                location.queryString = { q: query }

                this.setState({films})

                if (!results.length)
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            })
        } catch (error) {
            this.setState({error: error})
        }
    }

    handleDetail = id => {
        try {
            retrieveFilms(id, (error, films) => {
                if (error)
                    return this.__handleError__(error)
                })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleLogout = () => {
        sessionStorage.clear()

        // TODO clear querystring in url

        this.setState({ view: 'login', user: undefined })
    }





    render() {

        const {props: {title, query}, state: {view,error}, handleGoToLogin, handleLogin, handleRegister, handleGoToRegister, handleSearchFilms, handleDetail} = this

        return <main>

            <h1>{title}</h1>

            {user && <Fragment><h2>{user.name} <button onClick={handleLogout}>Logout</button></h2></Fragment>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search onSubmit={handleSearchFilms} query={query} warning={error} />}

            {view === 'search' && films && <Results results={films} onItemClick={handleDetail} onItemFavClick={handleFav} />}

            {view === 'search' && film && <Detail film={film}/>}

        </main>
    }
}