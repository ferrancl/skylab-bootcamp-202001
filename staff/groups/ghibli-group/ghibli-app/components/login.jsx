function Login({onSubmit, handleGoToRegister, error, message, errorClick}) {
    
        return <section className="login">
            <form className="form" onSubmit={event => {
                event.preventDefault()
                const username = event.target.username.value
                const password = event.target.password.value

                onSubmit(username, password)
            }}>
                <input className="input" type="text" name="username" placeholder ="username"/>
                <input className="input" type="password" name="password" placeholder="password"/>
                <button className="submit" type="submit">LOGIN</button>

                {error && <Error error={error} message = {message} onClick={errorClick}/>}
                {message && <Error error={error} message = {message} onClick={errorClick}/>}

            </form>
            <section className="not-registered">
                <h4 className="not-registered__text">Not a member?</h4>
                <a className="not-registered__link" href="" onClick={event => {
                    event.preventDefault()
                    handleGoToRegister()}}>JOIN US!</a>
            </section>
        </section>
}