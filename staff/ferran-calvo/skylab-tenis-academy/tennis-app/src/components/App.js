import React, { useEffect, useContext } from 'react'
import './App.sass'
import Page from './Page'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Remember from './Remember'
import Update from './Update'
import MyBooks from './MyBooks'
import { registerUser, login, isLoggedIn, rememberPassword, updateUser, cancelBook } from '../logic'
import { Context } from './ContextProvider'
import { Route, withRouter, Redirect } from 'react-router-dom'

export default withRouter(function ({ history }) {
  const [state, setState] = useContext(Context)

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

      setState({ page: 'login' })
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

  function handleGoToMyBookings(){
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

  const { page, error } = state

  return <div className="app">
    <Page name={page}>
      <Route path="/" render={props => <h1>{props.match.params.id}</h1>} />
      <Route exact path="/" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Redirect to="/login" />} />
      {/* <Route path="/" render={() => <h1>Hello, All</h1>} /> */}
      {/* <Route path="/login" render={() => <h1>Hello, Login</h1>} /> */}
      <Route path="/home/:id" render={props => <h1>{props.match.params.id}</h1>} />
      <Route path="/register" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Register onSubmit={handleRegister} error={error} onGoToLogin={handleGoToLogin} onMount={handleMountRegister} />} />
      <Route path="/login" render={() => <Login onSubmit={handleLogin} error={error} onGoToRegister={handleGoToRegister} onGoToRememberPassword={handleGoToRememberPassword} onMount={handleMountLogin} />} />
      <Route path="/home" render={() => isLoggedIn() ? <Home onGoToUpdate={handleGoToUpdate} onGoToSearch={handleGoToSearch} onGoToMyBookings={handleGoToMyBookings}/> : <Redirect to="/login" />} />
      <Route path="/remember-password" render={() => <Remember onSubmit={handleRemember} onGoToLogin={handleGoToLogin} error={error} onMount={handleMountRemember} />} />
      <Route path="/update-user" render={() => <Update onSubmit={handleUpdateUser} onGoToSearch={handleGoToSearch} onGoToMyBookings={handleGoToMyBookings} error={error} onMount={handleMountUpdate} />} />
      <Route path="/my-books" render={() => <MyBooks onSubmit={handleCancelBook} onGoToSearch={handleGoToSearch} onGoToUpdate={handleGoToUpdate} error={error} onMount={handleMountMyBooks} />} />

    </Page>
  </div>
})