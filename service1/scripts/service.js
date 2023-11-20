const express = require('express');
const app = express();
const PORT = 3000; // El puerto en el que se ejecutará el microservicio


// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Puedes ajustar '*' a tu dominio específico en producción.
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();


});

// Ruta para contar palabras
app.get('/contar-palabras', (req, res) => {
    const texto = req.query.texto || ''; // Obtener el texto de la consulta
    const recuento = texto.trim().split(/\s+/).length; // Contar palabras
    
    const textoLimpio = texto.replace(/[^a-zA-Z]/g, '');// Eliminar espacios y caracteres no alfabéticos
    const cantidadLetras = textoLimpio.length; // Contar las letras en el texto limpio

    res.json({ palabras: recuento, letras:cantidadLetras }); // Enviar el recuento como JSON
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Microservicio en funcionamiento en el puerto ${PORT}`);
});