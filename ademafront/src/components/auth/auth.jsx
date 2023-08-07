import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarHome from '../navbar/navbarhome';

const Auth = () => {
  
  const navigate = useNavigate()

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
    setData([...data, formData]);
    setFormData({firstName:"",lastName:"",email:"",password:""})
  }

return ( <div>
      <form>
      <NavbarHome/>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
           className="form-control"
           placeholder="Last name"
           value={lastName}
           onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/')}}>
          S'inscrire
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-secondary" >
          Se connecter
          </button>
        </div>
      </form>
      </div>
    )
  }

export default Auth;