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
        <br />
        <input
          type="radio"
          onChange={props.handleChange}
          value={'Female'}
          name="gender"
        />Female

        <br />
        <input
          type="radio"
          onChange={props.handleChange}
          value={'Male'}
          name="gender"
        />Male

        <br />
        <select
          onChange={props.handleChange}
          value={props.data.location}
          name="location"
        >
          <option value="">Select Location</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Kyoto">Kyoto</option>
          <option value="Osaka">Osaka</option>
          <option value="Nara">Nara</option>
          <option value="Hokaido">Hokaido</option>

        </select>

      </from>
      <br />
      <hr />
      <p>Full Name: {props.data.firstName} {props.data.lastName}</p>
      <p>Age: {props.data.age}</p>
      <p>Gender: {props.data.gender}</p>
      <p>Location: {props.data.location}</p>
    </main>

    )
}

export default FromComponent
