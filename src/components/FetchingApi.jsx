import React, {Component} from 'react'

class FetchingApi extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  ComponentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.co//api/people/?page=2")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    return (
      <div>
        <h4>{this.state.loading ? "loading...": this.state.character.height}</h4>
      </div>

      )
  }
}

export default FetchingApi
