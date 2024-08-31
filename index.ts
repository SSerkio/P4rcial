import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rutasLibro from './rutas/rutasLibro';

dotenv.config();

const app = express();
const puerto = process.env.PUERTO || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión a MongoDB:', error));

app.use('/libros', rutasLibro);

app.listen(puerto, () => {
  console.log(`El servidor está corriendo en el puerto ${puerto}`);
});