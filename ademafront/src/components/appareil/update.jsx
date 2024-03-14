import React, { useEffect } from "react";
import { useState } from "react";
import {  useParams, Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from '../navbar/navbar'
import  TextField  from "@mui/material/TextField"; //il faut importer
import { Button, Paper,Typography,Stack } from "@mui/material";
import  Box  from "@mui/material/Box";
import  Grid  from "@mui/material/Grid";
import {Formik, Form,Field, ErrorMessage} from "formik"
import io from "socket.io-client";
import Navbarhome from "../navbar/navbarhome";
import { useDeleteContext } from "../hooks/useDeleteContext";






const UpdateAppareil = () => {

const {id} = useParams();
//const {onTrueHandleUpdate} = props

const {dispatch} = useDeleteContext()

const navigate = useNavigate();
const [value, setValue] = useState({
    name:"",
    prix:"",
    nombre:"",
    nom_fournisseur:"",
    email:"",
    constructeur:"",
    modele:"",
    category:""
    
})

useEffect( ()=>{
    axios.get('http://localhost:5000/appareil/'+id)
    .then(res=>{
        setValue({...value, name:res.data.name,prix:res.data.prix,nombre:res.data.nombre,nom_fournisseur:res.data.nom_fournisseur,email:res.data.email,constructeur:res.data.constructeur,modele:res.data.modele,category:res.data.category
    })
    console.log(res);
    })
    .catch(err=>console.log(err))
},[])

//const socket = io.connect("http://localhost:5000") 

const [room,setRoom] = useState("ok")
        
const handleUpdate = async (e) => {
    e.preventDefault();
    //socket.emit("join_room",room)
    //socket.emit("send_data",value)
   await axios.put('http://localhost:5000/appareil/'+id , value)
        .then(res=>{
            console.log(res);
            dispatch({type:"dele",payload:res.data})
        })
        .catch(err=>console.log(err))
        
        setTimeout(() => {
            navigate("/appareil/adema");
        }, 2000);
    //closeFunction()
}
const paperStyle = { padding: "40px 20px", width: 750, margin: " auto" ,position:"relative",top:"50px"}
const btnStyle = { marginTop:10}
const Style = { width: "300px"}


return(
    <div>
                <Navbar/>
    <Grid marginTop="auto">
    
    <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Modification d'un matériel</Typography>
        </Grid>
        <Formik >
                <Form noValidate onSubmit={handleUpdate}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
            margin="normal" required
                        style={Style}
                        name="name"
                        id="name"
                        label="Nom"
                        variant="outlined"
                        value={value.name}
                        onChange={(e)=>{setValue({...value, name: e.target.value})}}
                        />
                    
                    
                        <TextField
            margin="normal" required
                        name="prix"
                        style={Style}
                        id="prix"
                        label="Prix"
                        variant="outlined"
                        value={value.prix}
                        onChange={(e)=>{setValue({...value, prix: e.target.value})}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
            margin="normal" required
                        name="nombre"
                        id="nombre"
                        style={Style}
                        label="Nombre"
                        variant="outlined"
                        value={value.nombre}
                        onChange={(e)=>{setValue({...value, nombre: e.target.value})}}
                        />
                       
                        <TextField
            margin="normal" required
                        name="nom_fournisseur"
                        id="nom_fournisseur"
                        label="Nom du fournisseur"
                        style={Style}
                        variant="outlined"
                        value={value.nom_fournisseur}
                        onChange={(e)=>{setValue({...value, nom_fournisseur: e.target.value})}}
                        />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
            margin="normal"required
                        name="category"
                        id="category"
                        style={Style}
                        label="Categorie"
                        variant="outlined"
                        value={value.category}
                        onChange={(e)=>{setValue({...value, category: e.target.value})}}
                        />
                        
                        <TextField
            margin="normal" required
                        name="constructeur"
                        id="constructeur"
                        style={Style}
                        label="Constructeur"
                        variant="outlined"
                        value={value.constructeur}
                        onChange={(e)=>{setValue({...value, constructeur: e.target.value})}}
                        />
                       
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
            margin="normal" required
                        name="email"
                        id="email"
                        label="Email du fournisseur"
                        style={Style}
                        variant="outlined"
                        value={value.email}
                        onChange={(e)=>{setValue({...value, email: e.target.value})}}
                        />
                        
                        <TextField
            margin="normal" required
                        name="modele"
                        id="modele"
                        style={Style}
                        label="Modele"
                        variant="outlined"
                        value={value.modele}
                        onChange={(e)=>{setValue({...value, modele: e.target.value})}}
                        />                      
                       
                        </Grid>
                </Grid>
            <Button sx={{backgroundColor:"#F1513B"}} variant="contained"  style={btnStyle} type="submit" 
            disabled={value.name.length==0 ||
                value.prix.length==0 ||
                value.nombre.length==0 ||
                value.nom_fournisseur.length==0 ||
                value.email.length==0 ||
                value.constructeur.length==0 ||
                value.modele.length==0 || 
                value.category.length==0 
                 }
            >Modifier</Button>
        </Form>
        </Formik>
        </Paper>
        </Grid>
</div>

)

}

export default UpdateAppareil;