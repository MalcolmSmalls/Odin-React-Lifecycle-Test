import React, { Component } from "react"

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      count: 0
    }

    this.increment = () => this.setState({count: this.state.count+1})
    this.decrease = () => this.setState({count: this.state.count-1})
  }

  render(){
    return (
      <div>
        <button onClick={this.increment}>Increase</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrease}>Decrease</button>
      </div>

    )
  }
}