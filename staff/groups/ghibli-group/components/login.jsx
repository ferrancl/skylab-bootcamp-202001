function Login({onSubmit, handleGoToRegister, error}) {

    return(
        <form className="register" onSubmit={event => {
            event.preventDefault()
            const username = event.target.username.value
            const password = event.target.password.value

            onSubmit(username, password)
        }}>
            <h2>Sign-In</h2>
            <input name="username" placeholder="username"/>
            <input name="password" placeholder="password" type="password"/>
            <button>Login</button>

            {error && <span>{error}</span>}
        
            <a onClick={event => {

                event.preventDefault()
                handleGoToRegister()

            }}>Register</a>
        </form>
    )
}