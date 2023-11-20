const express = require('express');
const app = express();
const PORT = 3001; // El puerto en el que se ejecutará el microservicio


// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Puedes ajustar '*' a tu dominio específico en producción.
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();


});

// Ruta para contar palabras
app.get('/revertir', (req, res) => {
    const texto = req.query.texto || ''; // Obtener el texto de la consulta
    const textoRever = texto.split('').reverse().join(''); // Revertimos el texto
    
    res.json({ revertido: textoRever}); // Enviar el recuento como JSON
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Microservicio en funcionamiento en el puerto ${PORT}`);
});