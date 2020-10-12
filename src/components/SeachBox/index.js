
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import { TextField } from '@material-ui/core';
import { Label } from '@material-ui/icons';
// import TaskItem from '../TaskItem';

class SeachBox extends Component {
  render() {
    const { classes,onHandleChange} = this.props;
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
        onChange = {onHandleChange}
        margin = "normal"
        className = {classes.TextField}
        autoComplete="off"
        label="SEARCH" />
        </form>
    );
  }
}

export default withStyles(styles)(SeachBox);