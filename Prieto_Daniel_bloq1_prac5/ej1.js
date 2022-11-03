window.onload = function(){
    document.getElementById("nombre").focus();
}
function limitaObservaciones(maximoCaracteres) {
    var elemento = document.getElementById("observaciones");
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }
    <textarea id="texto" onkeypress="return limita(100);"></textarea>
}
function limpiarFormulario(){
    document.getElementById("formulario").reset();
}
function validarTelefono(){
    valor = document.getElementById("telefono").value;
    if( !(/^\d{9}$/.test(valor)) ) {
    return false;
}
}