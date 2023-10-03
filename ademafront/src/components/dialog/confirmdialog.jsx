import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"



const DialogConfirm = (props) =>{


    const {children,  DialogConfirm , setDialogConfirm  } = props; 

    const [open,setOpen] = useState(false)

    return(
        <div>
            <Dialog open={DialogConfirm.isOpen}>
                <DialogTitle>
                    <div style={{display:"flex"}}>
                        <Typography variant="h6" component="div" style={{flexGrow:1}}>
                            {DialogConfirm.title}
                        </Typography>
                        <Button onClick={()=>{setDialogConfirm({...DialogConfirm,isOpen:false})}}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent >
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{setDialogConfirm({...DialogConfirm,isOpen:false})}}>NON</Button>
                    <Button onClick={()=>{DialogConfirm.onConfirm}}>OUI</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default DialogConfirm;