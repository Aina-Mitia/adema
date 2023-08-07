import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import  TextField  from "@mui/material/TextField"; //il faut importer
import { Button, Paper, Typography } from "@mui/material";
import  Box  from "@mui/material/Box";
import  Grid  from "@mui/material/Grid";
import {Formik, Form,Field, ErrorMessage} from "formik"


const AddAppareil = () =>{

const navigate = useNavigate();

const [data, setData] = useState({
    name:"",
    prix:"",
    nombre:"",
    nom_fournisseur:"",
    constructeur:"",
    modele:"",
    category:"",
    description:""
});

//const socket = io.connect("http://localhost:5000") 
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/appareil',data)
        .then(res=>{
            console.log(res);
            navigate("/appareil");
        })
        .catch(err=>console.log(err))
    /*
        socket.emit("join_room",data)
    */
}

const [stateButton, setSateButton] = useState(true);

const paperStyle = { padding: "40px 20px", width: 750, margin: "20px auto"}
const btnStyle = { marginTop:10}
const Style = { marginBottom:50}


return(
    <div>
        
    <Grid >
        <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Ajout d'un nouveau materiel</Typography>
        </Grid>
            <Formik >
                <Form noValidate onSubmit={handleSubmit}>
                    
                        <Field as={TextField} fullWidth required
                        style={Style}
                        name="name"
                        id="name"
                        label="Nom"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, name: e.target.value})}}
                        />
                    
                    
                        <Field as={TextField} fullWidth required
                        name="prix"
                        id="prix"
                        label="Prix"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, prix: e.target.value})}}
                        />
                    
                    
                        <Field as={TextField} fullWidth required
                        name="nombre"
                        id="nombre"
                        label="Nombre"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, nombre: e.target.value})}}
                        />
                       
                        <Field as={TextField} fullWidth required
                        name="nom_fournisseur"
                        id="nom_fournisseur"
                        label="Nom du fournisseur"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, nom_fournisseur: e.target.value})}}
                        />
                        
                        <Field as={TextField} fullWidth required
                        name="constructeur"
                        id="constructeur"
                        label="Constructeur"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, constructeur: e.target.value})}}
                        />
                       
                        <Field as={TextField} fullWidth required
                        name="modele"
                        id="modele"
                        label="Modele"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, modele: e.target.value})}}
                        />
                        
                        <Field as={TextField} fullWidth required
                        name="category"
                        id="category"
                        label="Categorie"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, category: e.target.value})}}
                        />
                      
                        <Field as={TextField} fullWidth required
                        name="description"
                        id="description"
                        label="Description"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, description: e.target.value})}}
                        />
                 
                <Button color="primary" style={btnStyle} type="submit" variant="contained"
                disabled={data.name.length==0 ||
                    data.prix.length==0 ||
                    data.nombre.length==0 ||
                    data.nom_fournisseur.length==0 ||
                    data.constructeur.length==0 ||
                    data.modele.length==0 || 
                    data.category.length==0 ||
                    data.description.length==0 }
                    >Valider
                    </Button>
                    
                    </Form>
            </Formik>
            </Paper>
            </Grid>
            
    </div>
)}

export default AddAppareil;