// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de números
// y retorne un nuevo arreglo con cada número multiplicado por 2.
// ==============================================================================

function duplicar(arreglo) {
    return arreglo.map(numero => numero * 2);
}

// ¡Excelente uso del método de orden superior .map()! Muy sintético y funcional.

console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([]));        // []
