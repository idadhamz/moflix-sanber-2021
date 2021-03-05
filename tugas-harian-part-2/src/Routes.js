import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Tugas9 from './tugas-9/tugas9'
import Tugas10 from './tugas-10/tugas10'
import Tugas11 from './tugas-11/tugas11'
import Tugas12 from './tugas-12/tugas12'
import Tugas13 from './tugas-13/tugas13'
import Tugas14 from './tugas-14/tugas14'
import Tugas15 from './tugas-15/tugas15'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tugas9">
        <Tugas9 />
      </Route>
      <Route path="/tugas10">
        <Tugas10 />
      </Route>
      <Route path="/tugas11">
        <Tugas11 start={100} />
      </Route>
      <Route path="/tugas12">
        <Tugas12 />
      </Route>
      <Route path="/tugas13">
        <Tugas13 />
      </Route>
      <Route path="/tugas14">
        <Tugas14 />
      </Route>
      <Route path="/tugas15">
        <Tugas15 />
      </Route>
    </Switch>
  )
}

export default Routes
