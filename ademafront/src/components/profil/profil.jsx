import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate, Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../navbar/navbar'


const Profil = () =>{

const [data,setData] = useState([]);


useEffect( ()=>{
     axios.get('http://localhost:5000/user')
    .then((res)=>{
        setData(res.data)

    })
    .catch(err=>console.log(err))
},[])
 

return(
<section >
  <div class="container py-5">
   <Navbar/>
    <p></p>
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img  alt="avatar"
              class="rounded-circle img-fluid" />
            <h5 class="my-3">John Smith</h5>
            <p class="text-muted mb-1">Informaticien à ADEMA</p>
            <p class="text-muted mb-4">Antananarivo</p>
            
          </div>
        </div>
   
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Nom</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{data.name}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Prénoms</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{data.lastname}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{data.email}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Addresse</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Antananarivo</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>


)
}

export default Profil;