import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../navbar/navbarhome';
import { useState } from "react";


const Login = () => {
  
  const navigate = useNavigate()
  const [error,setError] = useState(false)

  axios.defaults.withCredentials = true;
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

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/login",value).then(res=>{
      if (res.data.Login ){
        alert("ok")
        navigate("/appareil")
      }else {
        alert("error")
      }
    }).catch(err=>console.log(err))
    
    if (value.email == 0 || value.password==0){
      setError(true)
    }

  }
  
  
  
return (
  <div>
      <NavbarHome/>
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-2">
          <label>Email address</label>
          <input
            name="email"
            id="email"
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={value.email}
            onChange={(e)=>{setValue({...value, email: e.target.value})}}
          />
          {error && value.email == 0 ? <label>champ non rempli</label> : ""

          }
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
          {error && value.password == 0 ? <label>champ non rempli</label> : ""}
        </div>

       

        <div className="d-grid">
          <button type="submit" className="btn btn-success"  
          disabled={
            value.email.length==0 ||
            value.password.length==0 
          }>
          Se connecter
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      
      <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            S'inscrire
          </button>
        </div>
      </div>
      </div>
        
      </div>
    )
  }

  export default Login;