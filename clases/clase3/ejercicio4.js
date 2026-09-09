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

console.log(procesarCompraMovil(100, 10)); // 108.9
