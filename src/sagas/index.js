import { fork, take, call, put, takeLatest, delay, select, takeEvery} from 'redux-saga/effects';
import * as taskApis from './../apis/task';

import { showLoading, hideLoading } from './../action/ui';
import {ADD_TASK, DELETE_TASK, FETCH_TASK, FILTER_TASK, UPDATE_TASK, } from './../constants/task'
import  {STATUS_CODE} from './../constants/index';
import {fetchListTaskSuccess,fetchListTaskFaild, addTaskSuccess, addTaskFaild, fetchListTask, updateTaskSuccess, updateTaskFaild, deleteTaskSuccess, deleteTaskFaild,} from './../action/task'
import { hideModal } from '../action/modal';




function* watchFetchListTaskAction() {

while(true){
    const  action =  yield take(FETCH_TASK);
    console.log("action:",action);
    const {payload}=action;
    const {params}=payload;
    console.log("params:",params);
    yield put(showLoading());
    try { 
      console.log("taskAPI:");
      const resp =yield call(()=>taskApis.getList(params));
      console.log("taskAPI:",resp.data);
      console.log("taskAPI:",resp.status);
      const {status,data} = resp;
        if(status===STATUS_CODE.SUCCESS){
        yield put(fetchListTaskSuccess(data));  
        yield put(hideLoading());
      }
    }
    catch{
      yield put(hideLoading());
      yield put(fetchListTaskFaild({error:"loinhe"}));
     
    }
       
      // yield put(fetchListTaskFaild({error:"loi nhe"}));
    }
}
function* filterTaskSaga({payload}){
  yield delay(1500);
  console.log("filterTaskSaga");
 const {params}=payload;
  
  yield put(fetchListTask({q : params}));
  // console.log(payload.keyword)
  // const {keyword}=payload;
  // const list = yield select(state=>state.tast.listTask);
  // const filterTask = list.filter(task=>
  //   task.tiltle
  //   .strim().toLowerCase()
  //   .includes(keyword.strim()
  //   .toLowerCase));
  //   console.log('filtertask:' ,filterTask )
  
  
}
function* addTaskSaga({payload}){
  // yield delay(500);
  console.log("addTaskSaga")
  console.log(payload)
  const {title,description}=payload;
  yield put(showLoading);
  const resp = yield call(taskApis.addTask,{
    title,
    description,
    status: "0"
  })
  
  const {status,data} = resp;
  debugger;
  console.log("resp",resp);
    if(status===STATUS_CODE.CREATED){
      yield put(addTaskSuccess(data));
      yield put(hideModal())
    }else{
       
      yield put(addTaskFaild(data));
      yield put(hideModal())
    }
    yield put(showLoading);
    yield put(hideModal())
  
}
function* updateTaskSaga({payload}){
  // yield delay(500);
  console.log("addTaskSaga")
  debugger;
  console.log(payload)
  const  taskEditing = yield select(state=>state.task.editing)
  const {title,description,status}=payload;
  yield put(showLoading);
  debugger;
  const resp = yield call(taskApis.updateTask,{
    title,
    description,
    status
  },taskEditing.id)
  
  const {data} = resp;
  debugger;
  console.log("resp",resp);
    if(data){
      yield put(updateTaskSuccess(data));
      yield put(hideModal())
    }else{
       
      yield put(updateTaskFaild(data));
      yield put(hideModal())
    }
    yield put(showLoading);
    yield put(hideModal())
  
}

function* deleteTaskSaga({payload}){
  // yield delay(500);
  debugger;
  console.log("deleteTaskSaga")
 
  console.log(payload);
  const {id} = payload;
  debugger;
  yield put(showLoading);
  debugger;
  try { 
    console.log("taskAPI:");
    const resp = yield call(taskApis.deleteTask,id);
    const {status,data} = resp;
    console.log("status:",status);
      if(status===STATUS_CODE.SUCCESS){
      // yield put(fetchListTask());  
      yield put(hideLoading());
    }
  }
  catch{
    yield put(hideLoading());
    yield put(fetchListTaskFaild({error:"loinhe"}));
   
  }
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeLatest(FILTER_TASK,filterTaskSaga);
    yield takeEvery(ADD_TASK,addTaskSaga);
    yield takeEvery(UPDATE_TASK,updateTaskSaga);
    yield takeEvery(DELETE_TASK,deleteTaskSaga);
}
export default rootSaga;