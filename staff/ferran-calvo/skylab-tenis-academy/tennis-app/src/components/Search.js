import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import './Header.sass'
import './Login.sass'
import './Form.sass'
import { retrieveUserBooks, isLoggedIn, logout} from '../logic'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'


export default withRouter(function ({onSubmit, onGoToUpdate, onGoToMyBooks, error, onMount, history }) {
    const [, setState] = useContext(Context)
    const [day, setDay] = useState([])
    // const [day2, setDay2] = useState([])
    // const [day3, setDay3] = useState([])

    useEffect(() => {
        debugger
        let day1= new Date(Date.now())
        let day2 = new Date(day1)
        day2.setDate(day1.getDate() + 1)
        let day3 = new Date(day1)
        day3.setDate(day1.getDate() + 2)
        day1= day1.getMonth()+1+"/"+day1.getDate()+"/"+day1.getFullYear()
        day2= day2.getMonth()+1+"/"+day2.getDate()+"/"+day2.getFullYear()
        day3= day3.getMonth()+1+"/"+day3.getDate()+"/"+day3.getFullYear()
        setDay([day1,day2,day3])
        // setDay2(day2)
        // setDay3(day3)
        onMount()
    }, [])


    // function handleSubmit(event) {
    //     event.preventDefault()
    //     debugger

    //     const { target: {
    //         book: { value: book },
    //     } } = event

    //     onSubmit(book)
    // }

    function handleLogout() {
        logout()

        setState({ page: 'login' })

        history.push('/login')
    }

    function handleGoToUpdate(event) {
        event.preventDefault()

        onGoToUpdate()
    }


    function handleGoToMyBooks(event) {
        event.preventDefault()

        onGoToMyBooks()
    }


    return <>
        <Header/>
        <button onClick={handleLogout}>Logout</button>

        <form method="post">
            <label for="action">day</label>
            <select name="action" id="action">
            {day.map(date => <option value={date}>{date}</option>)}
            </select> 
            <button type="submit" name="submit" value="submit">SEARCH</button>
        </form>      
        {/* <ul className="results">
        {myBooks.map(book => <li>Date: {book.date.split('T')[0]}, Hour: {((book.date.split('T')[1]).split('.')[0]).split(':')[0]}h, Court: {book.court.number}<button type="submit">CANCEL</button></li>)}
        </ul> */}

        {/* <h1>Hello, {name}!</h1> */}
        <a href="" onClick={handleGoToUpdate} className="login">UPDATE USER</a>
        <a href="" onClick={handleGoToMyBooks} className="login">MY BOOKS</a>   
    </>
})