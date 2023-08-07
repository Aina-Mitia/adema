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


const ViewAppareil = () => {

const [data,setData] = useState([]);
const [allData,setAllData] = useState([])
const [select,setSelect]=useState("toutes")


//const {id} = useParams();
const navigate= useNavigate()

useEffect( ()=>{
     axios.get('http://localhost:5000/appareils')
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)

    })
    .catch(err=>console.log(err))
},[])

const handleDelete =  (id) => {
     axios.delete('http://localhost:5000/appareil/'+id)
    .then(res=>{
        //console.log(res)
        window.location.reload();
    })
    .catch(err=>console.log(err))
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






return(
    <div>
        <Navbar/>
    <Paper>
        <Typography variant="h3" gutterBottom>Listes de materiels</Typography> 
        <div >   
        
        <Button variant="contained" color="success" onClick={()=>{
            setOpenAdd(true)
           
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
                                setOpenConfirm(true)
                               
                                }}>
                                <DeleteRoundedIcon/>
                            </IconButton>
                            <DialogConfirm
                            title="Suppression"
                            openDialogConfirm={openConfirm}
                            setOpenDialogConfirm={setOpenConfirm}
                            action={handleDelete}
                            element={item._id}
                            >
                                Etes-vous sure de supprimer?
                            </DialogConfirm>
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
            <AddAppareil/>
        </DialogComponent>
        
    </div>
)
};

export default ViewAppareil