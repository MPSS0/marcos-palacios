function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const cantidad = Number(cantArchivos);
    const tamanoMB = Number(tamanoPromedioMB);

    const pesoTotalMB = cantidad * tamanoMB;
    const pesoTotalKB = pesoTotalMB * 1024;

    return `Se descargarán ${cantidad} archivos con un peso total de ${pesoTotalKB} KB.`;
}

console.log(calcularEstadisticasDescarga("10", "1.5"));
// "Se descargarán 10 archivos con un peso total de 15360 KB."
