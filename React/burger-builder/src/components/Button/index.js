import React from 'react';
import styles from './styles.css';

const Button = (props) => {
  return (
    <button
      type="button"
      className={[styles.button, styles[props.theme]].join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
