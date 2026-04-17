// hecerme el index, este debe ser una api basica get con express con el puerto 3000, debes configurarla para que acepte json

import express from 'express'
import{router} from './src/routes/user.routes.js'
const api = express()
api.use(express.json())

api.get('/', (req, res) => {
  res.json({ message: 'Hola, mundo!' })
})

api.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})
