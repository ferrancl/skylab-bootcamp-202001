import React, { useState, useEffect, useContext } from 'react'
import './style/Form.sass'
import Feedback from './Feedback'
import { retrieveUser } from '../logic'

export default function ({ onSubmit, onAnswer, error }) {
    const [friends, setFriends] = useState([])
    const [requests, setRequests] = useState([])
    const [invitations, setInvitations] = useState([])

    useEffect(() => {
        const { friends, requests, invitations } = await retrieveUser()
        setFriends(friends)
        setRequests(requests)
        setInvitations(invitations)
    }, [])


    function handleSubmit(event) {
        event.preventDefault()
        let date
        let court

        const { target: {
            user2: { value: user2 },
            user3: { value: user3 },
            user4: { value: user4 }
        } } = event

        court = quickBook[0]
        date = quickBook[1]
        onSubmit(user2, user3, user4, court, date)
    }

    return <>

            <form className="form" id="book" onSubmit={handleSubmit}>
                <h3 className="form_title">INVITATIONS RECEIVED</h3>
                {invitations.length>0? invitations.map(book => <form className="bookings_book" onSubmit={handleSubmit}><p className="mybooks">Date: {book.day}</p><p>Hour: {new Date(book.date).getHours()}h</p><p>Court: {book.court.number}</p><input type="hidden" name = "book" id="book" value={book.id}/><button className="form_button" type="submit">CANCEL</button></form>): <p className="form_nobookings">No invitations pending :(</p>}

            </form>
            {message && <Feedback message={message} level="info" />}
            {error && <Feedback message={error} level="warn" />}

            <form className="form" id="book" onSubmit={handleSubmit}>
                <h3 className="form_title">MAKE A FRIEND REQUEST</h3>
                <input type="text" className='form_input' id="user4" name="user4" placeholder="Member Number"/>             
                <button className="form_button" type="submit" name="submit" value="submit">SEND</button>
            </form>
            {message && <Feedback message={message} level="info" />}
            {error && <Feedback message={error} level="warn" />}


        </>     
}

