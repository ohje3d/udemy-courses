import React, {Fragment} from 'react';
import Logo from "../Logo";
import Navigation from "../Navigation";
import Backdrop from "../Backdrop";
import styles from './styles.css'

const SideDrawer = (props) => {
  const attachedClasses = [
    styles.sideDrawer,
    props.open
      ? styles.open
      : styles.close
  ].join(' ');
  return (
    <Fragment>
      <div
        className={attachedClasses}
      >
        <div className={styles.logoWrapper}>
          <Logo

          />
        </div>
        <nav>
          <Navigation/>
        </nav>
      </div>
      <Backdrop
        show={props.open}
        triggerClick={props.triggerClose}
      />
    </Fragment>
  );
};

export default SideDrawer;
