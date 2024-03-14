
import mongoose from "mongoose";

const adminFournisseur = mongoose.Schema(
    {
        name: {
            type : String
        },
        lastname: {
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