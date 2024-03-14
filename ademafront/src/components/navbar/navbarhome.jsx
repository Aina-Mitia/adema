import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Stack } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { useLogout } from "../hooks/useLogout";
import Img from "../login/adema2.jpg"


const Navbarhome = () => {

    const {logout} = useLogout()

    const handleButton =()=>{
      logout()
    }

    return( 
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#17CF1A"}}>
        <Toolbar>
        <img src={Img} height="55px" width="55px" title='logo' alt='logo'></img>

          <Typography variant="h6"   sx={{ flexGrow:1 }}></Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/appareil/adema"><Button color="inherit"><Typography variant="h8" color="white"  sx={{ flexGrow:1 }}> Materiels</Typography></Button></Link>
            <Button color="inherit"><Typography variant="h8" color="white" sx={{ flexGrow:1 }} onClick={()=>{handleButton()}}> Deconnexion</Typography></Button>
          </Stack>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
     
    )
}

export default Navbarhome;