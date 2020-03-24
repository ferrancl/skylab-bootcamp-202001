import React, { useState, useEffect, useContext } from 'react'
import './Header.sass'
import './Login.sass'
import './Form.sass'
import { retrieveUserBooks, isLoggedIn} from '../logic'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'


export default withRouter(function ({onSubmit, error, onMount, history }) {
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

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            book: { value: book },
        } } = event

        onSubmit(book)
    }

    return <>
        {myBooks.map(book => <form className="form" onSubmit={handleSubmit}><label>Date: {book.date.split('T')[0]}, Hour: {((book.date.split('T')[1]).split('.')[0]).split(':')[0]}h, Court: {book.court.number}</label><input type="hidden" name = "book" id="book" value={book.id}/><button type="submit">CANCEL</button></form>)}
    </>
})