import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AppContext } from '../AppContext'

import Home from './home/Home'
import About from './about/About'
import BooksList from './booksList/BooksList'
import Login from './login/Login'

const Routes = () => {
  const { isLoggedState } = useContext(AppContext)
  const [isLogged, setIsLogged] = isLoggedState

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />
        }}
      />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/booksList">{isLogged ? <BooksList /> : <Login />}</Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default Routes
