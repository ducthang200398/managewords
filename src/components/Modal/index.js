import CloseIcon from  '@material-ui/icons/Clear';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import styles from './styles';
import { connect } from 'react-redux';
import * as modalActions from  './../../action/modal'
import { bindActionCreators, compose } from 'redux';
import { Modal } from '@material-ui/core';

class ModalComponent extends Component {
  render() {
    const { open,classes,component,modalActionsCreator,title} = this.props;
    const {hideModal}=modalActionsCreator;
    console.log(classes)
    // const {modal,header,icon}=classes;
    return (
        <Modal open={open}  >
        <div  className= {classes.modal}>
          <div className={classes.header} >
            <span >
            {title}
            </span>
            <CloseIcon className={classes.icon} onClick={hideModal} />

          </div>
            <Box m={2}>
                {component}
            </Box>
        </div>

        </Modal>
    );
  }
}

const mapStatetoProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title:state.modal.title,
});
const mapDispatchtoProps = dispatch =>{
  return {
    modalActionsCreator: bindActionCreators(modalActions,dispatch)
  }
};  
const withConnect = connect(
    mapStatetoProps,mapDispatchtoProps
)

export default compose(
    withStyles(styles),
    withConnect,
)
(ModalComponent);