import express from 'express'
export const router = express.Router();


router.get('/perfil', (req,res)=>{
    res.send("esta es la ruta perfil")

})

