import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import './Header.sass'
import './Login.sass'
import './Form.sass'
import { retrieveUser, isLoggedIn, logout} from '../logic'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'

export default withRouter(function ({ history, onGoToUpdate, onGoToMyBooks, onGoToSearch }) {
    const [, setState] = useContext(Context)
    const [name, setName] = useState()

    useEffect(() => {
        if (isLoggedIn())
            (async () => {
                try {
                    const { name } = await retrieveUser()

                    setName(name)
                    
                    setState({ page: 'home' })
                } catch ({ message }) {
                    setState({ error: message, page: 'login' })
                }
            })()
        else setState({ page: 'login' })
    }, [])

    function handleLogout() {
        logout()

        setState({ page: 'login' })

        history.push('/login')
    }

    function handleGoToUpdate(event) {
        event.preventDefault()

        onGoToUpdate()
    }

    function handleGoToMyBooks(event) {
        event.preventDefault()

        onGoToMyBooks()
    }

    function handleGoToSearch(event) {
        event.preventDefault()

        onGoToSearch()
    }



    return <>
        <h1>Hello, {name}!</h1>
        <button onClick={handleLogout}>Logout</button>
        <a href="" onClick={handleGoToUpdate} className="login">UPDATE USER</a>
        <a href="" onClick={handleGoToMyBooks} className="login">MY BOOKINGS</a>
        <a href="" onClick={handleGoToSearch} className="login">SEARCH</a>   
    </>
})