import express from "express"
const router = express.Router();
import {loginUser,loginFournisseur} from "../controllers/logincontrol.js"
router.post("/login/user",loginUser)
router.post("/login/fournisseur", loginFournisseur)
export default router;