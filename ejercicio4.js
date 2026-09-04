// ==============================================================================
// Ejercicio 12: Procesamiento de Pago
// Consigna: Escribir una función principal `procesarCompraMovil` que contenga 3 funciones internas:
// 1. `aplicarDescuento(precio, descuento)` (declarada)
// 2. `sumarIva(precio)` (expresada)
// 3. `redondear(valor)` (flecha)
// Retornar el precio final procesado a 2 decimales.
// ==============================================================================

function procesarCompraMovil(precioBase, descuentoPct) {
    // Función Declarada
    function aplicarDescuento(precio, descuento) {
        return precio - (precio * (descuento / 100));
    }

    // Expresión de Función
    const sumarIva = function (precio) {
        return precio + (precio * 0.21);
    };

    // Función Flecha
    const redondear = (valor) => Number(valor.toFixed(2));

    const precioConDescuento = aplicarDescuento(precioBase, descuentoPct);
    const precioConIva = sumarIva(precioConDescuento);
    const precioFinal = redondear(precioConIva);

    return precioFinal;
}

// Excelente demostración usando los tres tipos de declaración de funciones (declarada, expresada y flecha) como pedía la consigna. Los comentarios dentro de la función demuestra el uso de la IA...

console.log(procesarCompraMovil(100, 10)); // 108.9
