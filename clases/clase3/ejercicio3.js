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

simularReportePing(8);
// Intento 1: Fallido
// Intento 2: Exitoso
// Intento 3: Fallido
// Intento 4: Exitoso
// Error crítico de hardware en intento 5
