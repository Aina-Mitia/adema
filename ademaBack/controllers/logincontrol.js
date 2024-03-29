import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { getAdmin, getFournisseur, login, loginF } from "./usercontrol.js";

export const createToken = (_id) => {
    return jwt.sign({_id},"secret-key",{expiresIn:'3d'})
}

export const loginUser = async (req,res) => {
    const {email,password} = req.body

    try {
       const user = await login(email,password)
       
       const token =  createToken(user._id)
       res.status(200).json({email,token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}
export const loginFournisseur = async (req,res) => {
    const {email,password} = req.body

    try {
       const user = await loginF(email,password)
       
       const token =  createToken(user._id)
       res.status(200).json({email,token})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

export const getAppareilFournisseur = (req,res) =>{
    try {
        const {email} = req.body
        const fournisseur = getFournisseur(email)
        res.status(200).json(fournisseur)

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}


//mbola vao eto fotsiny
export const getFournisseurAppareil = (req,res) =>{
    try {
        const {email} = req.body.email
        const admin = getAdmin(email)
        res.status(200).json(admin)

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}


/*import jwt from "jsonwebtoken";
import pool from "../server.js";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt"

export const loginVerification =  (req,res) =>  {
    //const email = req.body.email;
    //const password = req.body.password;
    const sql = "SELECT * FROM user WHERE email=? AND password=?"
    
    pool.query(sql, [req.body.email,req.body.password], (err,result)=>{
        if (err) return res.json({Error:"Error in server"})
        
        if (result.length>0){
            req.session.name= result[0].name
            return res.json({Login:true})
        } else {
            return res.json({Login:false})
        }
            
           

        
        })
}*/