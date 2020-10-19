
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Button, Drawer } from '@material-ui/core';
import { ADMIN_ROUTE } from '../../../constants';
import { NavLink } from 'react-router-dom';
import cn from 'classnames'


class SiderBar extends Component {
    toggleDrawer= (value)=>{
       const {onTogleSideBar} = this.props;
    
       if (onTogleSideBar){
        onTogleSideBar(value);
       }
    }
    renderList(){
        const {classes}=this.props;
        let xhtml=null;
        xhtml=
        (<List component="div">
        {  ADMIN_ROUTE.map(item=>{
            return (
                <NavLink to={item.path} exact={item.exact} className={classes.menu} key={item.name}
                activeClassName = {classes.menuLinkItem}>
                <ListItem key={item.name} button>{item.name}</ListItem>
                </NavLink>
          
            )
        })}
        </List>
    );  
        return xhtml;
    }
  render() {
    const { classes,showSidebar} = this.props;
    return (

        <Drawer open={showSidebar}  
            onClose={() => this.toggleDrawer(false)}
            classes={{
            paper: classes.drawerPaper,
            }}
            variant="persistent"
         >
            {this.renderList()}
        </Drawer>

    );
  }
}

export default withStyles(styles)(SiderBar);