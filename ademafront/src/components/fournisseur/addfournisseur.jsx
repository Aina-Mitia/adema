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
    axios.post('http://localhost:5000/fournisseur',data)
        .then(res=>{
            console.log(res);
            navigate("/fournisseur");
        })
        .catch(err=>console.log(err))
}

const paperStyle = { padding: "40px 20px", width: 750, margin: "20px auto"}
const btnStyle = { marginTop:10}
const Style = { marginBottom:50}

return(
    <div>        
        <Navbar/>
        <Grid >
        <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Ajout d'un nouveau fournisseur</Typography>
        </Grid>
            <Formik onSubmit={handleSubmit}>
                <Form noValidate>
         
                <Field as={TextField} fullWidth required
                name="name"
                id="name"
                label="Nom du fournisseur"
                variant="outlined"
                onChange={(e)=>{setData({...data, name: e.target.value})}}
                />
                
                <Field as={TextField} fullWidth required
                name="contact"
                id="contact"
                label="Contact"
                variant="outlined"
                onChange={(e)=>{setData({...data, contact: e.target.value})}}
                />
                
                
                <Field as={TextField} fullWidth required
                name="adress"
                id="adress"
                label="Adresse du fournisseur"
                variant="outlined"
                onChange={(e)=>{setData({...data, adress: e.target.value})}}
                />
                
                
                <Field as={TextField} fullWidth required
                name="email"
                id="email"
                label="E-mail"
                variant="outlined"
                onChange={(e)=>{setData({...data, email: e.target.value})}}
                />
               
               <Field as={TextField} fullWidth required
                name="nif"
                id="nif"
                label="NIF"
                variant="outlined"
                onChange={(e)=>{setData({...data, nif: e.target.value})}}
                />
                
                <Field as={TextField} fullWidth required
                name="stat"
                id="stat"
                label="STAT"
                variant="outlined"
                onChange={(e)=>{setData({...data, stat: e.target.value})}}
                />
                <Button color="primary" variant="contained" style={btnStyle} type="submit"
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