import React, {Fragment} from 'react';
import styles from './styles.css'

const Layout = (props) => {
  return (
    <Fragment>
      <header>Toolbar</header>
      <aside>SideDrawer</aside>
      <main className={styles.content}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout;
