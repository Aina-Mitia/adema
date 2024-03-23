import axios from 'axios';
import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import NavbarHome from '../navbar/navbarhome';
import { useState } from "react";
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGetContext } from '../hooks/useGetContext';
import { useEntity } from '../hooks/useEntity';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import Img from './adema2.jpg'
import {useSignup} from '../hooks/useSignup'


const Signup = () => {
  const {signup} = useSignup()
  const navigate = useNavigate()
  const [error,setError] = useState(false)

  
  const [value, setValue] = useState({
    name:"",
    lastname:"",
    email:"",
    password:""
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    /*axios.post("http://localhost:5000/signup",value)
    .then(
        navigate("/")
        )*/
      await signup(value)
      setTimeout(() => {
        navigate("/")
      }, 2500); 
      
  }
  
  
  
  
return (
    <div>
            
            <Stack>
       
      
      <form onSubmit={handleSubmit} >
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        position="relative"
        top="20px"
        left="auto"
        alignItems="center"
        justifyContent={"center"}
        className="login"
        margin="auto"
        marginTop="auto"
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover":{
            boxShadow:'10px 10px #ccc'
          },
          backgroundColor:'#E5E4E4'
        }}
        >
          <img src={Img} height="50px" width="50px" title='logo' alt='logo'></img>
        <Typography variant='h4' padding={3} textAlign='center'>
          Inscription
          </Typography>  
          <TextField
            margin="normal"
            type="text"
            placeholder="Nom"
            onChange={(e)=>{setValue({...value, name: e.target.value})}}
          />
          <TextField
            margin="normal"
            type="text"
            placeholder="Prénom"
            value={value.lastname}
            onChange={(e)=>{setValue({...value, lastname: e.target.value})}}
          />

          <TextField
            margin="normal"
            type="text"
            placeholder="Email"
            value={value.email}
            onChange={(e)=>{setValue({...value, email: e.target.value})}}
          />
          {error && value.email == 0 ? <label>champ non rempli</label> : ""

          }
        

        
          <TextField
            margin="normal"       
            type="password"
            placeholder="Mot de passe"
            value={value.password}
            onChange={(e)=>{setValue({...value, password: e.target.value})}}
          />
          {error && value.password == 0 ? <label>champ non rempli</label> : ""}
        

       

          <Button type="submit" variant="contained" 
          sx={{marginTop:3, borderRadius:3}} 
          
          disabled={
            value.name.length==0 ||
            value.lastname.length==0 ||
            value.email.length==0 ||
            value.password.length==0
          }>
          S'inscrire
          </Button>
          <Button  variant="contained" 
                    onClick={()=>{navigate("/login")}} 

          sx={{marginTop:3, borderRadius:3,backgroundColor:"#17CF1A"}} 
          >
          Se connecter
          </Button>
        </Box>
      </form>
      
     
      </Stack>
      
    </div>
    )
  }

  export default Signup;