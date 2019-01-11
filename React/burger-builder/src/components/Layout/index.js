import React, {Component, Fragment} from 'react';
import styles from './styles.css'
import Toolbar from '../Toolbar'
import SideDrawer from "../SideDrawer";

class Layout extends Component {
  constructor(props){
    super(props)
    this.sideDrawerCloseHandler = this.sideDrawerCloseHandler.bind(this)
    this.state = {
      open: false
    }
  }

  sideDrawerCloseHandler () {
    this.setState({
      open: false
    })
  }

  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Toolbar
          toggleMenu={this.toggleSideDrawer}
        />
        <SideDrawer
          open={this.state.open}
          triggerClose={this.sideDrawerCloseHandler}
        />
        <main className={styles.content}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout;
