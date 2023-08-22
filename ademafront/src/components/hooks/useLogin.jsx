import { useState } from "react"
import axios from 'axios'
import { useAuthContext } from "./useAuthContext"

    export const useLogin = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        const [errorLogin,setErrorLogin] = useState(null)
        const {dispatch} = useAuthContext()

        const login = async (data)=>{
            
            //const [value,setValue] = useState({email,password})
            /*axios.post("http://localhost:5000/login/user",data).then((res,error)=>{
            if (res.ok){
                //console.log(res.data._id)
                // return localStorage.setItem('user ${res.data._id}')
                console.log("ok");
                localStorage.setItem('admin',res)

                dispatch({type:"admin",payload:res.data})

                
            } else if (!res.ok){
                console.log("noone");
                setErrorLogin(error)
            }

            
        })*/
            const response = await axios.post("http://localhost:5000/login/user",data)
            //const json = await response.json()
            console.log(response.status);
            /*if (!response.ok){
                setErrorLogin("error")
                console.log("no");
                
            }*/
            if (response.status === 200){
                 localStorage.setItem('admin',JSON.stringify(response))
                 dispatch({type:"admin",payload:response})
            } 
        }

        return {login,errorLogin}
    }