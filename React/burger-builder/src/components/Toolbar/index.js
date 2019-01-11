import React from 'react';
import styles from './styles.css';
import Logo from '../Logo'
import Navigation from '../Navigation';

const Toolbar = (props) => {
  return (
    <header className={styles.toolbar}>
      <div>
        <button
          type="button"
          className={styles.menu}
          onClick={props.toggleMenu}
        >
          MENU
        </button>
      </div>
      <Logo/>
      <nav className={styles.navigation}>
        <Navigation></Navigation>
      </nav>
    </header>
  )
}

export default Toolbar
