import { dbConfig } from '../config/db.config.js'
import mongoose from 'mongoose' // <--- IMPORTANTE: Importa mongoose aquí

export async function userModel() {
  const connection = await dbConfig() // Esto asegura que estás conectado

  // USA mongoose.Schema en lugar de connection.Schema
  const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    date: { type: Date, default: Date.now }
  })

  // Usamos el objeto connection para verificar si el modelo ya existe
  return connection.models.users || connection.model('users', userSchema, 'users')
}