// ==============================================================================
// Desafío Semanal Obligatorio: Peaje Inteligente (Telepase)
// Consigna: Implementar la facturación automática de una cabina de peaje:
// 1. `calcularTarifa(tipoVehiculo, hora, esFeriado)`:
//    - Tarifas base: "moto": $150, "auto": $300, "camion": $600.
//    - Hora pico (8 a 10 y 17 a 19 inclusive): +30% recargo si NO es feriado.
//    - Aceptar mayúsculas/minúsculas. Si es inválido, advertir y retornar 0.
// 2. `simularFilaCabina(cantidadVehiculos)`:
//    - Simular aleatoriamente tipo, hora (0-23) y feriado (true/false).
//    - Mostrar detalle de cada intento en consola y retornar total recaudado.
// ==============================================================================

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

// ¡Impecable trabajo en el desafío integrador, Marcos! El uso del objeto de mapeo para tarifasBase y el chequeo con .hasOwnProperty() demuestran un nivel excelente.

// Pruebas manuales:
console.log(calcularTarifa("moto", 9, false));    // 195
console.log(calcularTarifa("auto", 18, true));    // 300
console.log(calcularTarifa("camion", 12, false)); // 600

// Simulación de fila de vehículos:
console.log("Total recaudado:", simularFilaCabina(5));
