// ==============================================================================
// Ejercicio 11: Simulación de Test de Red (Reporte Ping)
// Consigna: Escribir una función llamada `simularReportePing` que reciba `intentosMaximos`.
// Recorrer desde 1 hasta `intentosMaximos`:
// - Si el intento es múltiplo de 5, mostrar "Error crítico de hardware en intento X" y detener (break).
// - Si es par, mostrar "Intento X: Exitoso".
// - Si es impar, mostrar "Intento X: Fallido".
// ==============================================================================

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {
        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        } else if (intento % 2 === 0) {
            console.log(`Intento ${intento}: Exitoso`);
        } else {
            console.log(`Intento ${intento}: Fallido`);
        }
    }
}

// Impecable el uso de Template Literals y la interrupción break al llegar al múltiplo de 5.

simularReportePing(8);
// Intento 1: Fallido
// Intento 2: Exitoso
// Intento 3: Fallido
// Intento 4: Exitoso
// Error crítico de hardware en intento 5
