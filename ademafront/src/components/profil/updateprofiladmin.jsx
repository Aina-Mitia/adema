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
import Navbarhome from "../navbar/navbarhome";
import { useAuthContext } from '../hooks/useAuthContext';





const UpdateProfilAdmin = () =>{

const [data,setData] = useState([]);
const {user} = useAuthContext()

const navigate = useNavigate();
const [value, setValue] = useState({
    name :"",
    lastname :"",
    email :"",
    password :""
})

const actif = async ()=>{
    await axios.post('http://localhost:5000/admin/getcompte',{
        email: entity.data.email
      })
    .then(res=>setValue({...value, name:res.data.name,lastname:res.data.lastname, email:res.data.email, password:res.data.password
    }))
    .catch(err=>console.log(err))
}

useEffect( ()=>{
    if (user){
        actif()
    }
    
},[])
        
const handleUpdate = async (e) => {
    e.preventDefault();
   await axios.put('http://localhost:5000/admin/singlecompte',{
        email: user.data.email,
        value: value
      }).then(res=>{
            console.log(res);
            navigate("/user");
        }
        ).catch(err=>console.log(err))
}


  
const paperStyle = { padding: "40px 20px", width: 750, margin: "auto" ,position:"relative",top:"80px"}
const btnStyle = { marginTop:10}
const Style = { width: "300px"}

return(
<div >
    <Navbarhome/>
<Grid >
        <Paper elevation={5} style={paperStyle}>
        <Grid align="center" >
            <Typography variant="h6">Modification du profil</Typography>
        </Grid>
            <Formik >
                <Form noValidate onSubmit={handleUpdate}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="name"
                id="name"
                style={Style}
                label="Nom"
                variant="outlined"
                value={value.name}
                onChange={(e)=>{setValue({...value, name: e.target.value})}}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="lastname"
                id="lastname"
                style={Style}
                label="Prénom"
                variant="outlined"
                value={value.lastname}
                onChange={(e)=>{setValue({...value, email: e.target.value})}}
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
                onChange={(e)=>{setValue({...value, contact: e.target.value})}}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
            margin="normal" required
                name="mot de passe"
                id="mot de passe"
                style={Style}
                label="Mot de passe"
                variant="outlined"
                value={value.password}
                onChange={(e)=>{setValue({...value, adress: e.target.value})}}
                />
                
                
                </Grid>
              
                </Grid>
                <Button color="primary" variant="contained" style={btnStyle} sx={{backgroundColor:"#F1513B"}} type="submit"
                /*disabled={data.name.length==0 ||
                    data.contact.length==0 ||
                    data.adress.length==0 ||
                    data.email.length==0 ||
                    data.nif.length==0 ||
                    data.stat.length==0  }*/
                >Valider</Button>
            </Form>
            </Formik>
            </Paper>
            </Grid>
</div>

)
}

export default UpdateProfilAdmin;