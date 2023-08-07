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