import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate, Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'
import { Card, CardContent, Typography,Grid, Button } from '@mui/material';
import Navbarhome from "../navbar/navbarhome";
import { useGetContext } from '../hooks/useGetContext';


const Profil = () =>{

const [data,setData] = useState([]);
const {entity} = useGetContext()

/*router.post("/fournisseur/compte", getFournisseurCompte)
router.post("/admin/compte", getAdminCompte) */

useEffect( ()=>{
  if (entity){
     axios.post('http://localhost:5000/admin/compte',{
      email: entity.data.email
    })
    .then((res)=>{
        setData(res.data)

    })
    .catch(err=>console.log(err))}
},[])
 

return(
  <div>
  <Navbarhome/>
  <Card style={{ maxWidth: 400, margin: 'auto', marginTop:150 }}>
  <CardContent>
    <Typography variant="h2" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16,color:"#17CF1A" }}>
      Profil
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Nom :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          RABE
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Prénom :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          Nandrasana
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16, fontWeight: 'bold',textAlign:"right" }}>
          Email :
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          rabenandrasana@gmail.com
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ fontSize: 16 , fontWeight: 'bold',textAlign:"right"}}>
          Mot de passe:
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">
          ********
        </Typography>
      </Grid>
    </Grid>
    <Button type="submit" variant="contained" 
          
          sx={{marginTop:3, borderRadius:3,backgroundColor:"#17CF1A"}} 
          >
          Modifier
          </Button>
  </CardContent>
</Card>
</div>

)
}

export default Profil;