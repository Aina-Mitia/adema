import { useContext } from "react"
import { DeleteContext } from "../contexts/deletecontext"

export const useDeleteContext = ()=>{

    const context = useContext(DeleteContext)
    if (!context){
        throw Error("it need context")
    }
    return context 
}