import { createContext,useReducer,useEffect } from "react";

export const GetContext = createContext()

export const authReducer = (state,action) => {

    switch(action.type){
        case "isGet":
            return {entity:action.payload}
        case "notGet":
            return {entity:null}
        default:
            return state
    }
}

export const GetContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(authReducer,{
        entity:null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('entity'))
        if (user){
            dispatch({type:'isGet',payload:user})
        }
    },[])
    console.log("GetContext state:",state)

    return (
        <GetContext.Provider value={{...state, dispatch}}>
            {children}
        </GetContext.Provider>
    )
}