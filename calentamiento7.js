// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter, y retorne el número de veces que aparece el carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

// Impecable el uso de contador++ y la comparación estricta === dentro del bucle.

console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m"));       // 0 (distingue mayúsculas/minúsculas)
console.log(numeroDeCaracteres("eeee", "e"));        // 4
