import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate, Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import { Box, Button, Card, CardActions, CardContent, Stack, Typography, Grid } from "@mui/material";
import Navbarhome from "../navbar/navbarhome";



const SingleViewAppareil = () =>{

const [data,setData] = useState([]);
const {id} = useParams() ;
//const {idA} = props;
//idA=id;

useEffect( ()=>{
      axios.get('http://localhost:5000/appareil/'+id)
     .then(res=>setData(res.data))
     .catch(err=>console.log(err))
    // console.log(idA);
},[])
    
//constructeur, modele, description, category

/*
 name:"",
    prix:"",
    nombre:"",
    nom_fournisseur:"",
    constructeur:"",
    modele:"",
    category:"",
    description:""
*/
return(
<div>
<Navbarhome/>
<Card style={{ maxWidth: 400,  margin: 'auto', marginTop:50 }}>
  <CardContent>
    <Typography variant="h2" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16,color:"#17CF1A" }}>
      Matériel
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
          Prix :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.prix}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Nombre :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.nombre}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Nom du fournisseur :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.nom_fournisseur}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Email du fournisseur :
        </Typography>
      </Grid>
        <Grid item xs={8}>
        <Typography variant="body1">
          {data.email}
        </Typography>
      </Grid>
      
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Constructeur :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.constructeur}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Modèle :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.modele}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Catégorie :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          {data.category}
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

export default SingleViewAppareil;