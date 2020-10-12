
import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard/index.js';
import theme from './../../commons/Theme';
import {Provider} from 'react-redux'
import configureStore from '../../redux/configureStore'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import GloblaLoading from './../../components/GlobalLoading'
const store = configureStore();

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Taskboard />
        <GloblaLoading />
        <ToastContainer />
      </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);