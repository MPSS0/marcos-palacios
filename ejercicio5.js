// ==============================================================================
// Ejercicio 13: Gráfico de Consumo de Memoria
// Consigna: Escribir una función llamada `dibujarGraficoConsumo` que reciba `pasos` (Number)
// y retorne una cadena formando una pirámide de caracteres "█" finalizada en salto de línea.
// ==============================================================================

function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for (let fila = 1; fila <= pasos; fila++) {
        for (let bloque = 1; bloque <= fila; bloque++) {
            grafico += "█";
        }
        grafico += "\n";
    }
    return grafico;
}

// Muy bien la lógica de bucles anidados para construir la pirámide de bloques. Como alternativa recordá que en ES6 contás con `.repeat(fila)` en strings. Preguntelé a la IA que hace este .repeat()

console.log(dibujarGraficoConsumo(3));
// █
// ██
// ███
