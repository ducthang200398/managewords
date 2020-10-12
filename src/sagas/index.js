import { fork, take, call, put, takeLatest, delay, select} from 'redux-saga/effects';
import * as taskApis from './../apis/task';

import { showLoading, hideLoading } from './../action/ui';
import {FETCH_TASK, FETCH_TASK_FAILD, FETCH_TASK_SUCCESS, FILTER_TASK} from './../constants/task'
import  {STATUS_CODE} from './../constants/index';
import {fetchListTaskSuccess,fetchListTaskFaild} from './../action/task'
// import {getData,getDataDidLogin,updateDataLead,sentInfoLoan, callInfo} from './../apis/task';
import { toast } from 'react-toastify';


function* watchFetchListTaskAction() {

while(true){
    yield take(FETCH_TASK);
    console.log("adad");
    yield put(showLoading());
    yield put(hideLoading());
    const resp =yield call(taskApis.getList);
    const {status,data} = resp;
    if(status===STATUS_CODE.SUCCESS){
      yield put(fetchListTaskSuccess(data));
    }else{
       
      yield put(fetchListTaskFaild(data));
     
    }
   
   
} 
}
function* filterTaskSaga({payload}){
  yield delay(500);
  // console.log(payload.keyword)
  const {keyword}=payload;
  const list = yield select(state=>state.tast.listTask);
  const filterTask = list.filter(task=>
    task.tiltle
    .strim().toLowerCase()
    .includes(keyword.strim()
    .toLowerCase));
    console.log('filtertask:' ,filterTask )
  
  
}


function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeLatest(FILTER_TASK,filterTaskSaga);

}
export default rootSaga;