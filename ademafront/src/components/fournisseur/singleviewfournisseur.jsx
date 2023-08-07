import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate, Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";



const SingleViewFournisseur = (props) =>{

const [data,setData] = useState([]);
const {id} = useParams();
const {idF} = props;
idF = id;

useEffect( ()=>{
     axios.get('http://localhost:5000/fournisseur/'+idF)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
},[])
    

return(
<div>
<Navbar/>
<Box>
    <Card>
        <CardContent>
            <Stack>
            <Typography gutterBottom variant="subtitle">Nom du fournisseur:</Typography>
            <Typography variant="subtitle2">{data.name}</Typography>
            </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Contact:</Typography>
            <Typography variant="subtitle2">{data.contact}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">Adresse du fournisseur:</Typography>
            <Typography variant="subtitle2">{data.adress}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">E-mail:</Typography>
            <Typography variant="subtitle2">{data.email}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">NIF:</Typography>
            <Typography variant="subtitle2">{data.nif}</Typography>
        </Stack>
        <Stack>
            <Typography gutterBottom variant="subtitle">STAT:</Typography>
            <Typography variant="subtitle2">{data.stat}</Typography>
        </Stack>
        </CardContent>
        <CardActions>
        <Button> <Link to="/fournisseur">Retour</Link></Button>
        </CardActions>
        </Card>
        </Box>
</div>
)}

export default SingleViewFournisseur;