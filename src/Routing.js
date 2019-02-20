// npm install react-router-dom - terminal install code for react router dom

import React from 'react'
import {  BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import players from './components/players';
import teams from './components/teams';
import Coaches from './components/coaches';
import divisions from './components/divisions';
import Home from './components/home';

const Routing = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players" component={players} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/teams" component={teams} />
        <Route path="/divisions" component={divisions} />
    </Switch>
    </Router>
  );
  


export default Routing;