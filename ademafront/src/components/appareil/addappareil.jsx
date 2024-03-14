import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import Navbarhome from "../navbar/navbarhome";
import  TextField  from "@mui/material/TextField"; //il faut importer
import { Button, Paper, Typography,Stack } from "@mui/material";
import  Box  from "@mui/material/Box";
import  Grid  from "@mui/material/Grid";
import {Formik, Form,Field, ErrorMessage} from "formik"
import io from "socket.io-client";
import { useDeleteContext } from "../hooks/useDeleteContext";



const AddAppareil = () =>{

const navigate = useNavigate();
//const {closeFunction} = props

const {dispatch} = useDeleteContext()

const [data, setData] = useState({
    name:"",
    prix:"",
    nombre:"",
    nom_fournisseur:"",
    email:"",
    constructeur:"",
    modele:"",
    category:""
    
});

//const socket = io.connect("http://localhost:5000") 

const [room,setRoom] = useState("ok")

const handleSubmit = async (e) => {
    e.preventDefault();
    //socket.emit("join_room",room)
    //socket.emit("send_data",data)
    await axios.post('http://localhost:5000/appareil',data)
        .then(res=>{
            console.log(res);
            
           
        })
        .catch(err=>console.log(err))
        
    await dispatch({type:"dele",payload: data})
        setTimeout(() => {
            navigate("/appareil/adema");
        }, 1000); 
        //closeFunction()
    
    
}

const [stateButton, setSateButton] = useState(true);

const paperStyle = { padding: "40px 20px", width: 700, margin: " auto",position:"relative",top:"60px"}
const btnStyle = { marginTop:10}
const Style = { width: "300px"}


return(
    <div>
     <Navbarhome/>   
    <Grid  >
        <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Ajout d'un nouveau materiel</Typography>
        </Grid>
            <Formik >
                <Form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
            margin="normal" required
                        style={Style}
                        name="name"
                        id="name"
                        label="Nom"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, name: e.target.value})}}
                        />
                    
                    
                        <TextField
            margin="normal" required
                        name="prix"
                        style={Style}
                        id="prix"
                        label="Prix"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, prix: e.target.value})}}
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
                        onChange={(e)=>{setData({...data, nombre: e.target.value})}}
                        />
                       
                        <TextField
            margin="normal" required
                        name="nom_fournisseur"
                        id="nom_fournisseur"
                        label="Nom du fournisseur"
                        style={Style}
                        variant="outlined"
                        onChange={(e)=>{setData({...data, nom_fournisseur: e.target.value})}}
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
                        onChange={(e)=>{setData({...data, category: e.target.value})}}
                        />
                        
                        <TextField
            margin="normal" required
                        name="constructeur"
                        id="constructeur"
                        style={Style}
                        label="Constructeur"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, constructeur: e.target.value})}}
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
                        onChange={(e)=>{setData({...data, email: e.target.value})}}
                        />
                        
                        <TextField
            margin="normal" required
                        name="modele"
                        id="modele"
                        style={Style}
                        label="Modele"
                        variant="outlined"
                        onChange={(e)=>{setData({...data, modele: e.target.value})}}
                        />                      
                       
                        </Grid>
                        </Grid>
                <Button sx={{backgroundColor:"#F1513B"}} style={btnStyle} type="submit" variant="contained"
                disabled={data.name.length==0 ||
                    data.prix.length==0 ||
                    data.nombre.length==0 ||
                    data.nom_fournisseur.length==0 ||
                    data.email.length==0 ||
                    data.constructeur.length==0 ||
                    data.modele.length==0 || 
                    data.category.length==0 
                     }
                    >Valider
                    </Button>
                    
                    </Form>
            </Formik>
            </Paper>
            </Grid>
            
    </div>
)}

export default AddAppareil;