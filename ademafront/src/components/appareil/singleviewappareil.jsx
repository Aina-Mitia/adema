import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate, Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";



const SingleViewAppareil = (props) =>{

const [data,setData] = useState([]);
const {id} = useParams() ;
const {idA} = props;
//idA=id;

useEffect( ()=>{
      axios.get('http://localhost:5000/appareil/'+idA)
     .then(res=>setData(res.data))
     .catch(err=>console.log(err))
    // console.log(idA);
},[])
    
//constructeur, modele, description, category

return(
<div>
<Navbar/>
<Box maxWidth="500px">
    <Card >
        <CardContent>
            <Stack>
            <Typography gutterBottom variant="subtitle">Nom du produit:</Typography>
            <Typography variant="subtitle2">{data.name}</Typography>
            </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Prix:</Typography>
            <Typography variant="subtitle2">{data.prix}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="h8">Nombre:</Typography>
            <Typography variant="subtitle2">{data.nombre}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Nom du fournisseur</Typography>
            <Typography variant="subtitle2">{data.nom_fournisseur}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Constructeur:</Typography>
            <Typography variant="subtitle2">{data.constructeur}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Modele:</Typography>
            <Typography variant="subtitle2">{data.modele}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Categorie:</Typography>
            <Typography variant="subtitle2">{data.category}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Description:</Typography>
            <Typography variant="subtitle2">{data.description}</Typography>
        </Stack>
        </CardContent>
        <CardActions>
        <Button> <Link to="/appareil">Retour</Link></Button>
        </CardActions>
        </Card>
        </Box>
</div>
)}

export default SingleViewAppareil;