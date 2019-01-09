import React, {Fragment, Component} from "react";
import styles from './Cockpit.css'

class Cockpit extends Component {

  render() {
    const assignedClasses = [];
    const btnClasses = [styles.btn];

    if (this.props.persons.length <= 2) {
      assignedClasses.push(styles.red); // classes = ['red']
    }
    if (this.props.persons.length <= 1) {
      assignedClasses.push(styles.bold); // classes = ['red', 'bold']
    }

    console.log('this.props.showPersons ', this.props.showPersons)
    if (this.props.showPersons) {
      btnClasses.push(styles.btnRed);
    }

    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClasses.join(' ')}
          onClick={this.props.onClick}>Toggle Persons
        </button>
      </Fragment>
    )
  }
}

export default Cockpit
