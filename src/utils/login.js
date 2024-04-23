import axios from "axios"
import bcrypt from 'bcryptjs-react'
import { setCookie } from "./cookie"
import { saveUserData } from "./user"


const {apiLink , headers} = {
    apiLink : "https://ormadoapi.webluna.org/api/admin",
    headers: ""
}



export const loginAction =async(email , password)=>{

    axios.get(`${apiLink}/user` )
    .then((res)=>{

        const data = res.data.data;        
        const thisUser = data.find((u)=> u.email == email);
        
        bcrypt.compare( password , thisUser.password)
        .then((res)=>{
            if(res){
                saveUserData(thisUser);
            }else{
                throw new Error("Password is wrong !")
            }
        })
    })
    .catch(()=>{
        alert("Api Failure !!!")
    })

}
