import { useState } from "react"
import axios from 'axios'
import { useGetContext } from "./useGetContext"
import { useAuthContext } from "./useAuthContext"

    export const useEntity = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        const [errorLogin,setErrorLogin] = useState(null)
        const {dispatch} = useGetContext()
        const {user} = useAuthContext()

        const getEntity = async (data)=>{
            
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
            const response = await axios.post("http://localhost:5000/fournisseur/appareil",data)
            
            //const json = await response.json()
            // on post d'abord email pour recuperer objet founisseur 
           // console.log(response.status);
            /*if (!response.ok){
                setErrorLogin("error")
                console.log("no");
                
            }*/
             if (response.status === 200){
                  dispatch({type:"isGet",payload:response})
             } 
            // if (user.email===response.email){
            //     console.log('nice')
            // } else {
            //     console.log('no nice');
            // }
            
        }

        const getEntityAdmin = async (data)=>{
            
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
            const response = await axios.post("http://localhost:5000/admin",data)
            
            //const json = await response.json()
            // on post d'abord email pour recuperer objet founisseur 
           // console.log(response.status);
            /*if (!response.ok){
                setErrorLogin("error")
                console.log("no");
                
            }*/
            if (response.status === 200){
                 dispatch({type:"isGet",payload:response})
            } 
            // if (user.email===response.email){
            //     console.log('nice')
            // } else {
            //     console.log('no nice');
            // }
        }

        return {getEntity,getEntityAdmin,errorLogin}
    }