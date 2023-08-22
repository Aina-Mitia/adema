import express from "express"
const router = express.Router();
import {loginUser} from "../controllers/logincontrol.js"

router.post("/login/user",loginUser)

export default router;