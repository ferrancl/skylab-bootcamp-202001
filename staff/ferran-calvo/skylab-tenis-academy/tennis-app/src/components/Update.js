import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
// import Navbar from './Navbar'
import './Login.sass'
import './Header.sass'
import './Form.sass'
import Feedback from './Feedback'
import {logout} from '../logic'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'

export default withRouter(function ({ onSubmit, onGoToMyBooks, onGoToSearch, history, error, onMount }) {

    const [, setState] = useContext(Context)

    useEffect(() => {
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            email: { value: email },
            oldPassword: {value: oldPassword},
            password: {value: password}
        } } = event

        onSubmit(email, oldPassword, password)
    }

    function handleGoToSearch(event) {
        event.preventDefault()

        onGoToSearch()
    }

    function handleLogout() {
        logout()

        setState({ page: 'login' })

        history.push('/login')
    }


    function handleGoToMyBooks(event) {
        event.preventDefault()

        onGoToMyBooks()
    }


    return <>
        <Header/>
        <button onClick={handleLogout}>Logout</button>
        <form className="form" onSubmit={handleSubmit}>
            <label for="email" className="form_label">NEW EMAIL</label>
            <input type="text" className="form_input" id="email" name="email" placeholder="New email"/>
            <label for="password" className="form_label">CHANGE PASSWORD</label>
            <input type="password" className="form_input" id="oldPassword" name="oldPassword" placeholder="Old Password"/>
            <input type="password" className="form_input" id="password" name="password" placeholder="New Password"/>
            <button type="submit" className="form_button">UPDATE</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
        <a href="" onClick={handleGoToMyBooks} className="login">MY BOOKINGS</a>
        <a href="" onClick={handleGoToSearch} className="login">SEARCH</a>   
    </>
})