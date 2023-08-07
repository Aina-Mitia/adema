import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../navbar/navbar'



const Home = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");

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
    },[])*/

    return <div>
        <Navbar/>
     <form>
        <h4>Bienvenue</h4>
    <div>
    <button type="submit" 
    className="btn btn-outline-primary"
    onClick={() =>{navigate('/appareil/add')}}>Inscription</button>
     </div>
     <p></p>
     <div>
    <button type="submit" 
    className="btn btn-outline-primary"
    onClick={() =>{navigate('/login')}}>Connexion</button>
    </div>
    </form>
    </div>
}

export default Home