import React, { useState, useEffect, useContext } from 'react'
import './Header.sass'
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
        <div className="bookings">
            {myBooks.length>0? myBooks.map(book => <form className="form_book" onSubmit={handleSubmit}><p className="form_mybooks">Date: {book.day}</p><p>Hour: {((book.date.split('T')[1]).split('.')[0]).split(':')[0]}h</p><p>Court: {book.court.number}</p><input type="hidden" name = "book" id="book" value={book.id}/><button className="form_cancel" type="submit">CANCEL</button></form>): <p className="form_nobookings">No bookings pending :(</p>}
        </div>
    </>
})