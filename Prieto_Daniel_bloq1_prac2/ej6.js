var hora = new Date();

function botonHoraActual() {

 var horas = hora.getHours();
 if(horas < 10 ){horas = "0" + horas}
 var mins = hora.getMinutes();
 if(mins < 10 ){mins = "0" + mins}
 var segs = hora.getSeconds();
 if(segs < 10 ){segs = "0" + segs}
 var horaActual = horas + ":" + mins;

 if (horas > 6 && horas <= 14) {
    document.write("Buenos días esta es la hora  " + horaActual);
 } else if (horas > 14 && horas <= 20){
     document.write("Buenas tardes esta es la hora  " + horaActual);
 } else if (horas > 20 && horas <= 24){
    document.write("Buenas noches esta es la hora:  " + horaActual);
 }
}
