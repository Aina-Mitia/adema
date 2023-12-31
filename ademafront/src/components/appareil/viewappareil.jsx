import React, { useEffect } from "react";
import { useState } from "react";
import {  useParams, Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from '../navbar/navbar'
import{Table,TableContainer, Paper,TableHead, TableBody,TableRow,TableCell} from '@mui/material'
import { Button,IconButton,Stack } from "@mui/material";
import { Box,TextField,MenuItem } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded"
import Typography from "@mui/material/Typography";
import DialogComponent from "../dialog/dialog";
import DialogConfirm from "../dialog/confirmdialog";
import AddAppareil from "./addappareil";
import SingleViewAppareil from "./singleviewappareil";
import UpdateAppareil from "./update";
import io from "socket.io-client";
import { useEntity } from "../hooks/useEntity";
import { useAuthContext } from "../hooks/useAuthContext";



const ViewAppareil = () => {

const [data,setData] = useState([]);
const [allData,setAllData] = useState([])
const [select,setSelect]=useState("toutes")
const socket = io.connect("http://localhost:5000") 
const {entity} = useEntity()
const {user} = useAuthContext()
const {confirmDialog,setConfirmDialog} = useState({isOpen:false, title:''})



//const {id} = useParams();
const navigate= useNavigate()
const [room,setRoom] = useState("ok")


useEffect( ()=>{
    socket.emit("join_room",room)

    if (user.role==="admin"){
     axios.get('http://localhost:5000/appareils')
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)

    })
    .catch(err=>console.log(err))
    }
    socket.on("receive_data",(datas)=>{
        setData((list)=>[...list,datas])
    })

    if (user.role==="fournisseur"){
        axios.post('http://localhost:5000/appareil/fournisseur',entity.name) 
    .then((res)=>{
        //setAllData(res.data)
        setData(res.data)
    })
    .catch(err=>console.log(err))
    }

},[])

/*useEffect( ()=>{
    
   socket.on("receive_data",(datas)=>{
       setData((list)=>[...list,datas])
   })
},[socket])*/




const handleDelete =  (id) => {
     axios.delete('http://localhost:5000/appareil/'+id)
    .catch(err=>console.log(err))
    //setData(appareil)
    
    socket.emit("join_room",room)
    socket.emit("send_data",data)
}

const handlebutton = (e) => {
    //e.preventDefault()
    const choix= e.target.value;
    if (choix === "toutes"){
       
        setData(allData)
        setSelect("toutes")
    } else if (choix === "electrique"){
        const filtered = allData.filter(item=>item.modele === "electrique")
        setData(filtered)
        setSelect(choix)
    } else if (choix === "batiment"){
        const filteredone = allData.filter(item=>item.modele === "batiment")
        setData(filteredone)  
        setSelect(choix)
    }
    
        //setData([...data,nom_fournisseur=choix])
        //data[0][nom_fournisseur]
        //<Link to="/appareil/add">
        
}

const [openAdd,setOpenAdd] = useState(false)
const [openConfirm,setOpenConfirm] = useState(false)
const [openRead,setOpenRead] = useState(false)
const [openUpdate,setOpenUpdate] = useState(false)

const closeDialog = () =>{
    setOpenAdd(false)
}




return(
    <div>
        <Navbar/>
    <Paper>
        <Typography variant="h3" gutterBottom>Listes de materiels</Typography> 
        <div >   
        
        <Button variant="contained" color="success" onClick={()=>{
            //setOpenAdd(true)
           navigate("/appareil/add")
            }}>Ajouter un nouveau appareil</Button>
        
        </div> 

     
        <Box width="250px">
        <TextField value="toutes" label='selectionner la categorie' select fullWidth onChange={handlebutton}  >
            <MenuItem value="toutes">Toutes</MenuItem>
            <MenuItem value="electrique">Electrique</MenuItem>
            <MenuItem value="batiment">Batiment</MenuItem>
        </TextField>
        </Box>

        <TableContainer >
        <Table aria-label="simple table">
        <TableHead>
                <TableRow>
                    
                    <TableCell>Nom du produit</TableCell>
                    <TableCell>Prix</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Nom du fournisseur</TableCell>
                    <TableCell>Constructeur</TableCell>
                    <TableCell>Modele</TableCell>
                    <TableCell>Categorie</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item,index)=>{
                /* Informations concernant le materiel: 
                    designation(nom), constructeur, modele, type du materiel, unite(isany), description

                    operations faites sur l'appareil:
                    ajouter les colonnes: constructeur, modele, description
                    on ajoute category
                    to={`/appareil/view/${item._id}`}
                    to={`/appareil/update/${item._id}`}

                    a ajouter sur dialogConfirm:  action={handleDelete}
        element={item._id}

        socket.on("receive_data")
                */
                    return (<TableRow key={index}>

                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.prix}</TableCell>
                        <TableCell>{item.nombre}</TableCell>
                        <TableCell>{item.nom_fournisseur}</TableCell>
                        <TableCell>{item.constructeur}</TableCell>
                        <TableCell>{item.modele}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                            <Stack direction='row'>
                            <DialogComponent
                            title="Informations"
                            openDialog={openRead}
                            setOpenDialog={setOpenRead}
                            
                            >
                                <SingleViewAppareil idA={item._id} />
                            </DialogComponent>
                            <IconButton onClick={(e)=>{
                                e.preventDefault();
                                setOpenRead(true)
                               
                                }}>
                            
                                <LibraryBooksRoundedIcon/>
    
                            
                            </IconButton>
                            
                            <DialogComponent
                            title="Modifications"
                            openDialog={openUpdate}
                            setOpenDialog={setOpenUpdate}
                            
                            >
                                <UpdateAppareil idA={item._id} />
                            </DialogComponent>
                            <IconButton onClick={(e)=>{
                                e.preventDefault();
                                setOpenUpdate(true)
                               
                                }}>
                            
                                <EditRoundedIcon/>
                            
                            </IconButton >

                            
                            <IconButton onClick={(e)=>{
                                e.preventDefault();
                                setConfirmDialog({
                                    isOpen:true,
                                    title:'Etes-vous sure de supprimer?',
                                    onConfirm:()=>{handleDelete(item._id)}
                                })
                               
                                }}>
                                <DeleteRoundedIcon/>
                            </IconButton>
                            
                            </Stack>
                        </TableCell>
                    </TableRow>
                 
                )})}
            </TableBody>
        
        </Table>
        </TableContainer>
        </Paper>
        <DialogComponent
        title="Ajouter"
        openDialog={openAdd}
        setOpenDialog={setOpenAdd}
        >
            <AddAppareil closeFunction={closeDialog}/>
        </DialogComponent>
        <DialogConfirm
        
        DialogConfirm={confirmDialog}
        setOpenDialogConfirm={setConfirmDialog}
        
        
        >
            Etes-vous sure de supprimer?
        </DialogConfirm>
        
    </div>
)
};

export default ViewAppareil