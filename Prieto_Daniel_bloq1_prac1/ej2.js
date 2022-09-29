var sumanums = 0; //mejor la iniciación de contadores y acumuladores al principio
var num = [7,8,2,9,10];

for(var i = 0; i < 8; i++) {
    if (num[i] > 8) {
        sumanums = sumanums + num[i];

    }
  }
  alert("La suma de los numeros mayores de 8 es:" + sumanums);
