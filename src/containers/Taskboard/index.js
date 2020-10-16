
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../action/task'
import { toast } from 'react-toastify';
import { Box } from '@material-ui/core';
import SeachBox from '../../components/SeachBox';
import * as modalActions from './../../action/modal'
// import {fetchListTask} from './../../action/task'
import Button from '@material-ui/core/Button';
// import classes from '*.module.css';


// const listTask = [
//   {
//     id: 1,
//     title: 'Read book',
//     description: 'Read material ui book',
//     status: 0,
//   },
//   {
//     id: 2,
//     title: 'Play football',
//     description: 'With my friend',
//     status: 2,
//   },
//   {
//     id: 3,
//     title: 'Play game',
//     description: '',
//     status: 1,
//   },

// ];

class TaskBoard extends Component {
  componentDidMount(){
    const {taskActionsCreator} = this.props;
    const {fetchListTask}= taskActionsCreator;
    // console.log("hehe");
    fetchListTask();
  }
  openForm = () => {
    const {modalActionsCreator}=this.props;
    const {taskActionsCreator} = this.props;
    const {fetchTaskEditing}= taskActionsCreator;
    const {showModal,changeModalConTent,changeModalTitle}= modalActionsCreator;
    fetchTaskEditing(null);
    showModal();
    changeModalTitle("Add New Task");
    changeModalConTent(<TaskForm />);

  };
  handleFilter = (e)=>{
    const {value}=e.target;
    const {taskActionsCreator} = this.props;

    const {filterTask}= taskActionsCreator;
    filterTask(value);
  }
  renderSeachBox() {
    let xhtml = null;
    xhtml =(<SeachBox handleChange = {this.handleFilter}/>)
    return xhtml;
  }
  handleEdit = (task) =>{
    const {taskActionsCreator} = this.props;
    const {modalActionsCreator}=this.props;
    const {fetchTaskEditing}= taskActionsCreator;
    const {showModal,changeModalConTent,changeModalTitle,}= modalActionsCreator;
    fetchTaskEditing(task);
    showModal();
    changeModalTitle("Edit Old Task");
    changeModalConTent(<TaskForm />);
  }
  onClickDelete = (task) =>{
    const {classes} = this.props;
    const {modalActionsCreator}=this.props;
    const {showModal,changeModalConTent,changeModalTitle,hideModal}= modalActionsCreator;
    showModal();
    changeModalTitle("Delete Task");
    changeModalConTent(
    <div >
       <div>
         Are you sure to delete the task  <span className={classes.comfirm}>{task.title}?</span>
         </div> 
   
    <Box display="flex" flexDirection="row-reverse" mt={2}>
      <Box ml={1}><Button variant="contained"  onClick={hideModal}>Cancel</Button></Box>
      <Box>
      <Button variant="contained" color="primary" onClick={()=>this.handleDeleteTask(task)}>
        Agree
      </Button>
      </Box>
     
    </Box>
    </div>
      );
  }
  handleDeleteTask(task){
    const {id} =task;
    console.log("id:", id);
    // debugger;
    const {taskActionsCreator} = this.props;
    const {deleteTask}= taskActionsCreator;
    console.log("deleteTask:",deleteTask);
    deleteTask(id);
    // console.log("this",this);
  }
  renderBoard = () => {
    let xhtml = null;
    const listTask = this.props.listTask;
    // console.log("listTask:",listTask);
    // console.log()
    xhtml = (
      <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} handleEdit={this.handleEdit} onClickDelete={this.onClickDelete} />
          );
        })}
      </Grid>
      </div>
    );
    return xhtml;
  }

  showToast(){
    toast.success("thanh cong")
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{margin:"8px"}}>
        <Box display="flex" flexDirection="row" mt={2}>
        <Box mr={2}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />Thêm mới công việc
        </Button>
        </Box>
        <Box>
          <Button variant="contained" color ="primary" onClick={this.showToast}>
            LOAD INFOMATION
          </Button>
        </Box>
        </Box>
        {this.renderSeachBox()}
        {this.renderBoard()}
  
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    listTask: state.task.listTask
  };
};
const mapDispatchtoProps = dispatch=>{
  return {
    taskActionsCreator: bindActionCreators(taskActions,dispatch),
    modalActionsCreator: bindActionCreators(modalActions,dispatch)
  }
};  


TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreator:PropTypes.shape({
    fetchListTask:PropTypes.func,
  }),
  modalActionsCreator:PropTypes.shape({
    showModal:PropTypes.func,
    hideModal:PropTypes.func,
    changeModalTitle:PropTypes.func,
    changeModalContent:PropTypes.func,
  })
};

export default withStyles(styles)(connect(mapStatetoProps,mapDispatchtoProps)(TaskBoard));
