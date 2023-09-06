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



const UpdateFournisseur = () => {

const {id} = useParams();
const navigate = useNavigate();
const [value, setValue] = useState({
    name:"",
    contact:"",
    adress:"",
    email:"",
    nif:"",
    stat:""
})

useEffect( ()=>{
    axios.get('http://localhost:5000/fournisseur/'+id)
    .then(res=>setValue({...value, name:res.data.name, contact:res.data.contact, adress:res.data.adress, email:res.data.email, nif:res.data.nif, stat:res.data.stat
    }))
    .catch(err=>console.log(err))
},[])

const socket = io.connect("http://localhost:5000") 

const [room,setRoom] = useState("ok")
        
const handleUpdate = (e) => {
    e.preventDefault();
    socket.emit("join_room",room)
    socket.emit("send_data",value)
    axios.put('http://localhost:5000/fournisseur/'+id , value)
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
            <Typography variant="h6">Modification sur le fournisseur</Typography>
        </Grid>
            <Formik >
                <Form noValidate onSubmit={handleUpdate}>
            
            <Field as={TextField} fullWidth required
            name="name"
            id="name"
            label="Nom du fournisseur"
            variant="outlined"
            value={value.name}
            onChange={(e)=>{setValue({...value, name: e.target.value})}}
            />
            
            <Field as={TextField} fullWidth required
            name="contact"
            id="contact"
            label="Contact"
            variant="outlined"
            value={value.contact}
            onChange={(e)=>{setValue({...value, contact: e.target.value})}}
            />
           
           <Field as={TextField} fullWidth required
            name="adress"
            id="adress"
            label="Adresse du fournisseur"
            variant="outlined"
            value={value.adress}
            onChange={(e)=>{setValue({...value, adress: e.target.value})}}
            />
            
            <Field as={TextField} fullWidth required
                name="email"
                id="email"
                label="E-mail"
                variant="outlined"
                value={value.email}
                onChange={(e)=>{setValue({...value, email: e.target.value})}}
                />
                
                <Field as={TextField} fullWidth required
                name="nif"
                id="nif"
                label="NIF"
                variant="outlined"
                value={value.nif}
                onChange={(e)=>{setValue({...value, nif: e.target.value})}}
                />
               
               <Field as={TextField} fullWidth required
                name="stat"
                id="stat"
                label="STAT"
                variant="outlined"
                value={value.stat}
                onChange={(e)=>{setValue({...value, stat: e.target.value})}}
                />                           
                
            <Button color="primary" variant="contained" style={btnStyle} type="submit"
             disabled={value.name.length==0 ||
                value.contact.length==0 ||
                value.adress.length==0 ||
                value.email.length==0 ||
                value.nif.length==0 ||
                value.stat.length==0  }
            >Valider</Button>
        </Form>
        </Formik>
        </Paper>
        </Grid>
</div>
)

}

export default UpdateFournisseur;