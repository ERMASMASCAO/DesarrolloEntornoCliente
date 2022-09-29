var precio = Number(prompt("Introduce un precio"));
var iva = Number(prompt("Introduce el iva sobre el precio"));

iva = 0.21;
var soloIva = precio*iva;
var conIva = (precio + (precio*iva));


document.write("Precio sin iva : " + iva +"€");
document.write("<br> Precio solo del iva : " + soloIva.toFixed(2)+"€");
document.write("<br>Precio con el Iva : " + conIva.toFixed(2)+"€");


