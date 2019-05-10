import React from 'react'

function FromComponent (props){
  return(
    <main>
      <from>
        <input
        type="text"
        onChange={props.handleChange}
        value={props.data.firstName}
        name="firstName"
        placeholder="First Name"  />
        <br />
        <input
          type="text"
          onChange={props.handleChange}
          value={props.data.lastName}
          name="lastName"
          placeholder="Last Name"
        />
        <br />
        <label>Your age</label><br />
        <input
          type="number"
          onChange={props.handleChange}
          value={props.data.age}
          name="age"
        />
      </from>
      <br />
      <hr />
      <p>Full Name: {props.data.firstName} {props.data.lastName}</p>
      <p>Age: {props.data.age}</p>
    </main>

    )
}

export default FromComponent
