import { useState } from "react"

    export const useLogout = () =>{

    /* const logout = () =>{
            const local = localStorage.removeItem('user')
        }*/

        // const [errorSignup,setErrorSignup] = useState(null)

        const logout = ()=>{
            
            
                return localStorage.setItem('user')
           
       
        }

        return {logout}
    }