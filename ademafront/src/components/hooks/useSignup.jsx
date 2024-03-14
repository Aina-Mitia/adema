import { useState } from "react"
import axios from 'axios'
import { useAuthContext } from "./useAuthContext"


    export const useSignup = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        const [errorSignup,setErrorSignup] = useState(null)
        const {dispatch} = useAuthContext()

        const signup = async (data)=>{
            
           // const [value,setValue] = useState(null)
           /*axios.post("http://localhost:5000/signup",data).then((res,error)=>{
            if (res.ok){
                return localStorage.setItem('user')
            } else if (!res.ok){
                setErrorSignup(error)
            }
            console.log(res,error);
            
        })*/
        try{
            const response = await axios.post("http://localhost:5000/signup",data)
            //const json = await response.json()
            /*if (!response.ok){
                setErrorSignup("error")
            }*/
            if (response.status === 200){
                 localStorage.setItem('user',JSON.stringify(response))
                 dispatch({type:"admin",payload:response})
            }
         
        }catch(error){
            console.log(error)
        }
    } 
    
        return {signup}
    }