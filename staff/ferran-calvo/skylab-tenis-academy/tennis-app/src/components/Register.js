import React, { useEffect } from 'react'
import './Form.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, error, onMount }) {
    useEffect(() => {
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            password: { value: password }
        } } = event

        onSubmit(name, surname, email, password)
    }

    return <>
            <form className="form_register" onSubmit={handleSubmit}>
                <h3 className="form_titleR">REGISTER</h3>
                <input type="text" className="form_input" id="name" name="name" placeholder="Name" />
                <input type="text" className="form_input" id="surname" name="surname" placeholder="Surname" />
                <input type="text" className="form_input" id="email" name="email" placeholder="Email" />
                <input type="password" className="form_input" id="confirm-password" name="password" placeholder="Password" />
                <button type="submit" className="form_button">SIGN UP</button>
                {error && <Feedback message={error} level="warn" />}
            </form>
    </>
}