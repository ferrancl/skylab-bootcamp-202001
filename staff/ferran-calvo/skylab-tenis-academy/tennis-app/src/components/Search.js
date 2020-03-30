import React, { useState, useEffect, useContext } from 'react'
import Results from './Results'
import './style/Form.sass'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'
import Book from './Book'


export default withRouter(function ({ onSubmit, onSubmitWeather, error, onMount, results, bookedCourts, history, handleBook, weather }) {
    const [, setState] = useContext(Context)
    const [day, setDay] = useState([])
    const [searchDay, setSearchDay] = useState()
    
    useEffect(() => {
        let hour = " 12:00:00"
        let currentDay = new Date(Date.now())
        let day2 = new Date(currentDay)
        let day3 = new Date(currentDay)

        day2.setDate(currentDay.getDate() + 1)
        day3.setDate(currentDay.getDate() + 2)

        let day1 = currentDay.getMonth() + 1 + "/" + currentDay.getDate() + "/" + currentDay.getFullYear()
        day2 = day2.getMonth() + 1 + "/" + day2.getDate() + "/" + day2.getFullYear()
        day3 = day3.getMonth() + 1 + "/" + day3.getDate() + "/" + day3.getFullYear()

        let month = day1.split('/')[0]
        if (month.length ===1) month="0"+month
        let date = day1.split('/')[2]+ "-"+ month+ "-" + day1.split('/')[1] + hour 

        if (currentDay.getHours() > 12){
            hour = " 15:00:00"
            date = day1.split('/')[2]+ "-"+ month+ "-" + day1.split('/')[1] + hour
            if (currentDay.getHours() > 15){
                hour = " 18:00:00"
                date = day1.split('/')[2]+ "-"+ month+ "-" + day1.split('/')[1] + hour
                if (currentDay.getHours() > 18){
                    hour = " 21:00:00"
                    date = day1.split('/')[2]+ "-"+ month+ "-" + day1.split('/')[1] + hour
                    if (currentDay.getHours() > 21){
                        hour = " 00:00:00"
                        month = day2.split('/')[0]
                        if (month.length ===1) month="0"+month
                        date = day2.split('/')[2]+ "-"+ month+ "-" + day2.split('/')[1] + hour
                        hour= " 12:00:00"     
                    }
                }
            }
        }              
        setSearchDay(day1)
        setDay([day1, day2, day3])
        onSubmit(day1)
        onSubmitWeather(date)
        onMount()
    }, [])

    function handleSubmit(event) {
        let date
        event.preventDefault()
        let now = new Date(Date.now())
        let day2 = new Date(now)
        let day1 = now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear()
        day2.setDate(now.getDate() + 1)
        let hour = " 12:00:00"
        if (event.target.value === day1){
            let month = day1.split('/')[0]
            let dayy = day1.split('/')[1]
            if (dayy.length ===1) dayy="0"+dayy
            if (month.length ===1) month="0"+month
            date = day1.split('/')[2]+ "-"+ month+ "-" + dayy + hour     
            if (now.getHours() > 12){
                hour = " 15:00:00"
                date = day1.split('/')[2]+ "-"+ month+ "-" + dayy + hour
                if (now.getHours() > 15){
                    hour = " 18:00:00"
                    date = day1.split('/')[2]+ "-"+ month+ "-" + dayy + hour
                    if (now.getHours() > 18){
                        hour = " 21:00:00"
                        date = day1.split('/')[2]+ "-"+ month+ "-" + dayy + hour
                        if (now.getHours() > 21){
                            hour = " 00:00:00"
                            dayy = day2.split('/')[1]
                            if (dayy.length ===1) dayy="0"+dayy
                            month = day2.split('/')[0]
                            if (month.length ===1) month="0"+month
                            date = day2.split('/')[2]+ "-"+ month+ "-" + dayy + hour
                        }
                    }
                }
            }              
    
        }
        else{
            let dayy = event.target.value.split('/')[1]
            if (dayy.length == 1) dayy = "0"+dayy
            let month = event.target.value.split('/')[0]
            if (month.length == 1) month = "0"+month
            date = event.target.value.split('/')[2]+ "-"+ month+ "-" + dayy + hour

        }
        setSearchDay(event.target.value)
        onSubmit(event.target.value)
        onSubmitWeather(date)
       
    }

    return <>
        <div className="search">
            <div className="dayWeather">
            <select  className="select_day" name="day" id="day" form="day" onChange={handleSubmit}>
                {day.map(date => <option id="day" value={date}>{date}</option>)}
            </select>
                <img className="weather" src={`http://openweathermap.org/img/wn/${weather}@2x.png`}/>
            </div>
            <Results results={results} bookedCourts={bookedCourts} searchDay={searchDay} />
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
                <p className="notes"><sup>*</sup> Bookings only allowed for the next 2 days and 1h/booking</p>
                <p className="notes"><sup>**</sup> Only 2 bookings/day allowed per member</p>
                <p className="notes"><sup>***</sup> Not allowed 2 bookings at the same time per member</p>
            </div>
            <Book onSubmit={handleBook} searchDay={searchDay} error={error} />
        </div>
    </>
})