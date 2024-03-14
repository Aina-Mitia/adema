import React,{ useState } from "react"
import { useGetContext } from './useGetContext';
import { useAuthContext } from './useAuthContext';
import { Link, useNavigate } from 'react-router-dom';

    export const useLogout = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        // const [errorSignup,setErrorSignup] = useState(null)
        const navigate = useNavigate()
        const {user} = useAuthContext() //anamboarana ny protedtion route
    const {entity} = useGetContext()
        const logout = ()=>{
            
                if(entity){
                 localStorage.removeItem('entity')
                    
                    setTimeout(() => {
                        navigate("/")
                      }, 3000); 
                }else if (user){
                    localStorage.removeItem('user')
                    setTimeout(() => {
                        navigate("/")
                      }, 3000);                 }
       
        }

        return {logout}
    }