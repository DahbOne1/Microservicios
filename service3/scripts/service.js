const express = require('express');
const app = express();
const PORT = 3002; // El puerto en el que se ejecutará el microservicio
const numberToWords = require('number-to-words');

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Puedes ajustar '*' a tu dominio específico en producción.
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();


});

// Ruta para contar palabras
app.get('/convertir', (req, res) => {
    //const numero = req.query.texto || ''; // Obtener el texto de la consulta
    
    const number = parseInt(req.query.texto);
    if(isNaN(number)){
        res.send("NaN");
    } else {
        const result = numberToWords.toWords(number, {locale: 'es'})
        //res.send(result);
        res.json({ convertido: result});
    }
    
    //let textoConver = "";

      // Arreglos de palabras para construir la representación en letras
/*    var unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    var decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    var especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    var centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];


    function convertirHastaMil(num) {
        if (num < 10) {
          return unidades[num];
        } else if (num >= 10 && num < 20) {
          return especiales[num - 10];
        } else {
          var unidad = num % 10;
          var decena = Math.floor(num / 10) % 10;
          var centena = Math.floor(num / 100);
    
          var resultado = centenas[centena];
    
          if (decena > 0 || unidad > 0) {
            resultado += ' ' + decenas[decena];
    
            if (unidad > 0) {
              resultado += ' y ' + unidades[unidad];
            }
          }
    
          return resultado;
        }
      }
      
    // Validar rango del número
    if (numero < 0 || numero > 1000000000) {
        textoConver = "Número fuera de rango";
    }

    // Manejar casos especiales de cero y mil millones
    if (numero == 0) {
        textoConver = "cero";
    }

    if (numero == 1000000000) {
        textoConver = "mil millones";
    }

     // Dividir el número en partes para manejar millones, miles y unidades
    var millones = Math.floor(numero / 1000000);
    var miles = Math.floor((numero % 1000000) / 1000);
    var unidadesRestantes = numero % 1000;

    if (millones > 0) {
        textoConver += convertirHastaMil(millones) + ' millones';
      }
    
      if (miles > 0) {
        if (millones > 0) {
          textoConver += ' ';
        }
        textoConver += convertirHastaMil(miles) + ' mil';
      }
    
      if (unidadesRestantes > 0) {
        if (millones > 0 || miles > 0) {
          textoConver += ' ';
        }
        textoConver += convertirHastaMil(unidadesRestantes);
      }
*/
    
    
    //res.json({ convertido: textoConver}); // Enviar el recuento como JSON
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Microservicio en funcionamiento en el puerto ${PORT}`);
});

