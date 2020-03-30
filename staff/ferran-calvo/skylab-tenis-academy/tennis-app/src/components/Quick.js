import React, { useState, useEffect, useContext } from 'react'
import './style/Form.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, onChange, error, quickBook }) {

    const [players, setPlayers] = useState("2")
    
    useEffect(() => {
        let nowHour = new Date(Date.now())
        if (nowHour.getHours()<8) nowHour = "8"
        else nowHour = (nowHour.getHours()).toString()
        onChange(nowHour)
    }, [])

    function handleChange(event){
        event.preventDefault()

        setPlayers(event.target.value)
    }


    function handleSubmitHour(event) {
        event.preventDefault()

        onChange(event.target.value)
    }

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
            <form className="form_quick" id="book" onSubmit={handleSubmit}>
                <h3 className="form_titleM">Quick Booking</h3>             
                <select className="select" name="hour" id="hour" form="book" onChange={handleSubmitHour}>
                    <option disabled selected>Hour</option>
                    <option value="8">8-9h</option>
                    <option value="9">9-10h</option>
                    <option value="10">10-11h</option>
                    <option value="11">11-12h</option>
                    <option value="12">12-13h</option>
                    <option value="13">13-14h</option>
                    <option value="14">14-15h</option>
                    <option value="15">15-16h</option>
                    <option value="16">16-17h</option>
                    <option value="17">17-18h</option>
                    <option value="18">18-19h</option>
                    <option value="19">19-20h</option>
                    <option value="20">20-21h</option>
                    <option value="21">21-22h</option>
                </select>

                <select  className="select" name="players" id="players" form="book" onChange={handleChange}>
                    <option disabled selected>Number of players</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                </select>
                    
                <input type="text" className="form_input input-players" id="user2" name="user2" placeholder="Member Number Player 2"/>
                <input type="text" className={players === "2"? 'hidden':'form_input input-players'} id="user3" name="user3" placeholder="Member Number Player 3"/>

                <input type="text" className={players === "2"? 'hidden':'form_input input-players'} id="user4" name="user4" placeholder="Member Number Player 4"/>
                <p className="form_quick_p">Court: <span className="form_quick_span">{quickBook[0]}</span> Date: <span className="form_quick_span">{quickBook[1]}</span></p>
                <button className="form_button" type="submit" name="submit" value="submit">BOOK</button>
            </form>
            {error && <Feedback message={error} level="warn" />}
        </>     
}

