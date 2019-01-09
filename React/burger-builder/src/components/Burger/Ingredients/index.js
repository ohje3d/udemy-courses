import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styles from './styles.css'

class Ingredients extends Component {
  render() {
    return (
      <div className={styles[this.props.type]}></div>
    )
  }
}

Ingredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredients;

