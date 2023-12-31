
import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
    {
        firstName: {
            type : String
        },
        lastName: {
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