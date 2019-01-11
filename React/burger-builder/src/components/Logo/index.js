import React from 'react';
import burgerLogo from '../../assets/burger-logo.png'
import styles from './styles.css';

const Logo = (props) => {
  return (
    <div className={styles.logo}>
      <img
        src={burgerLogo}
        alt="A Logo"
      />
    </div>
  )
}

export default Logo
