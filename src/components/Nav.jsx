import React from 'react';
import {Link} from 'react-router-dom';

function Nav (){
  return (
    <div >
      <ul>
        <li><Link to="/plusone">Plus One</Link></li>
        <li><Link to="/conditional">Conditional</Link></li>
        <li><Link to="/mapping">Mapping</Link></li>
        <li><Link to="/fetching">Fetching from API</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/simplecrud"> Simple CRUD</Link></li>
      </ul>
    </div>

    )
}

export default Nav
