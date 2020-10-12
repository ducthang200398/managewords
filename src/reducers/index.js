import {combineReducers} from 'redux';
import task from './task' 
import uiReducer from './uiReducer' 


const rootReducer = combineReducers({
    task,uiReducer
});
export default rootReducer;