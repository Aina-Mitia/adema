import mongoose from "mongoose";

const newfournisseurSchema = mongoose.Schema(
    {
        name: {
            type : String
        },
         contact: {
            type : Number
        },
        adress: {
            type : String
        },
         email: {
            type : String
        },
        nif: {
            type : String
        },
        stat: {
            type : String
        }
    }
)

const Fournisseur = mongoose.model('fournisseur',newfournisseurSchema)
export default Fournisseur;