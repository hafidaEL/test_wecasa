import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import HaircutPrestation from './components/HaircutPrestation/HaircutPrestation'
import Categorie from './components/Categorie/Categorie'

const App = () => {
      return (
        <Router>
          <Switch>
              <Route path='/' component={HaircutPrestation} exact/>
              <Route path='/categorie/:reference' component={Categorie} />
          </Switch>
        </Router>
      )
}

export default App;
