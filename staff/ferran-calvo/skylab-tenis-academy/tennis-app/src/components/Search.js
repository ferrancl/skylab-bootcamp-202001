import React, { useState, useEffect, useContext } from 'react'
import Results from './Results'
import './Form.sass'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'
import Book from './Book'


export default withRouter(function ({onSubmit, error, onMount, results, bookedCourts, history, handleBook }) {
    const [, setState] = useContext(Context)
    const [day, setDay] = useState([])
    const [searchDay, setSearchDay] = useState()
    
    useEffect(() => {
        let day1= new Date(Date.now())
        let day2 = new Date(day1)
        let day3 = new Date(day1)
        day2.setDate(day1.getDate() + 1)
        day3.setDate(day1.getDate() + 2)
        day1= day1.getMonth()+1+"/"+day1.getDate()+"/"+day1.getFullYear()
        day2= day2.getMonth()+1+"/"+day2.getDate()+"/"+day2.getFullYear()
        day3= day3.getMonth()+1+"/"+day3.getDate()+"/"+day3.getFullYear()
        setSearchDay(day1)
        setDay([day1, day2, day3])
        onSubmit(day1)
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        setSearchDay(event.target.value)
        onSubmit(event.target.value)
    }

    return <>
        <h2>{searchDay}</h2>
        <Results results={results} bookedCourts={bookedCourts} searchDay={searchDay} />
        <label for="day">day</label>
        <select name="day" id="day" form="day" onChange={handleSubmit}>
        {day.map(date => <option id="day" value={date}>{date}</option>)}
        </select>
        <Book onSubmit={handleBook} searchDay={searchDay} error={error} />
    </>
})