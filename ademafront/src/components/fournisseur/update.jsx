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



const UpdateFournisseur = () => {

    //const {closeFunction} = props

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
    .then(res=>setValue({...value, name: res.data.name, contact:res.data.contact, adress:res.data.adress, email:res.data.email, nif:res.data.nif, stat:res.data.stat
    }))
    .catch(err=>console.log(err))
},[])

//const socket = io.connect("http://localhost:5000") 

const [room,setRoom] = useState("ok")
        
const handleUpdate = (e) => {
    e.preventDefault();
    //socket.emit("join_room",room)
    //socket.emit("send_data",value)
    axios.put('http://localhost:5000/fournisseur/'+id , value)
        .then(res=>{
            console.log(res);
            navigate("/fournisseur");
        })
        .catch(err=>console.log(err))

    //closeFunction()
}

const paperStyle = { padding: "40px 20px", width: 750, margin: " auto" ,position:"relative",top:"80px"}
const btnStyle = { marginTop:10}
const Style = { width: "300px"}

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
                <Grid container spacing={2}>
                <Grid item xs={6}>
            <TextField
            margin="normal"
            required
            name="name"
            style={Style}
            id="name"
            label="Nom du fournisseur"
            variant="outlined"
            value={value.name}
            onChange={(e)=>{setValue({...value, name: e.target.value})}}
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
                value={value.email}
                onChange={(e)=>{setValue({...value, email: e.target.value})}}
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
            value={value.contact}
            onChange={(e)=>{setValue({...value, contact: e.target.value})}}
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
            value={value.adress}
            onChange={(e)=>{setValue({...value, adress: e.target.value})}}
            />
            </Grid>
            <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="nif"
                id="nif"
                label="NIF"
                style={Style}
                variant="outlined"
                value={value.nif}
                onChange={(e)=>{setValue({...value, nif: e.target.value})}}
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
                value={value.stat}
                onChange={(e)=>{setValue({...value, stat: e.target.value})}}
                />                           
                </Grid>
                </Grid>
            <Button sx={{backgroundColor:"#F1513B"}} variant="contained" style={btnStyle} type="submit"
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