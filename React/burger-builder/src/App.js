import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './scenes/BurgerBuilder'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render () {
    return (
        <div className={classes.App}>
          <BurgerBuilder />
        </div>
    );
  }
}

export default App;
