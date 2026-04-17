import { userModel } from '../models/user.model.js'

// BUSCAR (El que ya tenías)
export async function userService(email) {
  const usuarioModel = await userModel()
  return await usuarioModel.findOne({ 'email': email })
}

// CREAR (El nuevo)
export async function createUserService(data) {
  const usuarioModel = await userModel()
  const nuevoUsuario = new usuarioModel(data) // Crea la instancia con nombre, apellido, etc.
  return await nuevoUsuario.save() 
}