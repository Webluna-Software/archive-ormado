import axios from "axios"
import bcrypt from 'bcryptjs-react'
import { deleteCookie, setCookie } from "./cookie"
import { saveUserData } from "./user"

export const {loginApiLink , loginHeaders} = {
    loginApiLink : "https://ormadoapi.webluna.org/api/admin",
    loginHeaders: ""
}

export const loginAction =(email , password , redirectPath , rememberMe)=>{

    axios.get(`${loginApiLink}/user` )
    .then((res)=>{

        const data = res.data.data;        
        const thisUser = data.find((u)=> u.email == email);
        
        if(!thisUser){
            alert("Either the email or password is incorrect!");
        }else{
            bcrypt.compare( password , thisUser.password)
            .then((res)=>{
                if(res){
                    if(rememberMe){
                        saveUserData(thisUser._id);
                    }
                    setCookie('rememberMe' , JSON.stringify(rememberMe))
                    sessionStorage.setItem("userID" , thisUser._id )
                    window.location.replace("/");
                    // alert("You have logged in successfully !");
                }else{
                    alert("Either the email or password is incorrect!");
                }
            })
        }
        
    })
    .catch(()=>{
        alert("Api Failure !!!")
    })

}


export const logOutUser=(redirectPath)=>{
    const logoutConfirm=confirm("Are you sure you want to log out?");
    if (logoutConfirm) {
        deleteCookie('user');
        sessionStorage.removeItem('userID')
        window.location.replace(redirectPath);
    }
}