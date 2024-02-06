import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../navbar/navbar'
import Navbarhome from "../navbar/navbarhome";
import { useEntity } from "../hooks/useEntity";
import { useAuthContext } from "../hooks/useAuthContext";
import {Card, CardContent, Grid, Typography} from '@mui/material'


const Home = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const {user} = useAuthContext()
    const {entity} = useEntity()

    //axios.defaults.withCredentials = true;

    /*useEffect(()=>{
        axios.get("http://localhost:5000")
        .then( res =>{
            if (res.data.valid){
                setName(res.data.name)
            } else {
                navigate("/login");
            }
        }).catch(err=>console.log(err))
    },[])
    
    eo ambanin'ny div eo
{user? <Navbar/>: entity?
        <Navbarhome/>:navigate("/login")}
    */

    return <div>
        <div>
        <Navbarhome/>
        </div>
        <Grid>
            <Link to='/appareil'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h6" component='div'>
                        Fournisseurs
                    </Typography>
                    <Typography  variant="body2" >
                        Liste des fournisseurs
                    </Typography>
                </CardContent>
            </Card>
            </Link>
            <Link to='/fournisseur'>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h6" component='div'>
                       Materiels 
                    </Typography>
                    <Typography  variant="body2" >
                        Liste des materiels
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        </Grid>
    
    </div>
}

export default Home