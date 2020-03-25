import React, { useEffect } from 'react'
import './Register.sass'
import './Header.sass'
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
        <section className="register">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_register">

                    <input type="text" className="form_input" id="name" name="name" placeholder="Name" />

                    <input type="text" className="form_input" id="surname" name="surname" placeholder="Surname" />

                    <input type="text" className="form_input" id="email" name="email" placeholder="Email" />

                    <input type="password" className="form_input" id="confirm-password" name="password" placeholder="Password" />
                </div>
                <button type="submit" className="form_button">REGISTER</button>
                {error && <Feedback message={error} level="warn" />}
            </form>
        </section>
    </>
}