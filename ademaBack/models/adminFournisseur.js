
import mongoose from "mongoose";

const adminFournisseur = mongoose.Schema(
    {
        firstName: {
            type : String
        },
        lastName: {
            type : String,
            
        },
        role: {
            type : String,
            default:"fournisseur"
        },
        
        email: {
            type : String
        },
        password: {
            type : String
        }
    }
)

const FournisseurCompte = mongoose.model('adminFournisseur',adminFournisseur)
export default FournisseurCompte;