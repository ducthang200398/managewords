import axiosService from '../commons/axiosService'
import {API_ENDPOINT} from '../constants'
import qs from "query-string"
const url = '';

export const getList =(params={})=>{
    
    let queryparams= "";
    console.log("params:",params);
    if (Object.keys(params).length > 0)
        {
            queryparams= `?${qs.stringify(params)}`
        }

    // console.log(`${API_ENDPOINT}${url}${queryparams}`);
    return axiosService.get(`${API_ENDPOINT}${url}${queryparams}`);
}
export const addTask =(data)=>{
    return axiosService.post(`${API_ENDPOINT}${url}`,data);
}
export const updateTask =(data,id)=>{
    debugger;
    return axiosService.put(`${API_ENDPOINT}${url}/${id}`,data);
}
export const deleteTask =(id)=>{
    return axiosService.delete(`${API_ENDPOINT}${url}/${id}`);
}