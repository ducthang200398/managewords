import { toastError } from '../helper/toastHelper';
import * as taskConstants from './../constants/task' 
const  initialState = {
    listTask : []
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
            const {error}= action.payload;
            toastError(error);
            return {
                ...state,
                listTask:[]

            }
        case taskConstants.FILTER_TASK:
            // const {error}= action.payload;
            // toastError(error);
            return {
                ...state,
             

            }
        default:
            return state;
    }
}
export default reducer;