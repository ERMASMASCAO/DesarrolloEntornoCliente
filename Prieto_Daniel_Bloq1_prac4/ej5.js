function numeros(event) {

    if (event.charCode >= '48' && event.charCode <= '57'){
        alert("Es el numero " + event.charCode);
    }else
        alert("No es un numero");
}
window.onload = function(){
        document.getElementById("demo").onkeypress = numeros;
}
