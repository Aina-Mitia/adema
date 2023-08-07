import mongoose from "mongoose";

const fournisseurSchema = mongoose.Schema(
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

const Fournisseur = mongoose.model('fournisseur',fournisseurSchema)
export default Fournisseur;