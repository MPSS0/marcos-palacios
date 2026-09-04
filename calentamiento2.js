// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    }
    return 0;
}

// Muy bien resuelto, Marcos. Recordá como convención que siempre sugerimos declarar una variable auxiliar inicializada (ej. let impuesto = 0) para mantener un solo punto de retorno (single return point) al final.

console.log(calcularImpuestos(18, 1000));  // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000));  // 0
console.log(calcularImpuestos(30, 500));   // 0
