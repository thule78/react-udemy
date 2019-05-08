import React, {Component} from 'react'

class PlusOne extends Component {
  constructor(){
    super()
    this.state = {
      count: 0

    }

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleReset() {
    this.setState({
        count: 0
    })
  }

  render() {
    return(
        <div>
          <h1> {this.state.count}</h1>
          <button onClick={this.handleAddOne}>Add 1</button> <br />
          <button onClick={this.handleReset}>Reset</button>
        </div>
      )
  }
}

export default PlusOne
