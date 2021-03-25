import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import HaircutPrestation from './components/HaircutPrestation/HaircutPrestation'
import Categorie from './components/Categorie/Categorie'
import Adress from './components/Adress/Adress'
import Appointment from './components/Appointment/Appointment'
import Confirmation from './components/Confirmation/Confirmation'

const App = () => {
      return (
        <Router>
          <Switch>
              <Route path='/' component={HaircutPrestation} exact/>
              <Route path='/categorie/:reference' component={Categorie} />
              <Route path='/adress' component={Adress} />
              <Route path='/appointement' component={Appointment} />
              <Route path='/confirmation' component={Confirmation} />

          </Switch>
        </Router>
      )
}

export default App;
