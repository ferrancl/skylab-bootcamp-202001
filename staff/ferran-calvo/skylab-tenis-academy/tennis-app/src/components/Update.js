import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
// import Navbar from './Navbar'
import './Login.sass'
import './Header.sass'
import './Form.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, onGoToMyBookings, onGoToSearch, error, onMount }) {
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


    function handleGoToMyBookings(event) {
        event.preventDefault()

        onGoToMyBookings()
    }


    return <>
        <Header/>
        <form className="form" onSubmit={handleSubmit}>
            <label for="email" className="form_label">NEW EMAIL</label>
            <input type="text" className="form_input" id="email" name="email" placeholder="New email"/>
            <label for="password" className="form_label">CHANGE PASSWORD</label>
            <input type="password" className="form_input" id="oldPassword" name="oldPassword" placeholder="Old Password"/>
            <input type="password" className="form_input" id="password" name="password" placeholder="New Password"/>
            <button type="submit" className="form_button">UPDATE</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
        <a href="" onClick={handleGoToMyBookings} className="login">MY BOOKINGS</a>
        <a href="" onClick={handleGoToSearch} className="login">SEARCH</a>   
    </>
}