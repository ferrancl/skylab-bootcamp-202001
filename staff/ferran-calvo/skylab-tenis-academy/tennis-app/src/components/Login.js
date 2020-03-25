import React, { useEffect } from 'react'
import './Login.sass'
import './Form.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, error, onMount }) {
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

    return <>
        <form className="form loginG" onSubmit={handleSubmit}>
            <div className="form_login">
                <input type="text" className="form_input" id="userMember" name="userMember" placeholder="Member Number/Email" />
                <input type="password" className="form_input" id="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="form_button">SIGN IN</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
    </>
}