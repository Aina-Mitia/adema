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
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import io from "socket.io-client"
//import { ToastContainer } from 'react-toastify';



import AddAppareil from './components/appareil/addappareil';
import ViewAppareil from './components/appareil/viewappareil';
import SingleViewAppareil from './components/appareil/singleviewappareil'
import UpdateAppareil from './components/appareil/update';
import ViewFournisseur from './components/fournisseur/viewfournisseur';
import AddFournisseur from './components/fournisseur/addfournisseur';
import SingleViewFournisseur from './components/fournisseur/singleviewfournisseur';
import UpdateFournisseur from './components/fournisseur/update';

import Profil from './components/profil/profil';
import UpdateProfil from './components/profil/updateprofil';

const socket = io.connect("http://localhost:5000") 

function App() {

  const joinRoom = ()=>{
    socket.emit("join_room",data)
  }
  /* 
  - joinRoom est la fonction qui permet de se connecter au realtime de socket.io et le socket.io 
  possede la fonction qui traite la connexion du socket.io 
  - Dans la fonction qui envoye les données(en realtime), nous mettons une fonction await socket.emit("envoye",<callBack>)
  qui permet d'emettre(envoyer) les données du front vers le socket du back socket.on("envoye",<callBack>)
   et dans le callBack de ce dernier, on va faire un socket.to(<id_reference>).emit("recevoir") 
   et on met un socket.on("recevoir")
   dans le front dans un useEffect(). Et on fait aussi un setData useState dans la fontion d'envoye de message  
  */

  return (
    <div className="App">
      
      
       
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/appareil" element={<ViewAppareil />}/>
        <Route path="/appareil/add" element={<AddAppareil />}/>
        <Route path="/appareil/update/:id" element={<UpdateAppareil />}/>
        <Route path="/appareil/delete/:id" element={<ViewAppareil />}/>
        <Route path="/appareil/view/:id" element={<SingleViewAppareil />}/>

        <Route path="/fournisseur" element={<ViewFournisseur />}/>
        <Route path="/fournisseur/add" element={<AddFournisseur />}/>
        <Route path="/fournisseur/update/:id" element={<UpdateFournisseur />}/>
        <Route path="/fournisseur/delete/:id" element={<ViewFournisseur />}/>
        <Route path="/fournisseur/view/:id" element={<SingleViewFournisseur />}/>

        <Route path="/user" element={<Profil />}/>
        <Route path="/user/update" element={<UpdateProfil />}/>


      </Routes>
      
    </div>
  );
}

export default App;
