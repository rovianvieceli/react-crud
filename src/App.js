import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Rovian'
    }

    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  changeState() {
    this.setState({
      name: "Rovian Vieceli"
    })
  }

  resetState() {
    this.setState({
      name: "Rovian"
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.name}
        </div>
        <div>
          <button onClick={this.changeState}>Change State</button>
          <button onClick={this.resetState}>Reset State</button>
        </div>
      </div>
    );
  }
}

export default App;
