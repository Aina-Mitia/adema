import express from "express"
const router = express.Router();
import {signUpUser} from "../controllers/signup.js"

router.post("/signup",signUpUser)

export default router;