import React, { useEffect } from 'react'
import './Register.sass'
import './Header.sass'
import './Form.sass'
import Header from './Header'
import Feedback from './Feedback'

export default function ({ onSubmit, onGoToLogin, error, onMount }) {
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

    function handleGoToLogin(event) {
        event.preventDefault()

        onGoToLogin()
    }

    return <>
        <Header/>
        <section className="register">
            <form className="form" onSubmit={handleSubmit}>
                <label for="userdata" className="form_label">NAME</label>
                <input type="text" className="form_input" id="name" name="name" placeholder="Name"/>
                <label for="userdata" className="form_label">SURNAME</label>
                <input type="text" className="form_input" id="surname" name="surname" placeholder="Surname"/>
                <label for="userdata" className="form_label">EMAIL</label>
                <input type="text" className="form_input" id="email" name="email" placeholder="Email"/>
                <label for="userdata" className="form_label">PASSWORD</label>
                {/* <input type="text" className="form_input" id="password" name="password" placeholder="Password"/>
                <label for="password" className="form_label">CONFIRM  PASSWORD</label> */}
                <input type="password" className="form_input" id="confirm-password" name="password" placeholder="Password"/>
                <button type="submit" className="form_button">REGISTER</button>
                {error && <Feedback message={error} level="warn" />}
                <a href="" onClick={handleGoToLogin} className="register_a">LOGIN</a>
            </form>
        </section>
        </>
    
    
    {/* // <div className="register">
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" name="name" placeholder="name" />
    //         <input type="text" name="surname" placeholder="surname" />
    //         <input type="email" name="email" placeholder="email" />
    //         <input type="password" name="password" placeholder="password" />
    //         <button>Register</button>
    //     </form>
    //     {error && <Feedback message={error} level="warn" />}
    //     <p>Go to <a href="" onClick={handleGoToLogin}>login</a></p>
    // </div> */}
}