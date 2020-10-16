
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles';
import Header from './Header';
import SiderBar from './SiderBar';
// import { Dashboard } from '@material-ui/icons';
// import { TextField } from '@material-ui/core';


class Dashboard extends Component {
  render() {
    const { classes,name,children} = this.props;
    console.log("name:",name)
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
        />
        <div className={classes.wrapper}>
          <SiderBar
          />
          <div
            className={classes.wrapperContent
            }
          >
            {children}
          </div>
        </div>
      </div>
    )}
}

export default withStyles(styles)(Dashboard);