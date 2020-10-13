import { fork, take, call, put, takeLatest, delay, select, takeEvery} from 'redux-saga/effects';
import * as taskApis from './../apis/task';

import { showLoading, hideLoading } from './../action/ui';
import {ADD_TASK, FETCH_TASK, FILTER_TASK, } from './../constants/task'
import  {STATUS_CODE} from './../constants/index';
import {fetchListTaskSuccess,fetchListTaskFaild, addTaskSuccess, addTaskFaild,} from './../action/task'
import { hideModal } from '../action/modal';




function* watchFetchListTaskAction() {

while(true){
    yield take(FETCH_TASK);
    yield put(showLoading());
    try {
      const resp =yield call(taskApis.getList);
      console.log("taskAPI:",resp.data);
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
  yield delay(500);
  console.log(payload.keyword)
  const {keyword}=payload;
  const list = yield select(state=>state.tast.listTask);
  const filterTask = list.filter(task=>
    task.tiltle
    .strim().toLowerCase()
    .includes(keyword.strim()
    .toLowerCase));
    console.log('filtertask:' ,filterTask )
  
  
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


function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeLatest(FILTER_TASK,filterTaskSaga);
    yield takeEvery(ADD_TASK,addTaskSaga);


}
export default rootSaga;