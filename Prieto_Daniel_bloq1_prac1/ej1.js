var contnums= 0;
var sumanums= 0;

for(var i = 0; i < 5; i++) {
    var numero=parseInt(prompt("Introduce 5 numeros:",""));
    if (numero > 100) {
        contnums++
    }
    sumanums = numero + sumanums;
  }
alert("La suma de los numeros es:" + sumanums);
alert("Hay" + contnums + "numero mayor que 100")