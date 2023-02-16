function calcularPrecioConIVA(precio) {
    var IVA = 0.21;
    return Number((precio * IVA + precio).toFixed(2));
}
var precioSinIVA = Number(prompt("Introduce el precio del artículo:"));
var precioConIVA = calcularPrecioConIVA(precioSinIVA);
alert("El precio sin IVA es: ".concat(precioSinIVA));
alert("El precio con IVA es: ".concat(precioConIVA));
