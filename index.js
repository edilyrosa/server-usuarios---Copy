//TODO
import { supabase } from "./supabaseClient.js";
import express from "express"
import cors from 'cors'
const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('<h1>servidor up</h1>')
}) 

//TODO
// app.get('/usuarios', async (req, res) => {
//     const { data, error } = await supabase //****AQUIIIII!!*****
//       .from('usuarios')
//       .select('*')  // Selecciona todas las columnas
  
//     if (error) {
//       console.error('Error al obtener usuarios:', error)
//       return res.status(500).send('Error 500: Error en el servidor al obtener usuarios')
//     }
  
//     res.json(data) // Envía los usuarios como JSON
//   })


app.get('/usuarios', async (req, res) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  if (error) {
    console.error('Error al obtener usuarios:', error);
    return res.status(500).send('Error 500: Error en el servidor al obtener usuarios');
  }

  res.json(data);
});

// Middleware catch-all para rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send('Error 404: Error en el endpont de la URL');
});


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})