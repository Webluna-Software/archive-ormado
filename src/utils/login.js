import axios from "axios"
import bcrypt from 'bcryptjs-react'
import { deleteCookie } from "./cookie"
import { saveUserData } from "./user"


export const {loginApiLink , loginHeaders} = {
    loginApiLink : "https://ormadoapi.webluna.org/api/admin",
    loginHeaders: ""
}



export const loginAction =(email , password , redirectPath)=>{

    axios.get(`${loginApiLink}/user` )
    .then((res)=>{

        const data = res.data.data;        
        const thisUser = data.find((u)=> u.email == email);
        
        if(!thisUser){
            alert("Email or Password is wrong !");
        }else{
            bcrypt.compare( password , thisUser.password)
            .then((res)=>{
                if(res){
                    saveUserData(thisUser);
                    alert("You have logged in successfully !");
                    window.location.replace(redirectPath);
                }else{
                    alert("Email or Password is wrong !");
                }
            })
        }
        
    })
    .catch(()=>{
        alert("Api Failure !!!")
    })

}


export const logOutUser=(redirectPath)=>{
    deleteCookie('user');
    window.location.replace(redirectPath);
}