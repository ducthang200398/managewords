const validate = (values)=>{
    const errors  = {};
    const {title,description}= values;
   
    if(!title)
    {errors.title = "vui nhap tieu de";}
    
    else if(title.trim().length <5) {
        // console.log( "ok");
        errors.title = "vui long nhap hon 5 ki tu";
    }
    return errors;
}
export default validate;