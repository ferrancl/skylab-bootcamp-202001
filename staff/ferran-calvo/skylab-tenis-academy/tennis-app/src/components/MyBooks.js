import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import './Header.sass'
import './Login.sass'
import './Form.sass'
import { retrieveUserBooks, isLoggedIn, logout} from '../logic'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'


export default withRouter(function ({ history, onGoToUpdate, onGoToSearch, error, onMount }) {
    const [, setState] = useContext(Context)
    const [myBooks, setMyBooks] = useState([])

    useEffect(() => {
        if (isLoggedIn())
            (async () => {
                try {
                    const myBooks = await retrieveUserBooks()

                    setMyBooks(myBooks)
                    
                    setState({ page: 'my-books' })
                    onMount()
                } catch ({ message }) {
                    setState({ error: message, page: 'login' })
                }
            })()
        else setState({ page: 'login' })
    }, [])

    function handleLogout() {
        logout()

        setState({ page: 'login' })

        history.push('/login')
    }

    function handleGoToUpdate(event) {
        event.preventDefault()

        onGoToUpdate()
    }


    function handleGoToSearch(event) {
        event.preventDefault()

        onGoToSearch()
    }


    return <>
        <Header/>
        <button onClick={handleLogout}>Logout</button>
        <ul className="results">
        {myBooks.map(book => <li>Date: {book.date.split('T')[0]}, Hour: {((book.date.split('T')[1]).split('.')[0]).split(':')[0]}h, Court: {book.court}</li>)}
        </ul>

        {/* <h1>Hello, {name}!</h1> */}
        <a href="" onClick={handleGoToUpdate} className="login">UPDATE USER</a>
        <a href="" onClick={handleGoToSearch} className="login">SEARCH</a>   
    </>
})