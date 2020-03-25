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
            password: { value: password }
        } } = event

        onSubmit(email, oldPassword, password)
    }


    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form_register">
                <input type="text" className="form_input" id="email" name="email" placeholder="New email" />

                <input type="password" className="form_input" id="oldPassword" name="oldPassword" placeholder="Old Password" />
                <input type="password" className="form_input" id="password" name="password" placeholder="New Password" />
            </div>
            <button type="submit" className="form_button">UPDATE</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
    </>
})