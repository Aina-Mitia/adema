import express from "express";
const router = express.Router();


import { createFournisseur,updateFournisseurCompte,getAdminCompte,getFournisseurCompte,getSingleCompteAdmin, updateAdminCompte,getSingleCompteFournisseur ,getFournisseurs, getSingleFournisseur,searchFournisseur, updateFournisseur, deleteFournisseur} from "../controllers/newfournisseur.js";
import { getAppareilFournisseur, getFournisseurAppareil } from "../controllers/logincontrol.js";


router.post("/admin", getFournisseurAppareil)
router.post("/fournisseur/appareil",getAppareilFournisseur)
 router.get("/fournisseurrs",getFournisseurs)
 router.post("/fournisseurr",createFournisseur)
 router.post("/fournisseur/search",searchFournisseur)

router.get("/fournisseur/:id",getSingleFournisseur)
router.post("/fournisseur/getcompte",getSingleCompteFournisseur)
router.post("/admin/getcompte",getSingleCompteAdmin)
router.post("/fournisseur/compte", getFournisseurCompte)
router.post("/admin/compte", getAdminCompte)



// router.post("/fournisseurs", searchingFournisseur) getFournisseurCompte
router.delete("/fournisseur/:id",deleteFournisseur)
router.put("/fournisseur/:id",updateFournisseur)
router.put("/fournisseur/singlecompte",updateFournisseurCompte) //put na post
router.put("/admin/singlecompte",updateAdminCompte)


export default router;