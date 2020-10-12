import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Box, Grid, Modal } from '@material-ui/core';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Modal open={open} onClose={onClose} >
        <div  className= {classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>
              Tieu de
            </span>
          </div>
        <form  >
          <Box m={2}>
          <Grid    className={classes.TextField} >
            <Grid item md={12}>
            <TextField
            id="standard-name"
            label="TIEU DE"
            className={classes.TextField}
            margin="normal"
          />
          </Grid>
          <Grid   item md ={12}>
          <TextField
            id="standard-multiline-flexible"
            label="Mo ta"
            rowsMax="4"
            className={classes.TextField}
            margin="normal"
          />
          </Grid>
          <Grid item md = {12}  >
          <Box display="flex" flexDirection="row-reverse">
            <Box><Button variant="contained" color="secondary" onClick={onClose}>Cancel</Button></Box>
            <Box mr={1}>
            <Button  variant="contained" color="primary" onClick={onClose}>Save</Button>
            </Box>
            
           
          </Box> 
          </Grid>
          </Grid>
          </Box>
          
        </form>
        </div>
       
      </Modal>
    );
  }
}

export default withStyles(styles)(TaskForm);