import React, { Component } from 'react'
import styles from './styles.css'


class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      purchased: false,
      price: 5.49
    }
  }

  render() {
    return (
      <div className={styles.builder}>THE BB</div>
    )
  }
}

export default BurgerBuilder;
