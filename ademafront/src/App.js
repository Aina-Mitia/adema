//import { MainPrimary } from './main_test';
import './App.css';
//import { Contenu } from './contenu';
//import { Header } from './header';
//import { MainSecond } from './maintester';
//import { Principal } from './principal';
import Home from './components/home/home';

//import { Main } from './main';
//import Navbar from './navbar';
import { Route, Routes} from 'react-router-dom';
import { useNavigate, Navigate } from "react-router-dom";
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import LoginAdmin from './components/login/loginAdmin'
import io from "socket.io-client"
//import { ToastContainer } from 'react-toastify';



import AddAppareil from './components/appareil/addappareil';
import ViewAppareil from './components/appareil/viewappareil';
import SingleViewAppareil from './components/appareil/singleviewappareil'
import UpdateAppareil from './components/appareil/update';
import ViewAppareilAdema from './components/appareil/viewappareiladema'; //ViewAppareilAdema

import ViewFournisseur from './components/fournisseur/newview';
import AddFournisseur from './components/fournisseur/addfournisseur';
import SingleViewFournisseur from './components/fournisseur/singleviewfournisseur';
import UpdateFournisseur from './components/fournisseur/update';

import Profil from './components/profil/profil';
import UpdateProfil from './components/profil/updateprofil';
import { useAuthContext } from './components/hooks/useAuthContext';
import Auth from './components/auth/auth';
import { useEntity } from './components/hooks/useEntity';
import { useGetContext } from './components/hooks/useGetContext';
import Navbar from './components/navbar/navbar';
import SignupF from './components/signup/signupFour';
import Profilfournisseur from './components/profil/profilfournisseur';
 //const socket = io.connect("http://localhost:5000") 

function App() {
  const {user} = useAuthContext() //anamboarana ny protedtion route
  const {entity} = useGetContext()
  const navigate = useNavigate();


 /* 
   const joinRoom = ()=>{
     socket.emit("join_room",data)  // dans le handleSubmit frontend login
   }  //dia asiana state iray asiana valeur anaty validation login dia io no solon'ny data

   //backend
   socket.on("join_room",(data)=>{
    socket.join(data)
   })

   //frontend
   // dans le handleSubmit frontend validation des données
   const validate = () =>{
    socket.emit("send_data",data)
   }

    //backend
   socket.on("send_data",(data)=>{
    socket.emit("receive_data",data)
   })

   //frontend
   useEffect( ()=>{
     socket.on("receive_data",(data)=>{

    })
},[])
    
  
  
 
  - joinRoom est la fonction qui permet de se connecter au realtime de socket.io et le socket.io 
  possede la fonction qui traite la connexion du socket.io 
  - Dans la fonction qui envoye les données(en realtime), nous mettons une fonction await socket.emit("envoye",<callBack>)
  qui permet d'emettre(envoyer) les données du front vers le socket du back socket.on("envoye",<callBack>)
   et dans le callBack de ce dernier, on va faire un socket.to(<id_reference>).emit("recevoir") 
   et on met un socket.on("recevoir")
   dans le front dans un useEffect(). Et on fait aussi un setData useState dans la fontion d'envoye de message  
  
  couleur vert
  #33FF46
  #33FF58

  ireto avy no miala:

   */

  return (
    <div className="App">
      
      
       
       <Routes>
        <Route path="/" element={  entity? (<ViewAppareilAdema/>) : user? (<ViewAppareil/>) : (<Navigate to="/login"/>)}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup/fournisseur" element={<SignupF/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/login/admin" element={<LoginAdmin/>}/>


        <Route path="/appareil/adema" element={<ViewAppareilAdema/>}/> 
        <Route path="/appareil" element={<ViewAppareil />}/>
        <Route path="/appareil/add" element={<AddAppareil />}/>
        <Route path="/appareil/update/:id" element={<UpdateAppareil />}/>
        <Route path="/appareil/delete/:id" element={<ViewAppareil />}/>
        <Route path="/appareil/view/:id" element={<SingleViewAppareil />}/>

        <Route path="/fournisseur" element={ <ViewFournisseur /> }/>
        <Route path="/fournisseur/add" element={ <AddFournisseur />}/>
        <Route path="/fournisseur/update/:id" element={ <UpdateFournisseur />}/>
        <Route path="/fournisseur/delete/:id" element={<ViewFournisseur />}/>
        <Route path="/fournisseur/view/:id" element={<SingleViewFournisseur />}/>

        <Route path="/user" element={<Profil />}/>
        <Route path="/user/update/:id" element={<UpdateProfil />}/>
        <Route path="/user/fournisseur" element={<Profilfournisseur />}/>


      </Routes>
      
    </div>
  );
}

export default App;
