import { getCookie, setCookie } from "./cookie"


const validityTime = 1 ; //days

export const saveUserData=(data)=>{
    setCookie('user' , JSON.stringify(data) , validityTime)
}


export const validateUser=()=>{
    const data = getCookie('user');
    if(data){
        return JSON.parse(data);
    }else{
        return null;
    }
}