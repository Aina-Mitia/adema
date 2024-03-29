import express from "express";
const router = express.Router();
// //import pool from "../server.js"
// import {getAppareils, createAppareil,searching, getSingleAppareil, deleteAppareil, updateAppareil} from "../controllers/appareilcontrol.js"

import {createAppareil,getAppareils,getAppareilFournisseur, getSingleAppareil,searchFournisseur, updateAppareil, deleteAppareil, getApp,getInformationFournisseur} from  "../controllers/appareilcontrol.js"


router.post("/appareil/fournisseur",getApp)
router.post("/appareil/fournisseurperso",getAppareilFournisseur)
router.get("/appareils",getAppareils)
router.post("/appareils",getInformationFournisseur)
router.post("/appareil",createAppareil)
router.post("/appareil/search",searchFournisseur)
router.get("/appareil/:id",getSingleAppareil)
// router.post("/appareils",searching)
// //router.get("/appareil",fournisseurdAppareil)
router.delete("/appareil/:id",deleteAppareil)
router.put("/appareil/:id",updateAppareil)

export default router;

// /*router.post('/', async (req,res) => {
//     const { nomProduit, prix, nomFounisseur, description } = req.body;
//     try {
//         const conn = pool.getConnection();
//         await conn.query("INSERT INTO appareil(name,prix,nom_fournisseur,description) VALUES(?,?,?,?)",[{ nomProduit, prix, nomFounisseur, description }])
        
        
//     } catch (error) {
//         console.log(error);
//     }
// });

// router.get('/', async (req,res) =>{
//     try {
//         const { nomProduit, prix, nomFounisseur, description } = data;
//         const conn = pool.getConnection();
//         await conn.query("INSERT INTO appareil(name,prix,nom_fournisseur,description) VALUES(?,?,?,?)",[{ nomProduit, prix, nomFounisseur, description }])
//     } catch (error) {
//         console.log(error);
//     }
// });

// router.delete('/:id', (req,res) =>{
//     let id = req.params.id;
//     const conn = pool.getConnection();
//     req.getConnection((error,conn) =>{
//         if(error){
//             console.log(error);
//             res.status(500).render('erreur',{error});
//         } else {
//             conn.query("DELETE FROM appareil WHERE id=?",[id],(error,result)=>{
//                 if (error) {
//                     console.log(error);
//                     res.status(500).render('erreur',{error});
//                 } else{
//                     res.status(200).json({routeRacine:'/'});
//                 }
//             })
//         }
//     }

//     )
// });

// router.put('/:id', (req,res) => {
//     const {id} = req.params.id;
//     const conn = pool.getConnection();
//     const product = conn.query("SELECT FROM appareil WHERE id=?",[id])
//     try {
//        const onproduct = product.findByIdAndUpdate(id, req.body);
//         if (!onproduct){
//             res.status(404).json({message:'ce produit ne existe pas'})
//         }
//         res.status(200).json(onproduct)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })
// */

