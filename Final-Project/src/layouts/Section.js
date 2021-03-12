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
import ChangePassword from '../pages/ChangePassword'

import ListMovies from '../pages/movies/admin/List'
import CreateMovies from '../pages/movies/admin/Create'
import EditMovies from '../pages/movies/admin/Edit'

import ListGames from '../pages/games/admin/List'
import CreateGames from '../pages/games/admin/Create'
import EditGames from '../pages/games/admin/Edit'

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
        <LoginRoute exact path="/register" user={user} component={Register} />
        <PrivateRoute
          exact
          path="/changePassword"
          user={user}
          component={ChangePassword}
        />

        {/* Admin Movies */}

        <PrivateRoute
          exact
          path="/listMovies"
          user={user}
          component={ListMovies}
        />
        <PrivateRoute
          exact
          path="/createMovies"
          user={user}
          component={CreateMovies}
        />
        <PrivateRoute
          exact
          path="/editMovies/:id"
          user={user}
          component={EditMovies}
        />

        {/* Admin Games */}

        <PrivateRoute
          exact
          path="/listGames"
          user={user}
          component={ListGames}
        />
        <PrivateRoute
          exact
          path="/createGames"
          user={user}
          component={CreateGames}
        />
        <PrivateRoute
          exact
          path="/editGames/:id"
          user={user}
          component={EditGames}
        />
      </Switch>
    </section>
  )
}

export default Section
