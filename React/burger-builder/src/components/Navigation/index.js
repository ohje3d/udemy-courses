import React from 'react';
import NavigationItem from './NavigationItem';
import styles from './styles.css';

const Navigation = (props) => {
  return (
    <ul
      className={styles.nav}
    >
      <NavigationItem
        href={'/'}
        label={'Foo'}
        />
    </ul>
  )
}

export default Navigation
