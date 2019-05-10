import React  from 'react'

import PlusOne from './PlusOne'
import Conditional from './Conditional'
import Mapping from './Mapping'
import FetchingApi from './FetchingApi'
import Form from './FormContainer'

function App () {
  return (
    <div>
      <h2>Changing State</h2>
      <PlusOne />
      <hr />
      <h2>Conditinonal</h2>
      <Conditional />
      <hr />
      <h2>Mapping</h2>
      <Mapping />
      <hr />
      <h2>Fetching API</h2>
      <FetchingApi />
      <hr />
      <h2>Form</h2>
      <Form />
    </div>
  )
}


export default App
