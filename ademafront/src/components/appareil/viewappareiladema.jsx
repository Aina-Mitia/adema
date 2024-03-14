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
import SearchIcon from '@mui/icons-material/Search';
import Navbarhome from "../navbar/navbarhome";
import { useGetContext } from '../hooks/useGetContext';
import { useDeleteContext } from "../hooks/useDeleteContext";






const ViewAppareilAdema = () => {

const [data,setData] = useState([]);
const [allData,setAllData] = useState([])
const [select,setSelect]=useState("toutes")
//const socket = io.connect("http://localhost:5000") 
const {user} = useAuthContext()
const {confirmDialog,setConfirmDialog} = useState({isOpen:false, title:''})
const {entity} = useGetContext()




//const {id} = useParams();
const navigate= useNavigate()
const [room,setRoom] = useState("ok")
const [datasearch,setDatasearch] = useState({name:""})
const {dispatch} = useDeleteContext()
const [dialogOpen, setDialogOpen] = useState(false);
const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const actif= async()=>{
    await axios.post('http://localhost:5000/appareil/fournisseurperso',{
        email: entity.data.email
      })
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)
        console.log(entity.data.email);
        console.log(res.data);
    })
    .catch(err=>console.log(err))
  }
  
useEffect(()=>{
    if (entity){
        actif()
    /*await axios.post('http://localhost:5000/appareil/fournisseur',entity.email)
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)
        console.log(entity.email);
    })
    .catch(err=>console.log(err))*/
    //socket.emit("join_room",room)
    /*axios.get('http://localhost:5000/appareils')
    .then((res)=>{
        setAllData(res.data)
        setData(res.data)

    })
    .catch(err=>console.log(err))*/
    
    /*if (user.role==="admin"){
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
        axios.post('http://localhost:5000/appareils',user.name) 
    .then((res)=>{
        //setAllData(res.data)
        setData(res.data)
    })
    .catch(err=>console.log(err))
    }*/
    }
},[entity])
  
/*useEffect( ()=>{
    
   socket.on("receive_data",(datas)=>{
       setData((list)=>[...list,datas])
   })
},[socket])*/




const handleDelete = async (id) => {
     await axios.delete('http://localhost:5000/appareil/'+id)
    .catch(err=>console.log(err))
    await dispatch({type:"delete",payload:data})

    setTimeout(() => {
        navigate("/appareil/adema")
      }, 1000); 

    //setData(appareil)
    
    //socket.emit("join_room",room)
    //socket.emit("send_data",data)
}
const handleSubmitSearch = async (e) => {
    e.preventDefault();
    //socket.emit("join_room",room)
    //socket.emit("send_data",data)
    await axios.post('http://localhost:5000/appareil/search',datasearch) //route mila amboarina
        .then(res=>{
            console.log(res);
            setAllData(res.data)
        setData(res.data)
        })
        .catch(err=>console.log(err))
    
        //closeFunction()
    
    
}

const handlebutton = (e) => {
    //e.preventDefault()
    const choix= e.target.value;
    if (choix === "toutes"){
       
        setData(allData)
        setSelect("toutes")
    } else if (choix === "bureau"){
        const filtered = allData.filter(item=>item.category === "bureau")
        setData(filtered)
        setSelect(choix)
    } else if (choix === "portable"){
        const filteredone = allData.filter(item=>item.category === "portable")
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

/*<DialogComponent
                            title="Modifications"
                            openDialog={openUpdate}
                            setOpenDialog={setOpenUpdate}
                            
                            >
                                <UpdateAppareil idA={item._id} />
                            </DialogComponent> */

const paperStyle = { padding: "40px 20px", width: 1300,height:"540px", margin: "auto" ,position:"relative",top:"30px"}
const searchStyle={position:"absolute",top:130,right:20}

return(
    <div>
        <Navbarhome/>
    <Paper sx={{ width: '100%', overflow: 'hidden',marginTop:"auto" }} style={paperStyle} >
        <Typography variant="h4" gutterBottom>Liste des matériels</Typography> 
        <div >   
        
        <Button variant="contained" sx={{backgroundColor:"#F1513B"}} onClick={()=>{
            //setOpenAdd(true)
           navigate("/appareil/add")
            }}>Ajouter un nouveau matériel</Button>
        
        </div> 

     
        <Box width="250px">
        <TextField value="toutes" label='selectionner la categorie' select fullWidth onChange={handlebutton}  >
        <MenuItem value="toutes">Toutes</MenuItem>
            <MenuItem value="bureau">Bureau</MenuItem>
            <MenuItem value="portable">portable</MenuItem>
        </TextField>
        </Box>
            <form onSubmit={handleSubmitSearch} style={searchStyle}>
            <SearchIcon sx={{position:"absolute",right:20,top:15}}/>
                <TextField  onChange={(e)=>{setDatasearch({...datasearch, name: e.target.value})}}></TextField>
            </form>
        <TableContainer >
        <Table stickyHeader  aria-label="simple table" >
        <TableHead >
                <TableRow >
                    
                    <TableCell style={{ minwidth:"190px",fontWeight:"bold"}}>Nom du produit</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Prix</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Nombre</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Nom du fournisseur</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Email du fournisseur</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Constructeur</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Modele</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Categorie</TableCell>
                    <TableCell  style={{ minwidth:"190px",fontWeight:"bold"}}>Actions</TableCell>

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

                        <TableCell  style={{width:"180px"}}>{item.name}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.prix}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.nombre}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.nom_fournisseur}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.email}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.constructeur}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.modele}</TableCell>
                        <TableCell  style={{width:"180px"}}>{item.category}</TableCell>
                        <TableCell align="right" style={{minWidth:170}}>
                            <Stack direction='row'>
                            
                            <IconButton onClick={(e)=>{
                                e.preventDefault();
                                navigate(`/appareil/view/${item._id}`)

                               
                                }}>
                            
                                <LibraryBooksRoundedIcon/>
    
                            
                            </IconButton>
                            
                            
                            <IconButton onClick={(e)=>{
                                e.preventDefault();
                             navigate(`/appareil/update/${item._id}`)
                               
                                }}>
                                    
                            
                                <EditRoundedIcon/>
                            
                            </IconButton >

                            
                            <IconButton onClick={(e)=>{
                                e.preventDefault();
                                handleDelete(item._id)
                               
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
        
        
    </div>
)
};

export default ViewAppareilAdema