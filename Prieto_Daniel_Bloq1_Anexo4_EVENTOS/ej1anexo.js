window.onload = function(){

    document.getElementById("formulario").onsubmit = cancelarEvento;
}

function cancelarEvento(evento) {

    var campo1 = document.getElementById("cajaTexto1");
    var campo2 = document.getElementById("cajaTexto2");
    var campo3 = document.getElementById("cajaTexto3");

    if (campo1.value == "" || campo2.value == "" || campo3.value == "") {
        alert("Hay campos vacios")
        evento.preventDefault();
    }else
    {
        this.submit;
        //document.getElementById("formulario").submit; ---> se pone esto si no pones el this.submit
    }
}