import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../navbar/navbarhome';
import { useState } from "react";


const Login = () => {
  
  const navigate = useNavigate()
  
  const [value, setValue] = useState({
    name:"",
    lastname:"",
    email:"",
    password:""
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/signup",value)
    .then(
        navigate("/")
        )
  }
  
  
  
  
return (
    <div>
      <NavbarHome/>
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-2">
          <label>Nom</label>
          <input
            name="name"
            id="name"
            type="name"
            className="form-control"
            placeholder="Enter votre nom"
            value={value.name}
            onChange={(e)=>{setValue({...value, name: e.target.value})}}
          />
        </div>
        <div className="mb-2">
          <label>Prenom</label>
          <input
            name="lastname"
            id="lastname"
            type="lastname"
            className="form-control"
            placeholder="Enter votre prenom"
            value={value.lastname}
            onChange={(e)=>{setValue({...value, lastname: e.target.value})}}
          />
        </div>
        <div className="mb-2">
          <label>Email address</label>
          <input
            name="email"
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter votre adresse email"
            value={value.email}
            onChange={(e)=>{setValue({...value, email: e.target.value})}}
          />
        </div>

        <div className="mb-2">
          <label>Password</label>
          <input
            id="password"
            name="password"          
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={value.password}
            onChange={(e)=>{setValue({...value, password: e.target.value})}}
          />
        </div>

       

        <div className="d-grid">
          <button type="submit" className="btn btn-success" 
          disabled={
            
            value.name.length==0 ||
            value.lastname.length==0 ||
            value.email.length==0 ||
            value.password.length==0 
          }
          >
          S'inscrire
          </button>
        </div>
       
      </form>
      <p></p>
      <div className="d-grid">
      <button type="submit" className="btn btn-primary" >
            Se connecter
          </button>
          </div>
      </div>
      </div>
      
      </div>
    )
  }

  export default Login;