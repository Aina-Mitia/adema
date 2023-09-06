import React, { useEffect } from "react";
import { useState } from "react";
import {  useParams, Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from '../navbar/navbar'
import  TextField  from "@mui/material/TextField"; //il faut importer
import { Button, Paper,Typography } from "@mui/material";
import  Box  from "@mui/material/Box";
import  Grid  from "@mui/material/Grid";
import {Formik, Form,Field, ErrorMessage} from "formik"
import io from "socket.io-client";





const UpdateAppareil = (props) => {

//const {id} = useParams();
const {idA} = props;
const navigate = useNavigate();
const [value, setValue] = useState({
    name:"",
    prix:"",
    nombre:"",
    nom_fournisseur:"",
    constructeur:"",
    modele:"",
    category:"",
    description:""
})

useEffect( ()=>{
    axios.get('http://localhost:5000/appareil/'+idA)
    .then(res=>{
        setValue({...value, name:res.data.name,prix:res.data.prix,nombre:res.data.nombre,nom_fournisseur:res.data.nom_fournisseur,constructeur:res.data.constructeur,modele:res.data.modele,category:res.data.category,description:res.data.description
    })
    console.log(res);
    })
    .catch(err=>console.log(err))
},[])

const socket = io.connect("http://localhost:5000") 

const [room,setRoom] = useState("ok")
        
const handleUpdate = (e) => {
    e.preventDefault();
    socket.emit("join_room",room)
    socket.emit("send_data",value)
    axios.put('http://localhost:5000/appareil/'+idA , value)
        .then(res=>{
            console.log(res);
            navigate("/appareil");
        })
        .catch(err=>console.log(err))
}
const paperStyle = { padding: "40px 20px", width: 750, margin: "20px auto"}
const btnStyle = { marginTop:10}
const Style = { marginBottom:50}


return(
    <div>
                <Navbar/>
    <Grid>
    
    <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Ajout d'un nouveau materiel</Typography>
        </Grid>
        <Formik >
                <Form noValidate onSubmit={handleUpdate}>
           
            <Field as={TextField} fullWidth required
            name="name"
            id="name"
            label="Nom"
            variant="outlined"
            value={value.name}
            onChange={(e)=>{setValue({...value, name: e.target.value})}}
            />
            
            <Field as={TextField} fullWidth required
            name="prix"
            id="prix"
            label="Prix"
            variant="outlined"
            value={value.prix}
            onChange={(e)=>{setValue({...value, prix: e.target.value})}}
            />

            <Field as={TextField} fullWidth required
            name="nombre"
            id="nombre"
            label="Nombre"
            variant="outlined"
            value={value.nombre}
            onChange={(e)=>{setValue({...value, nombre: e.target.value})}}
            />

            <Field as={TextField} fullWidth required
            name="nom_fournisseur"
            id="nom_fournisseur"
            label="nom du fournisseur"
            variant="outlined"
            value={value.nom_fournisseur}
            onChange={(e)=>{setValue({...value, nom_fournisseur: e.target.value})}}
            />
           
           <Field as={TextField} fullWidth required
                name="constructeur"
                id="constructeur"
                label="Constructeur"
                variant="outlined"
                value={value.constructeur}
                onChange={(e)=>{setValue({...value, constructeur: e.target.value})}}
                />
               
               <Field as={TextField} fullWidth required
                name="modele"
                id="modele"
                label="Modele"
                variant="outlined"
                value={value.modele}
                onChange={(e)=>{setValue({...value, modele: e.target.value})}}
                />
                
                <Field as={TextField} fullWidth required
                name="category"
                id="category"
                label="Categorie"
                variant="outlined"
                value={value.category}
                onChange={(e)=>{setValue({...value, category: e.target.value})}}
                />
              
              <Field as={TextField} fullWidth required
                name="description"
                id="description"
                label="Description"
                variant="outlined"
                value={value.description}
                onChange={(e)=>{setValue({...value, description: e.target.value})}}
                />
            <Button color="primary" variant="outlined"  style={btnStyle} type="submit" 
            disabled={value.name.length==0 ||
                value.prix.length==0 ||
                value.nombre.length==0 ||
                value.nom_fournisseur.length==0 ||
                value.constructeur.length==0 ||
                value.modele.length==0 || 
                value.category.length==0 ||
                value.description.length==0 }
            >Valider</Button>
        </Form>
        </Formik>
        </Paper>
        </Grid>
</div>

)

}

export default UpdateAppareil;