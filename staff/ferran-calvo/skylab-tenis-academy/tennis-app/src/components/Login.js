import React, { useEffect } from 'react'
import './Login.sass'
import './Header.sass'
import './Form.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, onGoToRegister, onGoToRememberPassword, error, onMount }) {
    useEffect(() => {
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            userMember: { value: userMember },
            password: { value: password }
        } } = event

        onSubmit(userMember, password)
    }

    function handleGoToRegister(event) {
        event.preventDefault()

        onGoToRegister()
    }

    function handleGoToRememberPassword(event) {
        event.preventDefault()

        onGoToRememberPassword()
    }

    return <>
        <form className="form loginG" onSubmit={handleSubmit}>
            <label for="userMember" className="form_label">MEMBER NUMBER OR EMAIL</label>
            <input type="text" className="form_input" id="userMember" name="userMember" placeholder="Member Number/Email"/>
            <label for="password" className="form_label">PASSWORD</label>
            <input type="password" className="form_input" id="password" name="password" placeholder="Password"/>
            <button type="submit" className="form_button">SIGN IN</button>
            {error && <Feedback message={error} level="warn" />}
            <a href="" onClick={handleGoToRegister} className="login">NOT A MEMBER?</a>
            <a href="" onClick={handleGoToRememberPassword} className="login">FORGOT YOUR PASSWORD?</a>
        </form>
    </>
}