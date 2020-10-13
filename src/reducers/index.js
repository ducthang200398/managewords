import {combineReducers} from 'redux';
import task from './task' 
import uiReducer from './uiReducer' ;
import modal from './modal' 
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    task,uiReducer,modal,
    form:formReducer,
});
export default rootReducer;