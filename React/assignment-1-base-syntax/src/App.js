import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput'
import {UserOutput} from './components/UserOutput'

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      username: '?'
    };

    this.state = this.initialState;
    this.updateUser = this.updateUser.bind(this)
  }


  updateUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserInput
            username={this.state.username}
            onChange = {this.updateUser}
          />
        </header>
        <main>
          <UserOutput
            username={this.state.username} />

          <UserOutput
            username={this.state.username} />
        </main>
      </div>
    );
  }
}

export default App;
