import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../navbar/navbar'
import Navbarhome from "../navbar/navbarhome";
import { useEntity } from "../hooks/useEntity";
import { useAuthContext } from "../hooks/useAuthContext";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import "./home.css"


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
        <Navbar/>
        </div>
        <Container className="root">
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Card className="card">
            <CardActionArea component="a" href="/page1">
              <CardMedia
                className="media"
                image="https://via.placeholder.com/345x140"
                title="Page 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Page 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description de la page 1.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card">
            <CardActionArea component="a" href="/page2">
              <CardMedia
                className="media"
                image="https://via.placeholder.com/345x140"
                title="Page 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Page 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description de la page 2.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
    
    </div>
}

export default Home