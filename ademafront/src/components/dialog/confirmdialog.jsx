import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"



const DialogConfirm = (props) =>{

    const {id} = useParams();
    const {children,onFormSubmit,onClose,open,title  } = props; //manomboka eo @ onFormSubmit no tsizy
    //,  DialogConfirm={isOpen,title} , setDialogConfirm
    const handleSubmit = () => {
        // Validation basique du formulaire (vous pouvez ajouter des validations plus avancées ici)
        
          onFormSubmit(id); // Appel de la fonction onFormSubmit passée depuis le composant parent avec les données du formulaire
          //setFormData({ name: '', email: '' }); // Réinitialisation des données du formulaire après soumission
          onClose(); // Fermeture du dialogue
        
      };
      const handleClose = () => {
        onClose();
      };
    //const [open,setOpen] = useState(false)

    return(
        <div>
            <Dialog open={open}>
                <DialogTitle>
                    <div style={{display:"flex"}}>
                        <Typography variant="h6" component="div" style={{flexGrow:1}}>
                            {title}
                        </Typography>
                        <Button onClick={handleClose}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent >
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>NON</Button>
                    <Button onClick={handleSubmit}>OUI</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default DialogConfirm;