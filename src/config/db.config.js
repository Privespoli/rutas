import 'dotenv/config'
import mongoose from 'mongoose'

export async function dbConfig() {
  try {
    // Si da error, haz un console.log aquí para ver qué llega:
    // console.log("Mi URI es:", process.env.MONGO_URI); 
    
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("✅ Conectado a MongoDB")
    return connection
  } catch (e) {
    console.log("❌ Error en dbConfig:", e.message)
  }
}