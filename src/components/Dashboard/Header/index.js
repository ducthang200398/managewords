import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';


const menuId = 'primary-search-account-menu';
// const mobileMenuId = 'primary-search-account-menu-mobile';
class Header extends Component {
    constructor(props){
        super();
        this.state={
            anchorEl : null,
            isMenuOpen:false,
        }
    }
    handleMenuClose   = () => {
        this.setState({
            anchorEl:null
        })
    };
    handleProfileMenuOpen= (event) => {

        console.log("handleMenuClose ")
        this.setState({
            anchorEl:event.currentTarget
        })
    };
    renderMenu =()=>{
        const{anchorEl}=this.state;
        const isMenuOpen = Boolean(anchorEl);
        return(
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              id={menuId}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
          );
    } 
    handleTogleSideBar =()=>{
      const {showSidebar,onTogleSideBar}=this.props
  
      if(onTogleSideBar){
        onTogleSideBar(!showSidebar)
      }
    }
    render() {
      const { classes,name} = this.props;
      return (
        <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleTogleSideBar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
             {name}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMenu()}
      </div>
      );
    }
  }
  
  export default withStyles(styles)(Header);