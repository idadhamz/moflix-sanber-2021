import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './css/Section.css'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Movies from '../pages/movies/Movies'
import Games from '../pages/games/Games'

import AdminMovies from '../pages/movies/admin/AdminMovies'
import AdminGames from '../pages/games/admin/AdminGames'

import { AppContext } from '../context/AppContext'

const Section = () => {
  const [user] = useContext(AppContext)

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }

  const LoginRoute = ({ user, ...props }) => {
    user ? <Redirect to="/" /> : <Route {...props} />
  }

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <Route exact path="/movies" user={user} component={Movies} />
        <Route exact path="/games" user={user} component={Games} />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <PrivateRoute
          exact
          path="/adminMovies"
          user={user}
          component={AdminMovies}
        />
        <PrivateRoute
          exact
          path="/adminGames"
          user={user}
          component={AdminGames}
        />
      </Switch>
    </section>
  )
}

export default Section
