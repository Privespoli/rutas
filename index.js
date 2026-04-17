// hecerme el index, este debe ser una api basica get con express con el puerto 3000, debes configurarla para que acepte json

import express from 'express'
import userRouter from './src/routes/user.routes.js'

const api = express()
const PORT = 3000

api.use(express.json())

api.get('/', (req, res) => {
  res.json({ message: 'API running' })
})

api.use('/api', userRouter)

api.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
