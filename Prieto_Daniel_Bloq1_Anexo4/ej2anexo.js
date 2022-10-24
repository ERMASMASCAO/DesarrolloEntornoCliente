//  1.- Crear un formulario con tres campos. Cancela el envío del mismo mientras haya algún campo vacío
//  Muestra un mensaje de la cancelación del envío y otro cuando este se produzca.

function cancelarEvento(event) {
    event.stopPropagation;
    alert("Se está cancelado el envío");
}

window.onload = function(){
    var formulario = document.getElementById("input") {
    
    alert("Se canceló el envío");
}