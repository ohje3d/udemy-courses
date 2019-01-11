import React, {Fragment} from 'react';
import styles from './styles.css';
import Backdrop from "../Backdrop";

const Modal = (props) => (
  <Fragment>
    <div className={styles.modal}
         style={{
           transform: props.show
             ? 'translateY(0)'
             : 'translateY(-100vh)',
           opacity: props.show
             ? 1
             : 0
         }}
    >
      {props.children}
      <button
        type="button"
        className={styles.modalClose}
        onClick={props.triggerModalClose}
      >
        x
      </button>
    </div>
    <Backdrop show={props.show}
              triggerClick={props.triggerModalClose}
    />
  </Fragment>
)

export default Modal
