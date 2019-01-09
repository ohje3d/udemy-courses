import React, {Component} from 'react';
import BurgerBuilder from './scenes/BurgerBuilder'
import Layout from './components/Layout'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render () {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
