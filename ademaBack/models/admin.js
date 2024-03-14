
import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
    {
        name: {
            type : String
        },
        lastname: {
            type : String,
            
        },
        role: {
            type : String,
            default:"admin"
        },
        
        email: {
            type : String
        },
        password: {
            type : String
        }
    }
)

const Admin = mongoose.model('admin',adminSchema)
export default Admin;