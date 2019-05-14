import React from 'react';
import {Link} from 'react-router-dom';

function Home (){
  return(
    <div>
      <h3>My Works</h3>
      <ul>
        <li><Link to="/plusone">Plus One</Link></li>
      </ul>
    </div>
    )
}

export default Home
