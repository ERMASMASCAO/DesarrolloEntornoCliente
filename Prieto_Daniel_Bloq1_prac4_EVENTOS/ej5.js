function numeros(event) {

    if (event.charCode >= '48' && event.charCode <= '57'){
        //alert("Es el numero " + event.charCode);

    }else
        //alert("No es un numero");
        event.preventDefault(); //Hace que no se produzca el evento onkeypress.
}
window.onload = function(){
        document.getElementById("demo").onkeypress = numeros;
}
