import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
// import Taskboard from '../Taskboard/index.js';
import theme from './../../commons/Theme';
import {Provider} from 'react-redux'
import configureStore from '../../redux/configureStore'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import GloblaLoading from './../../components/GlobalLoading'
import Modal from '../../components/Modal/index.js';
import { ADMIN_ROUTE, ROUTE } from '../../constants/index.js';
import { CssBaseline } from '@material-ui/core';
import AdminLayoutRoutes from '../../commons/Layout/AdminLayoutRoutes/index.js';
import LayoutRoutes from '../../commons/Layout/LayoutRoutes/index.js';
// import AdminHomePage from '../AdminHomePage/index.js';
const store = configureStore();


class App extends Component {
  renderAdminRoutes(){
    let xhtml = null;
    console.log("AdminLayoutRoutes");
    // debugger;
    xhtml = ADMIN_ROUTE.map((route)=>{
      return (
        <AdminLayoutRoutes 
          key={route.path}
          path = {route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      )
    })
    return xhtml;
  }
  renderRoutes(){
    let xhtml = null;
    console.log("AdminLayoutRoutes");
    // debugger;
    xhtml = ROUTE.map((route)=>{
      return (
        <LayoutRoutes 
          key={route.path}
          path = {route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      )
    })
    return xhtml;
  }
  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Switch>
          {this.renderAdminRoutes()}
          {this.renderRoutes()}
        </Switch>
        <GloblaLoading /> 
        <Modal /> 
        <ToastContainer /> 
      </ThemeProvider>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);