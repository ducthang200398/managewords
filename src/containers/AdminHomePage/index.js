
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles';
import  Dashboard  from './../../components/Dashboard';
// import { TextField } from '@material-ui/core';


class AdminHomePage extends Component {
  render() {
    // const { classes,handleChange} = this.props;
    // console.log("handleChange:",handleChange)
    return (
    <div>
    <div>
   <Dashboard />
    </div>
        {this.props.children}
        </div>
    );
  }
}

export default withStyles(styles)(AdminHomePage);