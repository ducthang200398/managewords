
// import {FETCH_TASK} from './../constants/index'
import {ADD_TASK, ADD_TASK_FAILD, ADD_TASK_SUCCESS, FETCH_TASK, FETCH_TASK_FAILD, FETCH_TASK_SUCCESS, FILTER_TASK,FILTER_TASK_SUCCESS} from './../constants/task'
 
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
export const fetchListTask = (params={})=>{
    return {
        type: FETCH_TASK,
        payload:{
            params, 
        }
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
export const filterTask = (params)=>{
    return {
        type: FILTER_TASK,
        payload:{
            params
        }
    }
}
// export const filterTaskSucess = (data)=>{
//     return {
//         type: FILTER_TASK_SUCCESS,
//         payload:{
//             data
//         }
//     }
// }

export const addTaskSuccess =(data)=>{
    return {
        type: ADD_TASK_SUCCESS,
        payload:{
           data
        }
    }
}
export const addTaskFaild =(error)=>{
    return {
        type: ADD_TASK_FAILD,
        payload:{
            error
        }
    }
}
export const addTask = (data)=>{
    const {title,description} =data;
    console.log(data);
    return {
        type: ADD_TASK,
        payload:{
            title,
            description
        }
    }
}