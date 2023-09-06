import { useContext } from "react"
import { GetContext } from "../contexts/getcontext"

export const useGetContext = ()=>{

    const context = useContext(GetContext)
    if (!context){
        throw Error("it need context")
    }
    return context 
}