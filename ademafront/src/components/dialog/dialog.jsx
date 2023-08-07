import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"


const DialogComponent = (props) =>{


    const {children, title,openDialog,setOpenDialog} = props; 
   

    const [open,setOpen] = useState(false)


    return(
        <div>
            <Dialog open={openDialog}>
                <DialogTitle >
                    <div style={{display:"flex"}}>
                        <Typography variant="h6" component="div" style={{flexGrow:1}}>
                            {title}
                        </Typography>
                        <Button onClick={()=>{setOpenDialog(false)}}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default DialogComponent;