window.onload = function() {
    document.getElementById("text").focus();
    document.getElementById("formulario").onsubmit = validar;


}

function validar(event){
    valor = document.getElementById("text").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    valor = document.getElementById("text").value;
    if( !([A-Z]{2}$/^\d{3}.test(valor))) {
        valor.focus();
        document.getElementById("text").remove();
        event.preventDefault();
    }else{
        alert("La clave es correcta");

    }

}    
