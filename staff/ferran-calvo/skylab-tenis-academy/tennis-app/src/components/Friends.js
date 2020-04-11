import React, { useState, useEffect } from 'react'
import './style/Form.sass'
import Feedback from './Feedback'
import { retrieveUserFriends } from '../logic'

export default function ({ onSubmit, error }) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        (async () => {
            const [friends , , ]  = await retrieveUserFriends()
            setFriends(friends)
        })()
    }, [])

    function handleSubmit (event){
        event.preventDefault()

        const { target: {
            user2: { value: user2 },
            name2: { value: name2 },
            surname2: { value: surname2 }
        } } = event

        onSubmit(user2, name2,  surname2)
    }

    return <>
            <div className="form" id="book" >
                <h3 className="form_title">FRIENDS LIST</h3>
                {friends.length>0? friends.map(friend => <div><p className="mybooks">Name: {friend.name}</p><p className="mybooks">Surname: {friend.surname}</p><p className="mybooks">Member Number: {friend.memberNumber}</p></div>): <p className="form_nobookings">No friends in your list</p>}
            </div>

            <form className="form" id="book" onSubmit={handleSubmit}>
                <h3 className="form_title">MAKE A FRIEND REQUEST</h3>
                <input type="text" className='form_input' id="user2" name="user2" placeholder="Friend's Member Number"/>
                <input type="text" className='form_input' id="name2" name="name2" placeholder="Friend's Name"/>             
                <input type="text" className='form_input' id="surname2" name="surname2" placeholder="Friend's Surname"/>                         
                <button className="form_button" type="submit" name="submit" value="submit">SEND</button>
            </form>
            {error && <Feedback message={error} level="warn" />}

        </>     
}

