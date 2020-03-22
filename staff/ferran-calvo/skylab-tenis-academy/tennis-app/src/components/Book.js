import React, { useEffect, useState } from 'react'
import Header from './Header'
// import Navbar from './Navbar'
import './Login.sass'
import './Header.sass'
import './Form.sass'
import Feedback from './Feedback'

export default function ({onSubmit, searchDay, error }) {
    const [players, setPlayers] = useState("2")

    function handleChange(event){
        event.preventDefault()

        setPlayers(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        let date

        const { target: {
            hour: { value: hour },
            court: { value: court },
            user2: { value: user2 },
            user3: { value: user3 },
            user4: { value: user4 }
        } } = event

        date =  `${searchDay} ${hour}`
        onSubmit(user2, user3, user4, court, date)
    }

    const courts = [1,2,3,4,5,6,7,8,9,10]

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
                    </select>
                    <label for="court">court</label>
                    <select name="court" id="court" form="book">
                    {courts.map(court => <option value={court}>{court}</option>)}
                    </select>
                    <label for="players">players</label>
                    <select name="players" id="players" form="book" onChange={handleChange}>
                        <option value="2">2</option>
                        <option value="4">4</option>
                    </select>
                    <label for="user2" className="form_label">MEMBER NUMBER PLAYER 2</label>
                    <input type="text" className="form_input" id="user2" name="user2" placeholder="Member Number Player 2"/>
                    <label for="user3" className={players === "2"? 'hidden':'form_label'}>MEMBER NUMBER PLAYER 3</label>
                    <input type="text" className={players === "2"? 'hidden':'form_input'} id="user3" name="user3" placeholder="Member Number Player 3"/>
                    <label for="user4" className={players === "2"? 'hidden':'form_label'}>MEMBER NUMBER PLAYER 4</label>
                    <input type="text" className={players === "2"? 'hidden':'form_input'} id="user4" name="user4" placeholder="Member Number Player 4"/>
                    <button type="submit" name="submit" value="submit">BOOK</button>
            </form>
            {error && <Feedback message={error} level="warn" />}
        </>     

}