
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles';
import { TextField } from '@material-ui/core';


class SeachBox extends Component {
  render() {
    const { classes,handleChange} = this.props;
    // console.log("handleChange:",handleChange)
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
        onChange = {handleChange}
        margin = "normal"
        className = {classes.TextField}
        autoComplete="off"
        label="SEARCH" />
        </form>
    );
  }
}

export default withStyles(styles)(SeachBox);