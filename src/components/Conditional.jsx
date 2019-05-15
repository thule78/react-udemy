import React, {Component} from 'react'

class Conditional extends Component {
  constructor() {
    super()
    this.state = {
      isLoggIn: false
    }
    this.handleStatus = this.handleStatus.bind(this)
  }

  handleStatus() {
    this.setState(prevState => {
      return {
        isLoggIn: !prevState.isLoggIn
      }
    })
  }

  render() {
    return(
      <div>
        <h3>Click to change status</h3>
        <strong>{this.state.isLoggIn ? "You're now LogIn" : "You need to LogIn"} </strong><br />
        <button onClick={this.handleStatus}>{this.state.isLoggIn ? "LogOut" : "LogIn" }</button>
      </div>
      )
  }
}

export default Conditional
