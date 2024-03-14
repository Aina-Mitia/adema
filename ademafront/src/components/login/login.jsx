import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavbarHome from '../navbar/navbarhome';
import { useState } from "react";
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';
import { useGetContext } from '../hooks/useGetContext';
import { useEntity } from '../hooks/useEntity';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import './login.css';
import Img from './adema2.jpg'



const Login = () => {
  const {errorLogin, login} = useLogin() 
  const navigate = useNavigate()
  const [error,setError] = useState(false)
  const {user} = useAuthContext()
  const {dispatch} = useGetContext()
  const {getEntity} =useEntity()

  // axios.defaults.withCredentials = true;
  const [value, setValue] = useState({
    email:"",
    password:""
  });
  
  //axios.defaults.withCredentials = true;

  /*useEffect(()=>{
    axios.get("http://localhost:5000")
    .then( res =>{
        if (res.data.valid){
          navigate("/");
        } else {
          navigate("/login");
        }
    }).catch(err=>console.log(err))
  },[])*/

  const handleSubmit = async  (e) => {
    e.preventDefault()
    /*axios.post("http://localhost:5000/login",value).then(res=>{
      if (res.data.Login ){
        alert("ok")
        navigate("/appareil")
      }else {
        alert("error")
      }
    }).catch(err=>console.log(err))
    */
    
     await login(value);
     //getEntity(value.email)
     setTimeout(() => {
      navigate("/")
    }, 3000); 
     console.log(user)
    
    
    if (value.email == 0 || value.password==0){
      setError(true)
    }

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
        top="100px"
        left="300px"
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
        <Typography variant='h4' padding={3} textAlign='center'>
          Connexion
          </Typography>  
          
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
            value.email.length==0 ||
            value.password.length==0 
          }>
          Se connecter
          </Button>
          <Button  variant="contained" 
          sx={{marginTop:3, borderRadius:3,backgroundColor:"#17CF1A"}}
          onClick={()=>{navigate("/signup")}} 
          >
          S'inscrire
          </Button>
        </Box>
      </form>
      
      <Box 
      position="absolute"
      left="130px"    
      top="180px"    
      bottom="80px"
      >
        
        <img src={Img} height="80px" width="80px" title='logo' alt='logo'></img>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <Typography variant="h4" component="div" color="black" align="center" gutterBottom>
          Bienvenue sur notre application
        </Typography>
        <Typography variant="body1" color="black" align="center">
          Découvrez toutes les fonctionnalités  que nous offrons.
        </Typography>
        <Typography variant="h8" color="black" align="center">
          Veuillez cliquer le bouton ci-dessous si vous êtes un fournisseur pour se connecter.
        </Typography>
        <Button  variant="contained" 
                    onClick={()=>{navigate("/login/admin")}} 
          sx={{position:'absolute', left:250,bottom:150, borderRadius:3,backgroundColor:"#17CF1A"}} 
          >
          Cliquez ici
          </Button>
      </Box>
      </Stack>
      </div>
    )
  }

  export default Login;