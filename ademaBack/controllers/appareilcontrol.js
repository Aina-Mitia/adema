import mongoose from "mongoose";
import Appareil from "../models/appareilmodel.js";


export const createAppareil = async (req,res) => {
    
    
    //const { name, contact, adress, email, nif, stat } = req.body;
    try {
        const appareil = await Appareil.create(req.body)
        res.status(200).json(appareil) 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
    
   /*
const socket = io.connect("http://localhost:5000") 


   socket.on("join_room",(socket)=>{
    console.log(socket.id)
   })
   */
}


export const getAppareils = async (req,res) =>{

    try {
        const appareil = await Appareil.find({})
        res.status(200).json(appareil) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}


export const getSingleAppareil = async (req,res) =>{

    try {
        const {id} = req.params;
        const appareil = await Appareil.findById(id)
        res.status(200).json(appareil) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}


export const updateAppareil = async (req,res) =>{

    try {
        const {id} = req.params;
        const appareil = await Appareil.findByIdAndUpdate(id, req.body)
        if (!appareil){
           return res.status.json({message:"cannot find this one"})
        }
        const updatedAppareil = await Appareil.findById(id);
        res.status(200).json(updatedAppareil) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const deleteAppareil = async (req,res) =>{

    try {
        const {id} = req.params;
        const appareil = await Appareil.findByIdAndDelete(id)
        if (!appareil){
           return res.status(404).json({message:"cannot find this one"})
        }
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:"invalid id"})
        }
        //const updatedAppareil = await Appareil.findById(id);
        res.status(200).json(appareil) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const getApp = async (req,res) =>{

    try {
        const {name} = req.body
        const appareil = await Appareil.find({nom_fournisseur:name})
        res.status(200).json(appareil)

    } catch (error) {
       console.log(error) 
       res.status(500).json({message: error.message})

    }

}
export const getInformationFournisseur = async () => {
    
    try{
    const name = req.body
    const fournisseur = await Appareil.find({nom_fournisseur: name})
    res.status(200).json(fournisseur)

    } catch (error) {
       console.log(error) 
       res.status(500).json({message: error.message})

    }

}


//const express = require("express");

/*import pool from "../server.js"
//import mariadb from "mariadb";


//const users = [];

export const getAppareils = async (req,res) =>{

    try {
       
        //const conn = pool.getConnection();
        const use = await pool.query("SELECT * FROM appareil")
        res.send(use)
    } catch (error) {
        console.log(error);
    }

    
}

export const createAppareil = async (req,res) => {
    //const user = req.body
    //users.push({...user, id: uuid()})
    
    const { name, prix, nombre, nom_fournisseur ,constructeur,modele,category,description } = req.body;
    try {
        //const conn = pool.getConnection();
        const use = await pool.query('INSERT INTO appareil(name,prix,nombre,nom_fournisseur,constructeur,modele,category,description) VALUES(?,?,?,?,?,?,?,?)',[ name, prix, nombre, nom_fournisseur, constructeur,modele,category,description ])
        res.status(200).json().toString(use)
        
    } catch (error) {
        console.log(error);
    }
    
    //res.send("Ajout avec succes")
}

export const getSingleAppareil = async (req,res) => {
    //const singleAppareil = users.filter((user)=>{user.id === req.params.id });
    //res.send(singleAppareil)

    //const {id} = req.params.id;
    try {
       
        //const conn = pool.getConnection();
        const use = await pool.query('SELECT * FROM appareil WHERE id=?',req.params.id)
        res.send(use)
    } catch (error) {
        console.log(error);
    }


}

/* Requête sql pour obtenir les données en jointure: 
    
    SELECT * FROM fournisseur f
    JOIN connexion c ON c.id_fournisseur = f.id
    JOIN appareil a ON c.id_appareil = a.id;
*/

/*export const fournisseurdAppareil = async (req,res) => {
    try{
        const sql = "SELECT * FROM fournisseur f JOIN connexion c ON c.id_fournisseur = f.id JOIN appareil a ON c.id_appareil = a.id WHERE a.name=?";
        const use = await pool.query(sql,[req.body.choice]);
        res.send(use);
    }catch(error){
        console.log(error);
    }
} // a ne pas utiliser

export const deleteAppareil = async (req,res) => {
    //users = users.filter((user) => {user.id !== req.params.id});
    
    //const {id} = req.params.id
    try {
       
        //const conn = pool.getConnection();
        await pool.query('DELETE FROM appareil WHERE id=?',req.params.id)
        //const use = await conn.query("SELECT * FROM appareil")
        //res.send(use)
    } catch (error) {
        console.log(error);
    }
    
    res.send("suppression avec succes")
}

export const updateAppareil = async (req,res) =>{
    try {
        const { name, prix, nombre, nom_fournisseur ,constructeur,modele,category,description } = req.body;
       const use = await pool.query('UPDATE appareil SET name=?,prix=?,nombre=?,nom_fournisseur=?,constructeur=?,modele=?,category=?,description=? WHERE id=?', [ name, prix, nombre, nom_fournisseur ,constructeur,modele,category,description,req.params.id])
        res.status(200).json().toString(use)
    } catch (error) {
        console.log(error);
    }
    
    
}

export const searching = async (req,res)=>{
    try{
        const use = await pool.query('SELECT * FROM appareil WHERE name=?',[req.body.name])
        res.send(use)
    }catch (error) {
        console.log(error);
    }
}*/