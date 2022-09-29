var oracion =prompt ("Introduce una cadena");
document.write("La longitud de la cadena es de : "+ oracion.length + "<br>");
document.write(oracion.toLowerCase()+"<br>");
document.write(oracion.toUpperCase()+"<br>");

var oracionSeparada = oracion.split(" ");
for (var i = 0; oracionSeparada.length > i; ++i){
    document.write(oracionSeparada[i] + "<br/>");
}

var oracionreves = oracionSeparada.reverse();
for (var i = 0; oracionreves.length > i; ++i){
    document.write(oracionreves[i] + "<br/>");
}

