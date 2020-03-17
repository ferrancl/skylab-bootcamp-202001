import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
// import Navbar from './Navbar'
import './Login.sass'
import './Header.sass'
import './Form.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, onGoToLogin, error, onMount }) {
    useEffect(() => {
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            email: { value: email },
        } } = event

        onSubmit(email)
    }

    function handleGoToLogin(event) {
        event.preventDefault()

        onGoToLogin()
    }


    return <>
        {/* <Navbar/> */}
        <Header/>
        <form className="form" onSubmit={handleSubmit}>
            <label for="email" className="form_label">EMAIL ADDRESS</label>
            <input type="text" className="form_input" id="email" name="email" placeholder="Email"/>
            <button type="submit" className="form_button" onSubmit={handleSubmit}>SEND</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
        <a href="" onClick={handleGoToLogin} className="remember_a">LOGIN</a>
    </>
}