import React, { useState, useEffect, useContext } from 'react'
import Results from './Results'
import './Form.sass'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'
import Book from './Book'


export default withRouter(function ({ onSubmit, error, onMount, results, bookedCourts, history, handleBook }) {
    const [, setState] = useContext(Context)
    const [day, setDay] = useState([])
    const [searchDay, setSearchDay] = useState()

    useEffect(() => {
        let day1 = new Date(Date.now())
        let day2 = new Date(day1)
        let day3 = new Date(day1)
        day2.setDate(day1.getDate() + 1)
        day3.setDate(day1.getDate() + 2)
        day1 = day1.getMonth() + 1 + "/" + day1.getDate() + "/" + day1.getFullYear()
        day2 = day2.getMonth() + 1 + "/" + day2.getDate() + "/" + day2.getFullYear()
        day3 = day3.getMonth() + 1 + "/" + day3.getDate() + "/" + day3.getFullYear()
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
        <div className="search">
        <div className="legend">
                <div className="legend_court">
                    <div className="legend_clay"></div>
                    <span className="">Clay Court</span>
                </div>
                <div className="legend_court">
                    <div className="legend_hard"></div>
                    <span className="">Hard Court</span>
                </div>
                <div className="legend_court">
                    <div className="legend_available"></div>
                    <span className="">Available</span>
                </div>
                <div className="legend_court">
                    <div className="legend_reserved"></div>
                    <span className="">Reserved</span>
                </div>
            </div>
            <div className="form_notes">
                <p className="notes"><sup>*</sup>Bookings only allowed for the next 2 days and 1h/booking</p>
                <p className="notes"><sup>**</sup>Only 2 bookings/day allowed per member</p>
                <p className="notes"><sup>***</sup>Not allowed 2 bookings at the same time per member</p>
            </div>
            <Results results={results} bookedCourts={bookedCourts} searchDay={searchDay} />
            <h2 className="date">{searchDay}</h2>
            <select  className="select" name="day" id="day" form="day" onChange={handleSubmit}>
                <option disabled selected>Day</option>
                {day.map(date => <option id="day" value={date}>{date}</option>)}
            </select>
            <Book onSubmit={handleBook} searchDay={searchDay} error={error} />
        </div>
    </>
})