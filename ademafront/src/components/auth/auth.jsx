import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../navbar/navbarhome';
import { useSignup } from '../hooks/useSignup';

const Auth = () => {
  
  const navigate = useNavigate()
  const {signup} = useSignup()

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  const [data, setData] = useState([]);
  
  const {firstName, lastName, email, password} = formData;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("signup");
    signup(formData);
    

    setData([...data, formData]);

    setFormData({firstName:"",lastName:"",email:"",password:""})
  }

return ( <div>
      
      <NavbarHome/>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            placeholder="First name"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
          id="lastName"
          name="lastName"
           className="form-control"
           placeholder="Last name"
           value={data.lastName}
           onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
          S'inscrire
          </button>
        </div>
        </form>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-secondary" >
          Se connecter
          </button>
        </div>
      </div>
    )
  }

export default Auth;