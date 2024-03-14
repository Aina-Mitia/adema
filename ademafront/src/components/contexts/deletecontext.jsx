import { createContext,useReducer, useEffect } from "react";

export const DeleteContext = createContext()

export const authReducer = (state,action) => {

    switch(action.type){
        case "dele":
            return {done:action.payload}
        case "notdelete":
            return {done:null}
        default:
            return state
    }
}

export const DeleteContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(authReducer,{
        done:null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('done'))
        if (user){
            dispatch({type:'dele',payload:user})
        }
    },[])
    console.log("DeleteContext state:",state)

    return (
        <DeleteContext.Provider value={{...state, dispatch}}>
            {children}
        </DeleteContext.Provider>
    )
}