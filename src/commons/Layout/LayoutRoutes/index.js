
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import {Route} from 'react-router-dom';
import styles from './styles';
import Dashboard from '../../../components/Dashboard';

// import Dashboard from '';
// import { TextField } from '@material-ui/core';


class AdminLayoutRoutes extends Component {
  render() 
  {
    const {component:YourComponent,name,...remainRrops} = this.props;;
    return (
        <Route 
            {...remainRrops}
            render={routeProps=>
            
            {
                return (<YourComponent {...routeProps}/>)
            }   
            }
        />
    )
  }
}

export default withStyles(styles)(AdminLayoutRoutes);