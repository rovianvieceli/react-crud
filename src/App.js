import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Rovian',
      email: 'rovianvieceli@mail.com'
    }

    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeState() {
    this.setState({
      name: "Rovian Vieceli"
    })
  }

  changeInput(event) {
    const { name, value } = event.target

    this.setState({
      [name]: value
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
        <form>
          <label htmlFor="name">
            <input id="name" type="text" name="name" value={this.state.name} onChange={this.changeInput} />
          </label>
          <label htmlFor="email">
            <input id="email" type="text" name="email" value={this.state.email} onChange={this.changeInput} />
          </label>
        </form>
        <div>
          {this.state.name} - {this.state.email}
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
