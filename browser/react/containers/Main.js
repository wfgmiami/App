import Holding from './Holding';
import Home from './Home';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/app' component={ Holding } />
    </Switch>
  </div>

)

export default Main;
