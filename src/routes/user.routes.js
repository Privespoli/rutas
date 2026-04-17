import { Router } from 'express'
import { userController, createUserController } from '../controllers/user.controller.js'

const router = Router()

// Ruta para buscar
router.post('/perfil', userController)

// Ruta para crear
router.post('/crear', createUserController)

export default router