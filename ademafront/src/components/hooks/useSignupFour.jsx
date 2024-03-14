import { useState } from "react"
import axios from 'axios'
import { useAuthContext } from "./useAuthContext"
import { useGetContext } from "./useGetContext"

    export const useSignupFour = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        const [errorSignup,setErrorSignup] = useState(null)
        const {dispatch} = useGetContext()

 
    const signupFour = async (data)=>{
            
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
         const response = await axios.post("http://localhost:5000/signupFournisseur",data)
         //const json = await response.json()
         /*if (!response.ok){
             setErrorSignup("error")
         }*/
         if (response.status === 200){
              localStorage.setItem('entity',JSON.stringify(response))
              dispatch({type:"isGet",payload:response})
         }
      
     }catch(error){
         console.log(error)
     }
 } 
        return {signupFour}
    }