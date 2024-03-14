import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate, Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import { Box, Button, Card, CardActions, CardContent, Stack, Typography,Grid } from "@mui/material";



const SingleViewFournisseur = () =>{

const [data,setData] = useState([]);
const {id} = useParams();

useEffect( ()=>{
     axios.get('http://localhost:5000/fournisseur/'+id)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
},[])
    
/*
name:"",
    contact:"",
    adress:"",
    email:"",
    nif:"",
    stat:""
*/

return(
<div>
<Navbar/>
<Card style={{ maxWidth: 400, margin: 'auto', marginTop:150 }}>
  <CardContent>
    <Typography variant="h2" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16,color:"#17CF1A" }}>
      Fournisseur
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Nom :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.name}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Email :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.email}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Contact :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.contact}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Adresse :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.adress}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          NIF :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.nif}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          STAT :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.stat}
        </Typography>
      </Grid>
    </Grid>
    <Button type="submit" variant="contained" 
          
          sx={{marginTop:3, borderRadius:3,backgroundColor:"#17CF1A"}} 
          >
          Retour
          </Button>
  </CardContent>
</Card>
</div>
)}

export default SingleViewFournisseur;