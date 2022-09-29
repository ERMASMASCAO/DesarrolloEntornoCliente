function masIva(precio, iva){
    
    var conIva = (precio + (precio*iva/100));
    var soloIva = iva;
    var sinIva = precio;

    document.write("<br>" + "Precio solo del iva : " + soloIva.toFixed(2));
    document.write("<br> " + "Precio sin iva : " + sinIva.toFixed(2));
    document.write("<br> " + "Precio con el Iva : " + conIva.toFixed(2));

}
var precio = parseInt(prompt("Introduce un precio"));
var iva = parseInt(prompt("Introduce el iva"));
masIva(precio,iva);