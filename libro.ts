import mongoose from 'mongoose';

const esquemaLibro = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  fechaPublicacion: { type: Date, required: true },
  isbn: { type: String, required: true, unique: true },
  genero: { type: String, required: true }
});

export default mongoose.model('Libro', esquemaLibro);