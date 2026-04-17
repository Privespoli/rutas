import { userService, createUserService } from '../services/user.service.js'

// BUSCAR USUARIO (El que ya tenías)
export async function userController(req, res) {
  try {
    const { email } = req.body
    const usuario = await userService(email)
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// CREAR USUARIO (El nuevo)
export async function createUserController(req, res) {
  try {
    const data = req.body
    const usuarioCreado = await createUserService(data)
    res.status(201).json(usuarioCreado)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}