import Appareil from "../models/appareilmodel.js";
import bcrypt from "bcrypt"
import validator from "validator";
import Admin from "../models/admin.js";

export const login = async (email, password) =>{
    const admin = await Admin.findOne({email})

    if(!email || !password){
        throw Error("champs non complet")
    }

    if (!admin){
        throw Error("email incorrect")
    }

    const match = await bcrypt.compare(password, admin.password)
    if (!match){
        throw Error("mot de passe incorrect")
    }
    return admin
}


export const signup = async (firstName,lastName, email, password) =>{  //mbola mila amboarina

    if(!email || !password){
        throw Error("champs non complet")
    }
    if(!validator.isEmail(email)){
        throw Error("email non valide")
    }
   /* if(!validator.isStrongPassword(password)){
        throw Error("mot de passe trop court")
    }*/

    const exist = await Admin.findOne({email})

    if (exist) {
        throw Error("email deja utilise")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    
    const appareil = await Admin.create({firstName,lastName, email, password: hash})

    return appareil

}
/*import pool from "../server.js"

export const getSingleUser = async (req,res) => {
    //const singleAppareil = users.filter((user)=>{user.id === req.params.id });
    //res.send(singleAppareil)

    //const {id} = req.params.id;
    try {
       
        //const conn = pool.getConnection();
        const use = await pool.query('SELECT * FROM user WHERE id=?',req.params.id)
        res.send(use)
    } catch (error) {
        console.log(error);
    }


}

export const updateUser = async (req,res) =>{
    try {
        const { name, lastname,   email,  password } = req.body;
       const use = await pool.query('UPDATE user SET name=?,lastname=?,email=?,password=? WHERE id=?', [ name, lastname,   email,  password,req.params.id])
        res.status(200).json().toString(use)
    } catch (error) {
        console.log(error);
    }
    
    

}*/