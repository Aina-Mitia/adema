import { useContext } from "react"
import { AuthContext } from "../contexts/authcontext"

export const useAuthContext = ()=>{

    const context = useContext(AuthContext)
    if (!context){
        throw Error("it need context")
    }
    return context 
}