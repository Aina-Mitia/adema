import mongoose from "mongoose";

const appareilSchema = mongoose.Schema(
    {
        name: {
            type : String
        },
        prix: {
            type : Number
        },
        nombre: {
            type : Number
        },
        nom_fournisseur: {
            type : String
        },
        constructeur: {
            type : String
        },
        modele: {
            type : String
        },
        category: {
            type : String
        },
        description: {
            type : String
        }
    }
)

const Appareil = mongoose.model('appareil',appareilSchema)
export default Appareil;