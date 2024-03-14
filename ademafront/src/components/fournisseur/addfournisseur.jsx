import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import  TextField  from "@mui/material/TextField"; //il faut importer
import { Button, Paper, Typography,Stack } from "@mui/material";
import  Box  from "@mui/material/Box";
import  Grid  from "@mui/material/Grid";
import {Formik, Form,Field, ErrorMessage} from "formik"
//import io from "socket.io-client";



const AddFournisseur = () =>{

const navigate = useNavigate();


const [data, setData] = useState({
    name:"",
    contact:"",
    adress:"",
    email:"",
    nif:"",
    stat:""
});


const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/fournisseurr',data)
        .then(res=>{
            console.log(res);
            navigate("/fournisseur");
        })
        .catch(err=>console.log(err))
}

const paperStyle = { padding: "40px 20px", width: 750, margin: "auto" ,position:"relative",top:"80px"}
const btnStyle = { marginTop:10}
const Style = { width: "300px"}

return(
    <div>        
        <Navbar/>
        <Grid >
        <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Ajout d'un nouveau fournisseur</Typography>
        </Grid>
            <Formik >
                <Form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="name"
                id="name"
                style={Style}
                label="Nom du fournisseur"
                variant="outlined"
                onChange={(e)=>{setData({...data, name: e.target.value})}}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="email"
                id="email"
                style={Style}
                label="E-mail"
                variant="outlined"
                onChange={(e)=>{setData({...data, email: e.target.value})}}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="contact"
                id="contact"
                style={Style}
                label="Contact"
                variant="outlined"
                onChange={(e)=>{setData({...data, contact: e.target.value})}}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="adress"
                id="adress"
                style={Style}
                label="Adresse du fournisseur"
                variant="outlined"
                onChange={(e)=>{setData({...data, adress: e.target.value})}}
                />
                
                
                </Grid>
                <Grid item xs={6}>
                
               
               <TextField
            margin="normal" required
                name="nif"
                id="nif"
                style={Style}
                label="NIF"
                variant="outlined"
                onChange={(e)=>{setData({...data, nif: e.target.value})}}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="stat"
                id="stat"
                style={Style}
                label="STAT"
                variant="outlined"
                onChange={(e)=>{setData({...data, stat: e.target.value})}}
                />
                
                </Grid>
                </Grid>
                <Button color="primary" variant="contained" style={btnStyle} sx={{backgroundColor:"#F1513B"}} type="submit"
                disabled={data.name.length==0 ||
                    data.contact.length==0 ||
                    data.adress.length==0 ||
                    data.email.length==0 ||
                    data.nif.length==0 ||
                    data.stat.length==0  }
                >Valider</Button>
            </Form>
            </Formik>
            </Paper>
            </Grid>
    </div>
)}

export default AddFournisseur;