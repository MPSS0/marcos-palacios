// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC) se calcula dividiendo el peso por la altura al cuadrado.
// Escribir una función llamada `bmi` que reciba peso y altura y retorne:
// - "Bajo de peso" si es menor a 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es mayor o igual a 30
// ==============================================================================

function bmi(peso, altura) {
    const indice = peso / (altura * altura);

    if (indice < 18.5) {
        return "Bajo de peso";
    } else if (indice <= 24.9) {
        return "Normal";
    } else if (indice <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// Impecable el cálculo con const indice y la evaluacion ordenada de los rangos numéricos. Aunque siempre prefiero que usen una variable auxiliar para guardar todos los estados a ser evaluado, y retornarla al final de la función:

function bmi(peso, altura) {
    let retorno = "Obeso";
    const indice = peso / (altura * altura);

    if (indice < 18.5) {
        retorno = "Bajo de peso";
    } else if (indice <= 24.9) {
        retorno = "Normal";
    } else if (indice <= 29.9) {
        retorno = "Sobrepeso";
    }

    return retorno
}

console.log(bmi(65, 1.8));   // "Normal"
console.log(bmi(72, 1.6));   // "Sobrepeso"
console.log(bmi(52, 1.75));  // "Bajo de peso"
console.log(bmi(135, 1.7));  // "Obeso"  // "Obeso"
