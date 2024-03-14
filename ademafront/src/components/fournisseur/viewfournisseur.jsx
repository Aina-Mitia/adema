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
//import io from "socket.io-client";
import DialogConfirm from "../dialog/confirmdialog";
import { useAuthContext } from "../hooks/useAuthContext";





const ViewFournisseur = () => {

const [data,setData] = useState([]);
const [allData,setAllData] = useState([])
const [select,setSelect]=useState("toutes")
//const socket = io.connect("http://localhost:5000") 



//const {id} = useParams();
const navigate= useNavigate()
const [room,setRoom] = useState("ok")
const [change,setChange] = useState(null)
const [dialogOpen, setDialogOpen] = useState(false);
const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const [datasearch,setDatasearch] = useState({name:""})


useEffect( ()=>{
    //socket.emit("join_room",room)

    // code vaovao

    axios.get('http://localhost:5000/fournisseurs')
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)
    })
    .catch(err=>console.log(err))

    

   /* socket.on("receive_data",(datas)=>{
        setData((list)=>[...list,datas])
    })*/
},[])

/*socket.on("receive_data",(datas)=>{
    setData((list)=>[...list,datas])
    console.log(socket)
    console.log(datas)
    setChange(datas)
})

socket.on("delete_data",(datas)=>{
    // setData((list)=>[...list,datas])
    setData(datas)
    console.log(socket)
    console.log(datas)
    // setChange(datas)
})*/

/*useEffect( ()=>{
    
    socket.on("receive_data",(datas)=>{
        setData((list)=>[...list,datas])
        console.log(socket)
        console.log(datas)
        setChange(datas)
    })
 },[change])*/

const handleDelete =  (id) => {
     axios.delete('http://localhost:5000/fournisseur/'+id)
    .catch(err=>console.log(err))
    
    /*await axios.get('http://localhost:5000/fournisseurs')
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)
        //socket.emit("join_room",room)
        // socket.emit("send_data",res.data)
        // socket.emit("predelete_data",res.data)

       
    })
    .catch(err=>console.log(err))*/

    //console.log(data);
    // socket.emit("join_room",room)
    //socket.emit("send_data",data)
    // await socket.emit("predelete_data",data)
}

const handlebutton = (e) => {
    e.preventDefault()
    const choix= e.target.value;
    if (choix === "toutes"){
        setSelect("toutes")
        setData(allData)
    } else if (choix === "electrique"){
        const filtered = allData.filter(item=>item.modele === "electrique")
        setSelect("electrique")
        setData(filtered)
    } else if (choix === "batiment"){
        const filteredone = allData.filter(item=>item.modele === "batiment")
        setSelect("batiment")    
        setData(filteredone)    }
    
        //setData([...data,nom_fournisseur=choix])
        //data[0][nom_fournisseur]
        
}
const {confirmDialog,setConfirmDialog} = useState({isOpen:false, title:''})


/*const handlechangeselect = (e) => {
    const choix= e.target.value;

    if (choix === "toutes"){
        setSelect("toutes")
    } else if (choix === "electrique"){
        setSelect("electrique")
    } else if (choix === "batiment"){
        setSelect("batiment")    
    }
}Listes des fournisseur
*/
return(
    <div>
        <Navbar/>
        <Paper sx={{ width: '300px', overflow: 'hidden',marginTop:"auto" }}>
        <Typography variant="h3" gutterBottom></Typography> 
        <div >   
        <Link to="/fournisseur/add">
        <Button variant="contained" color="success">Ajouter un nouveau fournisseur</Button>
        </Link>
        </div>
       
       <Box >
        <TextField value="toutes" label='selectionner la categorie' select fullWidth onChange={handlebutton}  >
            <MenuItem value="toutes">Toutes</MenuItem>
            <MenuItem value="electrique">Electrique</MenuItem>
            <MenuItem value="batiment">Batiment</MenuItem>
        </TextField>
        </Box>
       

        <TableContainer sx={{ maxHeight: 440 }} >
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell align="right" style={{minWidth:170}}>Nom du fournisseur</TableCell>
                    <TableCell align="right" style={{minWidth:170}}>Contact</TableCell>
                    <TableCell align="right" style={{minWidth:170}}>adresse</TableCell>
                    <TableCell align="right" style={{minWidth:170}}>Email</TableCell>
                    <TableCell align="right" style={{minWidth:170}}>NIF</TableCell>
                    <TableCell align="right" style={{minWidth:170}}>STAT</TableCell>
                    <TableCell align="right" style={{minWidth:170}}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item,index)=>{
                /* Informations concernant le fournisseur: 
                    nom, NIF, STAT, adresse, email, contact

                    operations faites sur le fournisseur:
                    En sql, nom_appareil est renommé E-mail
                    On ajoute nif et stat
                */
                    return (<TableRow key={index}> 
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.contact}</TableCell>
                        <TableCell>{item.adress}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.nif}</TableCell>
                        <TableCell>{item.stat}</TableCell>
                        <TableCell>
                            <Stack direction='row'>
                            <IconButton>
                            <Link to={`/fournisseur/view/${item._id}`}>
                                <LibraryBooksRoundedIcon/>
    
                            </Link>
                            </IconButton>
                            <IconButton>
                            <Link to={`/fournisseur/update/${item._id}`}>
                                <EditRoundedIcon/>
                            </Link>
                            </IconButton>
                            <IconButton onClick={handleOpenDialog}>
                                <DeleteRoundedIcon/>
                                <DialogConfirm
                                title="Suppression"
                                onFormSubmit={handleDelete(item._id)}
                                open={dialogOpen} 
                                onClose={handleCloseDialog}
                                
                                >
                                    Etes-vous sure de supprimer?
                                </DialogConfirm>
                            </IconButton>
                            </Stack>
                        </TableCell>
                    </TableRow>
                )})}
            </TableBody>
            </Table>
        </TableContainer>
        </Paper>
     
        

    </div>
)
};

export default ViewFournisseur;