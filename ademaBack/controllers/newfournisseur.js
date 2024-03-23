import Fournisseur from "../models/newfournisseur.js"
import FournisseurCompte from "../models/adminFournisseur.js"
import Admin from "../models/admin.js"


export const createFournisseur = async (req,res) => {
    
    
    try {
        const fournisseur = await Fournisseur.create(req.body)
        
        res.status(200).json(fournisseur) 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
    
   
}


export const getFournisseurs = async (req,res) =>{

    try {
        const fournisseur = await Fournisseur.find({})
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const getAdminCompte = async (req,res) =>{

    try {
        const {email} = req.body
        const fournisseur = await Admin.findOne({email: email})
        
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const getFournisseurCompte = async (req,res) =>{

    try {
        const {email} = req.body
        const fournisseur = await FournisseurCompte.findOne({email: email})
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const searchFournisseur = async (req,res) =>{

    try {
        const {name} = req.body
        const fournisseur = await Fournisseur.find({name: name})
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const getSingleFournisseur = async (req,res) =>{

    try {
        const {id} = req.params;
        const fournisseur = await Fournisseur.findById(id)
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}
export const getSingleCompteFournisseur = async (req,res) =>{

    try {
        const {email} = req.body;
        
        const fournisseur = await FournisseurCompte.find({email: email})
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const getSingleCompteAdmin = async (req,res) =>{

    try {
        const {id} = req.params;
        const fournisseur = await Admin.findById(id)
        res.status(200).json(fournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const updateFournisseur = async (req,res) =>{

    try {
        const {id} = req.params;
        const fournisseur = await Fournisseur.findByIdAndUpdate(id,req.body)
        if (!fournisseur){
           return res.status(404).json({message:"cannot find this one"})
        }
        const updatedFournisseur = await Fournisseur.findById(id);
        res.status(200).json(updatedFournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}
export const updateFournisseurCompte = async (req,res) =>{

    try {
        const {email,value} = req.body
        const fournisseur = await FournisseurCompte.findOneAndUpdate({email:email},value)
        if (!fournisseur){
           return res.status(404).json({message:"cannot find this one"})
        }
        const updatedFournisseur = await FournisseurCompte.findOne({email:email});
        res.status(200).json(updatedFournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}
export const updateAdminCompte = async (req,res) =>{

    try {
        const {email,value} = req.body
        const fournisseur = await FournisseurCompte.findOneAndUpdate({email:email},value)
        if (!fournisseur){
           return res.status(404).json({message:"cannot find this one"})
        }
        const updatedFournisseur = await Admin.findOne({email:email});
        res.status(200).json(updatedFournisseur) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}

export const deleteFournisseur = async (req,res) =>{

    try {
        const {id} = req.params;
         const fournisseur = await Fournisseur.findByIdAndDelete(id)
       
        res.status(200).json(fournisseur)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})

    }

    
}




