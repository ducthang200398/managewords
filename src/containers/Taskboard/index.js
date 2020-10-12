import Button from '@material-ui/core/Button';
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
import { Search } from '@material-ui/icons';
import SeachBox from '../../components/SeachBox';
// import {fetchListTask} from './../../action/task'


const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'With my friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: '',
    status: 1,
  },

];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount(){
    const {taskActionsCreator} = this.props;
    const {fetchListTask}= taskActionsCreator;
    console.log("hehe");
    fetchListTask();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };
  renderSeachBox() {
    let xhtml = null;
    xhtml =(<SeachBox />)
    return xhtml;
  }

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} />
          );
        })}
      </Grid>
      </div>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }
  showToast(){
    toast.success("thanh cong")
  }

  render() {
    const { classes } = this.props;
    return (
      <div  className={classes.taskBoard} id="1">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />Thêm mới công việc
        </Button>
        <Box ml="1">
          <Button variant="contained" color ="primary" onClick={this.showToast}>
            hien thi thong bao
          </Button>
        </Box>
        {this.renderSeachBox()}
        {this.renderBoard()}
        {this.renderForm()}
        
      </div>
    );
  }
}
const mapStatetoProps = null;
const mapDispatchtoProps = dispatch=>{
  return {
    taskActionsCreator: bindActionCreators(taskActions,dispatch)
  }
};  


TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreator:PropTypes.shape({
    fetchListTask:PropTypes.func,
  })
};

export default withStyles(styles)(connect(mapStatetoProps,mapDispatchtoProps)(TaskBoard));