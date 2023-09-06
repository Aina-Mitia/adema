import { createContext,useReducer } from "react";

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

    console.log("GetContext state:",state)

    return (
        <GetContext.Provider value={{...state, dispatch}}>
            {children}
        </GetContext.Provider>
    )
}