import logo from './logo.png'
import React, { useState, useEffect, useContext } from 'react'
import './Header.sass'

export default function ({ onGoToLogin, onGoToRegister, onGoToRememberPassword }) {

    function handleGoToRegister(event) {
        event.preventDefault()

        onGoToRegister()
    }

    function handleGoToRememberPassword(event) {
        event.preventDefault()

        onGoToRememberPassword()
    }

    function handleGoToLogin(event) {
        event.preventDefault()

        onGoToLogin()
    }



    return <>
        <header className="header">
            <nav className="header_nav">
                <li><a href=""><img src={logo} className="header_icon" alt=""/></a></li>
                <li><a href=""><img src={logo} className="header_icon" alt=""/></a></li>
                
                {/* <a href="" className="header_options" onClick={handleGoToLogin}>Sign In</a>
                <a href="" className="header_options" onClick={handleGoToRegister}>Sign Up</a>
                <a href="" className="header_options" onClick={handleGoToRememberPassword}>Remember Password</a> */}
            </nav>
        </header>
        </>
}