function contarPalabras() {
    const texto = document.getElementById('texto').value;
    fetch(`http://localhost:3000/contar-palabras?texto=${texto}`)
        .then(response => response.json())
        .then(data => {
            const stringPalabras = "El recuento de palabras es: " +  data.palabras;
            const stringLetras = "El recuento de letras es: " +  data.letras;

            const palabrasP = document.createElement("p");
            const letrasP = document.createElement("p");
            const resultadoElement = document.getElementById('resultado');

            while (resultadoElement.firstChild) {
                resultadoElement.removeChild(resultadoElement.firstChild);
            }
            
            const resultadoPalabras = document.createTextNode(stringPalabras);
            const resultadoLetras = document.createTextNode(stringLetras);

            palabrasP.appendChild(resultadoPalabras);
            letrasP.appendChild(resultadoLetras);

            resultadoElement.appendChild(palabrasP);
            resultadoElement.appendChild(letrasP);
            

        })
        .catch(error => console.error('Error al consumir el microservicio: ', error));
}



function revertirTexto() {
    const texto = document.getElementById('texto').value;
    fetch(`http://localhost:3001/revertir?texto=${texto}`)
        .then(response => response.json())
        .then(data => {
            const stringResultado = "El texto revertido es: " +  data.revertido;

            const resultadoP = document.createElement("p");
            const resultadoElement = document.getElementById('resultado');
            while (resultadoElement.firstChild) {
                resultadoElement.removeChild(resultadoElement.firstChild);
            }

            const resultadoTexto = document.createTextNode(stringResultado);

            resultadoP.appendChild(resultadoTexto);
            resultadoElement.appendChild(resultadoP);

           
        })
        .catch(error => console.error('Error al consumir el microservicio: ', error));
}



function convertirNumero() {
    const texto = document.getElementById('texto').value;
    fetch(`http://localhost:3002/convertir?texto=${texto}`)
        .then(response => response.json())
        .then(data => {

            const stringNumero = "El número en texto es: " +  data.convertido;

            const numeroP = document.createElement("p");
            const resultadoElement = document.getElementById('resultado');
            while (resultadoElement.firstChild) {
                resultadoElement.removeChild(resultadoElement.firstChild);
            }

            const resultadoNumero = document.createTextNode(stringNumero);
            numeroP.appendChild(resultadoNumero);
            resultadoElement.appendChild(numeroP);

        })
        .catch(error => console.error('Error al consumir el microservicio: ', error));
}