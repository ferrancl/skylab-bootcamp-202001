import React, { useState, useEffect } from 'react'
import './style/Form.sass'
import Feedback from './Feedback'
import { retrieveUserFriends } from '../logic'

export default function ({ onAnswer, error }) {
    // const [friends, setFriends] = useState([])
    const [requests, setRequests] = useState([])
    const [invitations, setInvitations] = useState([])

    useEffect(() => {
        (async () => {
            const [, requests, invitations]  = await retrieveUserFriends()
            setRequests(requests)
            setInvitations(invitations)
        })()
    }, [])


    function handleAnswer(event) {
        event.preventDefault()

        
        const [user2, answer] = event.target.value.split(',')
        
        onAnswer(user2, answer)
    }

    return <>
            <form className="form" id="book">
                <h3 className="form_title">REQUESTS RECEIVED</h3>
                {invitations.length>0? invitations.map(invitation => <div className="bookings_book"><p className="mybooks">Name: {invitation.name}</p><p>Surname: {invitation.surname}</p><p>Member Number: {invitation.memberNumber}</p><button className="form_button" type="submit" value={[invitation.memberNumber,"yes"]} onClick={handleAnswer}>ACCEPT</button><button className="form_button" type="submit" value={[invitation.memberNumber,"no"]} onClick={handleAnswer}>DECLINE</button></div>): <p className="form_nobookings">No requests received</p>}
                {error && <Feedback message={error} level="warn" />}
            </form>
            <div className="form" id="book">
                <h3 className="form_title">REQUESTS PENDING OF CONFIRMATION</h3>
                {requests.length>0? requests.map(request => <p className="mybooks">Member Number: {request.memberNumber}</p>): <p className="form_nobookings">No requests pending of confirmation</p>}
            </div>
            {/* <div className="form" id="book" >
                <h3 className="form_title">FRIENDS LIST</h3>
                {friends.length>0? friends.map(friend => <div><p className="mybooks">Name: {friend.name}</p><p className="mybooks">Surname: {friend.surname}</p><p className="mybooks">Member Number: {friend.memberNumber}</p></div>): <p className="form_nobookings">No friends in your list</p>}
            </div> */}

            {/* {message && <Feedback message={message} level="info" />}
            {error && <Feedback message={error} level="warn" />}

            <form className="form" id="book" onSubmit={handleSubmit}>
                <h3 className="form_title">MAKE A FRIEND REQUEST</h3>
                <input type="text" className='form_input' id="user4" name="user4" placeholder="Member Number"/>             
                <button className="form_button" type="submit" name="submit" value="submit">SEND</button>
            </form>
            {message && <Feedback message={message} level="info" />}
            {error && <Feedback message={error} level="warn" />} */}


        </>     
}

