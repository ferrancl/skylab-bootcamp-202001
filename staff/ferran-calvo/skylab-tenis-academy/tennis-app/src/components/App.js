import React, { useEffect, useContext, useState } from 'react'
import './App.sass'
import Page from './Page'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Remember from './Remember'
import Update from './Update'
import MyBooks from './MyBooks'
import Search from './Search'
import { registerUser, login, isLoggedIn, rememberPassword, updateUser, cancelBook, retrieveDayBooks, book } from '../logic'
import { Context } from './ContextProvider'
import { Route, withRouter, Redirect } from 'react-router-dom'

export default withRouter(function ({ history }) {
  const [state, setState] = useContext(Context)
  const [results, setResults] = useState([])
  const [bookedCourts, setBookedCourts] = useState([])


  useEffect(() => {
    if (isLoggedIn()) {
      setState({ page: 'home' })

      history.push('/home')
    } else {
      setState({ page: 'login' })

      history.push('/login')
    }
  }, [])

  async function handleRegister(name, surname, email, password) {
    try {
      await registerUser(name, surname, email, password)

      history.push('/login')
      // setState({ page: 'login' })
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleLogin(email, password) {
    try {
      await login(email, password)

      history.push('/home')
    } catch ({ message }) {
      setState({ ...state, error: message })
    }
  }

  async function handleRemember(email) {
    try {
      await rememberPassword(email)

      history.push('/login')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleUpdateUser(email, oldPassword, password) {
    try {
      await updateUser(email, oldPassword, password)

      history.push('/home')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleCancelBook(id) {
    try {
      await cancelBook(id)

      history.push('/home')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleBook(user2, user3, user4, number, date){
    try {
      await book(user2, user3, user4, number, date)

      history.push('/my-books')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleDayBooks(day) {
    try {
      let array=[]
      const results = await retrieveDayBooks(day)
      results.map(result => array.push(`${result.court.number}-${(result.date.split('T')[1].split(':')[0])}`))
      setBookedCourts(array)
      setResults(results)


    } catch ({ message }) {
      setState({ error: message })
    }
  }

  function handleGoToLogin() {
    history.push('/login')
  }

  function handleGoToRegister() {
    history.push('/register')
  }

  function handleGoToRememberPassword() {
    history.push('/remember-password')
  }
  function handleGoToSearch(){
    history.push('./search')
  }

  function handleGoToUpdate(){
    history.push('./update-user')
  }

  function handleGoToMyBooks(){
    history.push('/my-books')
  }

  
  function handleMountLogin() {
    setState({ page: 'login' })
  }
  
  function handleMountRegister() {
    setState({ page: 'register' })
  }

  function handleMountUpdate() {
    setState({ page: 'update-user' })
  }

  function handleMountMyBooks(){
    setState({ page: 'my-books' })
  }

  function handleMountRemember(){
    setState({ page: 'remember-password' })
  }

  function handleMountSearch(){
    setState({ page: 'search' })
  }

  const { page, error } = state

  return <div className="app">
    <Page name={page}>
      <Route path="/" render={props => <h1>{props.match.params.id}</h1>} />
      <Route exact path="/" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Redirect to="/login" />} />
      <Route path="/home/:id" render={props => <h1>{props.match.params.id}</h1>} />
      <Route path="/register" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Register onSubmit={handleRegister} error={error} onGoToLogin={handleGoToLogin} onMount={handleMountRegister} />} />
      <Route path="/login" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Login onSubmit={handleLogin} error={error} onGoToRegister={handleGoToRegister} onGoToRememberPassword={handleGoToRememberPassword} onMount={handleMountLogin} />} />
      <Route path="/home" render={() => isLoggedIn() ? <Home onGoToUpdate={handleGoToUpdate} onGoToSearch={handleGoToSearch} onGoToMyBooks={handleGoToMyBooks}/> : <Redirect to="/login" />} />
      <Route path="/remember-password" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Remember onSubmit={handleRemember} onGoToLogin={handleGoToLogin} error={error} onMount={handleMountRemember} />} />
      <Route path="/update-user" render={() => isLoggedIn() ? <Update onSubmit={handleUpdateUser} onGoToSearch={handleGoToSearch} onGoToMyBooks={handleGoToMyBooks} error={error} onMount={handleMountUpdate} />: <Redirect to="/login" />} />
      <Route path="/my-books" render={() => isLoggedIn() ? <MyBooks onSubmit={handleCancelBook} onGoToSearch={handleGoToSearch} onGoToUpdate={handleGoToUpdate} error={error} onMount={handleMountMyBooks} />: <Redirect to="/login" />} />
      <Route path="/search" render={() => isLoggedIn() ? <Search onSubmit={handleDayBooks} onGoToMyBooks={handleGoToMyBooks} onGoToUpdate={handleGoToUpdate} error={error} onMount={handleMountSearch} results={results} bookedCourts={bookedCourts} handleBook={handleBook}/>: <Redirect to="/login" />} />    </Page>
  </div>
})