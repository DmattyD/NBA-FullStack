
import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
      return (
        <div className="Home">
          <Link to='/players'>Players</Link>
          <Link to='/teams'>Teams</Link>
          <Link to='/coaches'>Coaches</Link>
          <Link to='/divisions'>Divisions</Link>
        </div>
      );
    }
  }
  
  export default Home;