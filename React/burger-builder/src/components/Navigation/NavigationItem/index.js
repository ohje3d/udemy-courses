import React from 'react';
import styles from './styles.css';

const NavigationItem = (props) => {
  return (
    <li
      className={styles.navItem}
    >
      <a
        href={props.href}
        title={props.label}
      >
        {props.label}
      </a>
    </li>
  )
}

export default NavigationItem
