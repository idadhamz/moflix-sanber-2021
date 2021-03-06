import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import About from './about/About'
import BooksList from './booksList/BooksList'
import Login from './login/Login'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/booksList">
        <BooksList />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default Routes
