import React, { useEffect } from "react";
import { useState } from "react";
import {  useParams, Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from '../navbar/navbar'







const UpdateProfil = () =>{

const [data,setData] = useState([]);

const {id} = useParams();
const navigate = useNavigate();
const [value, setValue] = useState({
    name :"",
    lastname :"",
    email :"",
    password :""
})

useEffect( ()=>{
    axios.get('http://localhost:5000/fournisseur/'+id)
    .then(res=>setValue({...value, name:res.data[0].name,lastname:res.data[0].lastname, email:res.data[0].email, password:res.data[0].password
    }))
    .catch(err=>console.log(err))
},[])
        
const handleUpdate = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/fournisseur/'+id , value)
        .then(res=>{
            console.log(res);
            navigate("/user");
        })
        .catch(err=>console.log(err))
}




return(
<div class="container-xl px-4 mt-4">
    <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"  target="__blank">Notifications</a>
    </nav>
    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form onSubmit={handleUpdate}>
                        <div class="mb-3">
                            <label class="small mb-1" >Nom de l'administrateur</label>
                            <input class="form-control" 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="nouveau nom " 
                            value={value.name}
                            onChange={(e)=>{setValue({...value, name: e.target.value})}}
                            />
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" >Prenom</label>
                                <input class="form-control" 
                                id="lastname"
                                type="text"
                                placeholder="nouveau prenom " 
                                value={value.lastname}
                                onChange={(e)=>{setValue({...value, lastname: e.target.value})}}
                                />
                            </div>
                            
                        </div>
                       
                        <div class="mb-3">
                            <label class="small mb-1" >Email</label>
                            <input class="form-control"
                            id="email"
                            name="email" 
                            type="email" 
                            placeholder=" addresse email" 
                            value={value.email}
                            onChange={(e)=>{setValue({...value, email: e.target.value})}}
                            />
                        </div>
                        
                        <div class="mb-3">
                            <label class="small mb-1" >Ancien mot de passe</label>
                            <input class="form-control" 
                            id="password" 
                            name="password"
                            type="password"
                            placeholder=" mot de passe"
                            onChange={(e)=>{setValue({...value, password: e.target.value})}}
                            />
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" >Nouveau mot de passe</label>
                            <input class="form-control" 
                            id="password"
                            name="password"
                            type="password" 
                            placeholder=" mot de passe"
                            onChange={(e)=>{setValue({...value, password: e.target.value})}}
                            />
                        </div>

                        <div class="mb-3">
                            <label class="small mb-1" >Confirmer le mot de passe</label>
                            <input class="form-control" 
                            id="password" 
                            type="password" 
                            name="password"
                            placeholder="confirmer le mot de passe"
                            onChange={(e)=>{setValue({...value, password: e.target.value})}}
                            />
                        </div>
                        <button class="btn btn-primary" type="button">Sauvegarder les changements</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

)
}

export default UpdateProfil;