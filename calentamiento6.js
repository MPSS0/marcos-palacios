// ==============================================================================
// Ejercicio 6: Imprimir Arreglo
// Consigna: Escribir una función llamada `imprimirArreglo` que reciba un arreglo
// de elementos e imprima cada uno en la consola en una línea separada.
// ==============================================================================

function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// Muy bien recorrido con bucle for. Como variante moderna podés usar for...of para acceder directo a cada elemento.

imprimirArreglo([1, "Hola", 2, "Mundo"]);
// 1
// Hola
// 2
// Mundo
