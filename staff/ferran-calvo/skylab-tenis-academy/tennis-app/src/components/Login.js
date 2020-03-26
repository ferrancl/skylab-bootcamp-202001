import React, { useEffect } from 'react'
import './Form.sass'
import './Login.sass'
import Feedback from './Feedback'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function ({ onSubmit, onGoToRememberPassword, error, onMount }) {
    useEffect(() => {
        onMount()
    }, [])

    function handleGoToRememberPassword(event) {
        event.preventDefault()
        onGoToRememberPassword()
    }

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            userMember: { value: userMember },
            password: { value: password }
        } } = event

        onSubmit(userMember, password)
    }

    return <>
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form_title">LOGIN</h3>
            <FontAwesomeIcon className="login_icon" icon={faUser} size="5x"  color="rgba(105, 105, 105, 0.99)"/>
            <input type="text" className="form_input" id="userMember" name="userMember" placeholder="Member Number/Email" />
            <input type="password" className="form_input" id="password" name="password" placeholder="Password" />
            <button type="submit" className="form_button">SIGN IN</button>
            <a href="" className="form_anchor" onClick={handleGoToRememberPassword}>FORGOT YOUR PASSWORD?</a>
            {error && <Feedback message={error} level="warn" />}
        </form>
    </>
}
