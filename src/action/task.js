
// import {FETCH_TASK} from './../constants/index'
import {FETCH_TASK, FETCH_TASK_FAILD, FETCH_TASK_SUCCESS, FILTER_TASK,FILTER_TASK_SUCCESS} from './../constants/task'
 
export const fetchListTaskSuccess =(data)=>{
    return {
        type: FETCH_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const fetchListTaskFaild =(error)=>{
    return {
        type: FETCH_TASK_FAILD,
        payload:{
            error
        }
    }
}
export const fetchListTask = ()=>{
    return {
        type: FETCH_TASK
    }
}
// export const fetchListTaskRequest = () =>{
//     return dispatch => {
      
//         dispatch(fetchListTask());
//         taskApis.getList()
//         .then(res=>
//             {   
//                 const {data}= res;
//                 dispatch(fetchListTaskSuccess(data))}
//             )
//         .catch(error=>
//             {   
//             dispatch(fetchListTaskFaild(error))})
       
//     }
// }
export const filterTask = (keyword)=>{
    return {
        type: FILTER_TASK,
        payload:{
            keyword
        }
    }
}
export const filterTaskSucess = (data)=>{
    return {
        type: FILTER_TASK_SUCCESS,
        payload:{
            data
        }
    }
}