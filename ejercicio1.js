// ==============================================================================
// Ejercicio 9: Cálculo de Espacio de Almacenamiento
// Consigna: Escribí una función llamada `calcularEstadisticasDescarga` que reciba
// dos parámetros: `cantArchivos` (String) y `tamanoPromedioMB` (String).
// 1. Convertir ambos parámetros a valores numéricos (Number).
// 2. Calcular el tamaño total (cantArchivos * tamanoPromedioMB).
// 3. Convertir peso total a KB (1 MB = 1024 KB).
// 4. Retornar: "Se descargarán [cantArchivos] archivos con un peso total de [pesoTotalKB] KB."
// ==============================================================================

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const cantidad = Number(cantArchivos);
    const tamanoMB = Number(tamanoPromedioMB);

    const pesoTotalMB = cantidad * tamanoMB;
    const pesoTotalKB = pesoTotalMB * 1024;

    return `Se descargarán ${cantidad} archivos con un peso total de ${pesoTotalKB} KB.`;
}

// Impecable el uso de const, el casteo explícito con Number() y la interpolación con Template Literals.

console.log(calcularEstadisticasDescarga("10", "1.5"));
// "Se descargarán 10 archivos con un peso total de 15360 KB."
