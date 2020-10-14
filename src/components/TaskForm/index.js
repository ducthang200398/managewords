import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Box, Grid, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from  './../../action/modal';
import * as taskActions from  './../../action/task';
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../FormHelper/TextField';
import validate from './validate'
import renderSelectField from '../FormHelper/SelectField';
class TaskForm extends Component {

  handleSumitForm = (data)=>{
    const {task} = this.props;
    const {taskActionsCreator}= this.props;
    const {addTask,updateTask}= taskActionsCreator;
    const {title, description,status}=data;
    if(task&&task.id){
      updateTask({title, description,status})
    }
    else {
      addTask({title, description});
    }
    

  }
  required = (value)=>{
    let error = 'Vui long nhap tieu de';
    if(value !== null && typeof value !== 'undefined' && value.trim() !== ''){
      error=null
    }
    return error;
  }
  minlength = (value)=>{
    let error = null;
    if(value.length<5){
      error = "Nhap it nhat 5 ki tu";
    }
    return error;
  }
  renderStatusSelection()
  {
    let xhtml=null
    const {task,classes}= this.props;
    if(task && task.id )
    {
      xhtml=(<Field name="status"
        id="status"
        component={renderSelectField}
        label="Trang Thai"  
        className={classes.select}
         >
          <MenuItem value="0">READY</MenuItem>
          <MenuItem value="1">INCOMPLETE</MenuItem>
          <MenuItem value="2">COMPLETE</MenuItem>
        </Field>)

    }
    return xhtml
  }
  render() {
    const {classes,modalActionsCreator,handleSubmit,submitting,invalid,editing} = this.props;
    console.log('submitting: ',submitting);
    const {hideModal}= modalActionsCreator;
    return (
     
        <form onSubmit={handleSubmit(this.handleSumitForm)}>
          <Grid className={classes.TextField}  >
            <Grid item md={12}>

          
            {/* <TextField
            id="standard-name"
            label="TIEU DE"
            className={classes.TextField}
            margin="normal"
          /> */}
            <Field name="title"
             component={renderTextField}
              label="Tieu De"  
              className={classes.TextField} 
              margin="normal"
              value={editing ? editing.title: "" } />
          </Grid>
          <Grid   item md ={12}>
          {/* <TextField
            id="standard-multiline-flexible"
            label="Mo ta"
            rowsMax="4"
            className={classes.TextField}
            margin="normal"
          /> */}
           <Field name="description" 
           component={renderTextField}
            label="Mo Ta"
            multiline 
            validate ={[this.required,this.minlength]} 
            className={classes.TextField} 
            margin="normal" 
            value={editing ? editing.description: "" }
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md = {12}  >
          <Box display="flex" flexDirection="row-reverse">
            <Box><Button variant="contained" color="secondary" onClick={hideModal}>Cancel</Button></Box>
            <Box mr={1}>
            <Button disabled ={invalid} variant="contained" color="primary" type="submit">Save</Button>
            </Box>
          </Box> 
          </Grid>
          </Grid>   
          </form>
    );
  }
}
const mapStatetoProps = state => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title:state.modal.title,
  task:state.task.editing,
  initialValues: {
    title: state.task.editing ? state.task.editing.title: "",
    description:state.task.editing ? state.task.editing.description: "",
    status:state.task.editing ? state.task.editing.status: "",
  }
});
const mapDispatchtoProps = dispatch =>{
return {
  taskActionsCreator: bindActionCreators(taskActions,dispatch),
  modalActionsCreator: bindActionCreators(modalActions,dispatch),

}
};  
const withConnect = connect(
  mapStatetoProps,mapDispatchtoProps
)
const FORM_NAME = "TASK_MANAMENT"
const withReduxForm = reduxForm({
  form : FORM_NAME,
  validate
}
  
)
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)
(TaskForm);