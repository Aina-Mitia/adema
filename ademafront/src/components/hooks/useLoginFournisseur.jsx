import { useState } from "react"
import axios from 'axios'
import { useGetContext } from "./useGetContext"

    export const useLoginF = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        const [errorLogin,setErrorLogin] = useState(null)
        const {dispatch} = useGetContext()

      
        const loginFournisseur = async (data)=>{
            
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

            
        })*/try{
            const response = await axios.post("http://localhost:5000/login/fournisseur",data)
            //tsy ilaina ngamba
            //const json = await response.json()
            // on post d'abord email pour recuperer objet founisseur 
           // console.log(response.status);
            /*if (!response.ok){
                setErrorLogin("error")
                console.log("no");
                
            }*/
            if (response.status === 200){
                 localStorage.setItem('entity',JSON.stringify(response))
                 dispatch({type:"isGet",payload:response})
                //  console.log(response.data.token)
            } }catch(error){
                
                console.log(error)
           } 
        }
        return {loginFournisseur}
    }