function calcularTarifa(tipoVehiculo, hora, esFeriado) {
    const tarifasBase = {
        moto: 150,
        auto: 300,
        camion: 600
    };

    const tipoNormalizado = tipoVehiculo.toLowerCase();

    if (!tarifasBase.hasOwnProperty(tipoNormalizado)) {
        console.warn(`Advertencia: tipo de vehículo "${tipoVehiculo}" no es válido.`);
        return 0;
    }

    let tarifa = tarifasBase[tipoNormalizado];

    const esHoraPicoManana = hora >= 8 && hora <= 10;
    const esHoraPicoTarde = hora >= 17 && hora <= 19;
    const esHoraPico = esHoraPicoManana || esHoraPicoTarde;

    if (esHoraPico && !esFeriado) {
        tarifa = tarifa * 1.3;
    }

    return tarifa;
}

function simularFilaCabina(cantidadVehiculos) {
    const tipos = ["moto", "auto", "camion"];
    let facturacionTotal = 0;

    for (let i = 1; i <= cantidadVehiculos; i++) {
        const tipoVehiculo = tipos[Math.floor(Math.random() * tipos.length)];
        const hora = Math.floor(Math.random() * 24);
        const esFeriado = Math.random() < 0.5;

        const tarifaCobrada = calcularTarifa(tipoVehiculo, hora, esFeriado);
        facturacionTotal += tarifaCobrada;

        console.log(`[Intento ${i}] Vehículo: ${tipoVehiculo} | Hora: ${hora} | Feriado: ${esFeriado} | Tarifa cobrada: $${tarifaCobrada}`);
    }

    return facturacionTotal;
}

// Pruebas manuales:
console.log(calcularTarifa("moto", 9, false));    // 195
console.log(calcularTarifa("auto", 18, true));    // 300
console.log(calcularTarifa("camion", 12, false)); // 600

// Simulación de fila de vehículos:
console.log("Total recaudado:", simularFilaCabina(5));
