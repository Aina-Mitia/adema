import express from "express"
const router = express.Router();
import {signUpUser,signUpFournisseur} from "../controllers/signup.js"

router.post("/signup",signUpUser)
router.post("/signupFournisseur",signUpFournisseur)
export default router;