import Fournisseur from "../models/fournisseurmodel.js";


export const createFournisseur = async (req,res) => {
    
    
    //const { name, contact, adress, email, nif, stat } = req.body;
    try {
        const fournisseur = await Fournisseur.create(req.body)
        res.status(200).json(fournisseur) 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
    
   
}


export const getFournisseurs = async (req,res) =>{

    try {
        const fournisseur = await Fournisseur.find({})
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const getSingleFournisseur = async (req,res) =>{

    try {
        const {id} = req.params;
        const fournisseur = await Fournisseur.findById(id)
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const updateFournisseur = async (req,res) =>{

    try {
        const {id} = req.params;
        const fournisseur = await Fournisseur.findByIdAndUpdate(id,req.body)
        if (!fournisseur){
           return res.status(404).json({message:"cannot find this one"})
        }
        const updatedFournisseur = await Fournisseur.findById(id);
        res.status(200).json(updatedFournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const deleteFournisseur = async (req,res) =>{

    try {
        const {id} = req.params;
         const fournisseur = await Fournisseur.findByIdAndDelete(id)
       /* if (!fournisseur){
           return res.status(404).json({message:"cannot find this one"})
        }
        //const updatedFournisseur = await Fournisseur.findById(id);
        res.status(200).json(fournisseur) */
        res.status(200).json(fournisseur)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}



//const express = require("express"); 

/*import pool from "../server.js"
import mariadb from "mariadb";


//const users = [];

export const getFournisseurs = async (req,res) =>{

    try {
       
        //const conn = pool.getConnection();
        const use = await pool.query("SELECT * FROM fournisseur")
        res.send(use)
    } catch (error) {
        console.log(error);
    }

    
}

export const createFournisseur = async (req,res) => {
    //const user = req.body
    //users.push({...user, id: uuid()})
    
    const { name, contact, adress, email, nif, stat } = req.body;
    try {
        //const conn = pool.getConnection();
        const use = await pool.query('INSERT INTO fournisseur(name,contact,adress,email,nif,stat) VALUES(?,?,?,?,?,?)',[ name, contact, adress, email, nif, stat ])
        res.status(200).json().toString(use)
        
    } catch (error) {
        console.log(error);
    }
    
    //res.send("Ajout avec succes")
}

export const getSingleFournisseur = async (req,res) => {
    //const singleAppareil = users.filter((user)=>{user.id === req.params.id });
    //res.send(singleAppareil)

    //const {id} = req.params.id;
    try {
       
        //const conn = pool.getConnection();
        const use = await pool.query('SELECT * FROM fournisseur WHERE id=?',req.params.id)
        res.send(use)
    } catch (error) {
        console.log(error);
    }


}

export const deleteFournisseur = async (req,res) => {
    //users = users.filter((user) => {user.id !== req.params.id});
    
    //const {id} = req.params.id;
    try {
       
        //const conn = pool.getConnection();
        await pool.query('DELETE FROM fournisseur WHERE id=?',req.params.id)
        //const use = await conn.query("SELECT * FROM appareil")
        //res.send(use)
    } catch (error) {
        console.log(error);
    }
    
    res.send("suppression avec succes")
}

export const updateFournisseur = async (req,res) =>{
    try {
        const { name, contact, adress,  email, nif, stat } = req.body;
       const use = await pool.query('UPDATE fournisseur SET name=?,contact=?,adress=?,email=?,nif=?,stat=? WHERE id=?', [ name, contact, adress,  email, nif, stat,req.params.id])
        res.status(200).json().toString(use)
    } catch (error) {
        console.log(error);
    }
    
    
}

export const searchingFournisseur = async (req,res) => {
    try{
        const sql = "SELECT * FROM fournisseur WHERE name=?"
        const use = await pool.query(sql,[req.body.name]);
        res.send(use);
    }catch(error){
        console.log(error);
    }

}*/