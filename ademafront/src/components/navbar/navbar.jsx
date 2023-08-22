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

const Navbar = () => {

    const {logout} = useLogout()

    const handleButton =()=>{
      logout()
    }

    return( 
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <AirplanemodeActiveIcon/>
          </IconButton>
          <Typography variant="h6"   sx={{ flexGrow:1 }}></Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/fournisseur"><Button color="inherit"><Typography variant="h8" color="white" sx={{ flexGrow:1 }}> Fournisseurs </Typography></Button></Link>
            <Link to="/appareil"><Button color="inherit"><Typography variant="h8" color="white"  sx={{ flexGrow:1 }}> Materiels</Typography></Button></Link>
            <Link to="/user"><Button color="inherit"><Typography variant="h8" color="white" sx={{ flexGrow:1 }}> Profil</Typography></Button></Link>
            <Button color="inherit"><Typography variant="h8" color="white" sx={{ flexGrow:1 }} onClick={handleButton}> Deconnexion</Typography></Button>
          </Stack>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
     
    )
}

export default Navbar;