import jwt from "jsonwebtoken";
import { signup,signupF } from "./usercontrol.js";

export const createToken = (_id) => {
    return jwt.sign({_id},"secret-key",{expiresIn:'3d'})
}

export const signUpUser = async (req,res) => {
    const {name,lastname, email,password} = req.body

    try {
       const user = await signup(name,lastname,email,password)
       
       const token =  createToken(user._id)
       res.status(200).json({email,token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}
export const signUpFournisseur = async (req,res) => {
    const {name,lastname, email,password} = req.body

    try {
       const user = await signupF(name,lastname,email,password)
       
       const token =  createToken(user._id)
       res.status(200).json({email,token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

/*import pool from "../server.js";

export const registration = async (req,res)=> {
    try{
    const sql = "INSERT INTO user (name, lastname,email,password) VALUES (?,?,?,?)"
    const use = await pool.query(sql,[req.body.name, req.body.lastname, req.body.email, req.body.password])
    res.status(200).json().toString(use)
}catch(error){
        console.log(error)
    }
}*/