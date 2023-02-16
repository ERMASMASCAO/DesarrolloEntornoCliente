function calcularPrecioConIVA(precio: number): number {
    const IVA = 0.21;
    return Number( (precio * IVA + precio).toFixed(2) );
  }
  
  let precioSinIVA = Number(prompt("Introduce el precio del artículo:"));
  let precioConIVA = calcularPrecioConIVA(precioSinIVA);
  
  alert(`El precio sin IVA es: ${precioSinIVA}`);
  alert(`El precio con IVA es: ${precioConIVA}`);
  