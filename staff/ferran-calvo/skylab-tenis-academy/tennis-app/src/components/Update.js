import React, { useEffect, useContext } from 'react'
import './Form.sass'
import Feedback from './Feedback'
import { withRouter } from 'react-router-dom'

export default withRouter(function ({ onSubmit, error, onMount }) {

    useEffect(() => {
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            email: { value: email },
            oldPassword: { value: oldPassword },
            password: { value: password },
            confirmPassword: { value: confirmPassword }
        } } = event

        onSubmit(email, oldPassword, password, confirmPassword)
    }

    return <>
        <form className="form_register" onSubmit={handleSubmit}>
            <h3 className="form_titleR">EDIT PROFILE</h3>
            <label className="label">Change Email</label>
            <input type="text" className="form_input" id="email" name="email" placeholder="New email" />
            <label className="label">Change Password</label>
            <input type="password" className="form_input" id="oldPassword" name="oldPassword" placeholder="Old Password"/>
            <input type="password" className="form_input" id="password" name="password" placeholder="New Password" />
            <input type="password" className="form_input" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password" />
            <button type="submit" className="form_button">UPDATE</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
    </>
})