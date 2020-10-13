import axiosService from '../commons/axiosService'
import {API_ENDPOINT} from '../constants'

const url = '/users';

export const getList =()=>{
    // console.log(axiosService.get(`${API_ENDPOINT}${url}`));
    return axiosService.get(`${API_ENDPOINT}${url}`);
}
export const addTask =(data)=>{
    // console.log(axiosService.get(`${API_ENDPOINT}${url}`));
    return axiosService.post(`${API_ENDPOINT}${url}`,data);
}