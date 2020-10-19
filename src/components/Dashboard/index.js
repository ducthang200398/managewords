
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles';
import Header from './Header';
import SiderBar from './SiderBar';
import { connect } from 'react-redux'
// import { Dashboard } from '@material-ui/icons';
// import { TextField } from '@material-ui/core';
import * as uiActions from './../../action/ui'
import { bindActionCreators, compose } from 'redux';
import cn from 'classnames'

class Dashboard extends Component {
  onTogleSideBar = value =>{
    const {uiActionsCreator} = this.props;
    const {showSidebar,hideSidebar}=uiActionsCreator;
    if(value){
      showSidebar();
    }
    else
    {
      hideSidebar();
    }
  }
  render() {
    const { classes,name,children,showSidebar,onTogleSideBar} = this.props;
    console.log(this.onTogleSideBar);
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}  showSidebar ={showSidebar}
          onTogleSideBar={this.onTogleSideBar}
        />
        <div className={classes.wrapper}>
          <SiderBar showSidebar={showSidebar}
           onTogleSideBar={this.onTogleSideBar}
          />
          <div
            className={cn(classes.wrapperContent,{[classes.shiftLeft]:showSidebar===false})
            }
          >
            {children}
          </div>
        </div>
      </div>
    )}
}
const mapStatetoProps = state => {
  return {
    showSidebar: state.uiReducer.showSidebar
  };
};
const mapDispatchtoProps = dispatch=>{
  return {
    uiActionsCreator: bindActionCreators(uiActions,dispatch),
    // modalActionsCreator: bindActionCreators(modalActions,dispatch)
  }
};  
const withConnect =connect(
  mapStatetoProps,
  mapDispatchtoProps
)


export default compose(
  withConnect, 
  withStyles(styles),
  )
(Dashboard);
