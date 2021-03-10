import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './css/Section.css'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Movies from '../pages/movies/Movies'
import DetailMovies from '../pages/movies/DetailMovies'
import Games from '../pages/games/Games'
import DetailGames from '../pages/games/DetailGames'

import AdminMovies from '../pages/movies/admin/AdminMovies'
import AdminGames from '../pages/games/admin/AdminGames'

import { AppContext } from '../context/AppContext'

const Section = () => {
  const [user] = useContext(AppContext)

  const PrivateRoute = ({ user, ...props }) =>
    user ? <Route {...props} /> : <Redirect to="/login" />

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <Route exact path="/movies" user={user} component={Movies} />
        <Route exact path="/movies/:id" user={user} component={DetailMovies} />
        <Route exact path="/games" user={user} component={Games} />
        <Route exact path="/games/:id" user={user} component={DetailGames} />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <Route exact path="/register" user={user} component={Register} />
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
