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