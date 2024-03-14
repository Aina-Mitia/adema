import { createContext,useEffect,useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state,action) => {

    switch(action.type){
        case "admin":
            return {user:action.payload}
        case "logout":
            return {user:null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(authReducer,{
        user:null
    })

    useEffect(()=>{
        const user = JSON.parse(JSON.stringify(localStorage.getItem('user')))
        if (user){
            dispatch({type:'admin',payload:user})
        }
    },[])
    console.log("AuthContext state:",state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}