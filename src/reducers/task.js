import { toastError } from '../helper/toastHelper';
import * as taskConstants from './../constants/task' 
const  initialState = {
    listTask : [],
    editing  : null,
};

const reducer =  (state = initialState,action)=>{
    switch(action.type){
        case taskConstants.FETCH_TASK:
            return {
                ...state,
                listTask:[]
            }
        case taskConstants.FETCH_TASK_SUCCESS:
            return {
                ...state,
                listTask:action.payload.data
            }
        case taskConstants.FETCH_TASK_FAILD:
            var {error}= action.payload;
            toastError(error);
            return {
                ...state,
                listTask:[]

            }
        case taskConstants.ADD_TASK:
            var {data}=action.payload
            return {
                ...state,
                editing: null
            }
        case taskConstants.ADD_TASK_SUCCESS:
            var {data}=action.payload
            return {
                ...state,
                listTask: state.listTask.concat([data])

            }
        case taskConstants.ADD_TASK_FAILD:
            var {error}=action.payload
            // const {error}= action.payload;
            toastError(error);
            return {
                
                ...state,

            }
        case taskConstants.FETCH_TASK_EDITING:
            var {task}=action.payload
            // const {error}= action.payload;
            // toastError(error);
            return {
                ...state,
                editing: task,
            }
        default:
            return state;
    }
}
export default reducer;