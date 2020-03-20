import React, { useEffect } from 'react'
import Header from './Header'
// import Navbar from './Navbar'
import './Login.sass'
import './Header.sass'
import './Form.sass'
import Feedback from './Feedback'

export default function ({onSubmit, searchDay, error }) {
    // useEffect(() => {
    //     onMount()
    // }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            userMember: { value: userMember },
            password: { value: password }
        } } = event

        onSubmit(userMember, password)
    }


    return <>
            <form id="book" onSubmit={handleSubmit}>
                    <label for="day">hour</label>
                    <select name="hour" id="hour" form="book">
                        <option value="08:00">8-9h</option>
                        <option value="09:00">9-10h</option>
                        <option value="10:00">10-11h</option>
                        <option value="11:00">11-12h</option>
                        <option value="12:00">12-13h</option>
                        <option value="13:00">13-14h</option>
                        <option value="14:00">14-15h</option>
                        <option value="15:00">15-16h</option>
                        <option value="16:00">16-17h</option>
                        <option value="17:00">17-18h</option>
                        <option value="18:00">18-19h</option>
                        <option value="19:00">19-20h</option>
                        <option value="20:00">20-21h</option>
                        <option value="21:00">21-22h</option>
                        <option value="22:00">22-23h</option>
                    </select>
                    <label for="court">court</label>
                    <select name="court" id="court" form="book">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <label for="user2" className="form_label">MEMBER NUMBER PLAYER 2</label>
                    <input type="text" className="form_input" id="user2" name="user2" placeholder="Member Number Player 2"/>
                    <label for="user3" className="form_label">MEMBER NUMBER PLAYER 3 (optional)</label>
                    <input type="text" className="form_input" id="user3" name="user3" placeholder="Member Number Player 3"/>
                    <label for="user4" className="form_label">MEMBER NUMBER PLAYER 4 (optional)</label>
                    <input type="text" className="form_input" id="user4" name="user4" placeholder="Member Number Player 4"/>
                    <button type="submit" name="submit" value="submit">SEARCH</button>
            </form> 
        </>     

}