import React  from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PlusOne from './PlusOne'
import Conditional from './Conditional'
import Mapping from './Mapping'
import FetchingApi from './FetchingApi'
import Form from './FormContainer'
import Home from './Home'

function App () {
  return (
    <div>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/plusone" component={PlusOne}  />

      <Route path="/conditional" component={Conditional} />

      <Route path="/mapping" component={Mapping} />

      <Route path="/fetching" component={FetchingApi} />

      <Route path="/form" component={Form} />
      </Switch>
    </Router>
    </div>
  )
}


export default App
