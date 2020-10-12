import {toast} from 'react-toastify';
export const toastError = error =>{
    let message = null;
    console.log(error);
    if (typeof error === 'object' && error.message){
        
        ({message}=error);
        console.log(message);
    }
    if(message !== null && typeof message !== 'undefined' && message !== '')
    {
        toast.error(message)
    }
}