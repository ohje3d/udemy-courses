import React from 'react';
import styles from './styles.css';

const Backdrop = (props) => (
  props.show
    ? (<div
      className={styles.backdrop}
      onClick={props.triggerClick}
    ></div>)
    : null
)

export default Backdrop
