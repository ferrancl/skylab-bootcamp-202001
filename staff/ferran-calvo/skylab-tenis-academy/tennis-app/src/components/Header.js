import logo from './logo.png'
import React, { useState, useEffect, useContext } from 'react'
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
        <header className="header">
            <nav className="header_nav">
                <a href=""><img src={logo} className="header_icon" alt=""/></a>
                <span className="header_name">Hello, {name}!</span>
                <a href="" className="header_options" onClick={handleGoToSearch}>Search Bookings</a>
                <a href="" className="header_options" onClick={handleGoToMyBooks}>My Bookings</a>
                <a href="" className="header_options" onClick={handleGoToUpdate}>Edit Profile</a>
                <a href="" className="header_options" onClick={handleLogout}>Logout</a>
            </nav>
        </header>
        </>
})