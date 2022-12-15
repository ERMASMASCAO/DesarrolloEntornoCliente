window.onload = function(){
    document.getElementById("nombre").focus();
    document.getElementById("texto").onkeypress = limitaObservaciones;
    document.getElementById("formulario").onsubmit = validar;
    document.getElementById("opciones").onchange = alertDatos;
    document.getElementById("formulario").onsubmit = limpiarFormulario;

}
function limitaObservaciones(event) {
    var elemento = document.getElementById("texto");
    if(elemento.value.length >= 150 ) {
    event.preventDefault();
    }  
}

function limpiarFormulario(){
    document.getElementById("formulario").reset();
}

function alertDatos(){
    var lista = document.getElementById("opciones");
    var longitud = lista.length;
    var indiceSeleccionado = lista.selectedIndex;
    var opcionesSelecionada = lista.options[indiceSeleccionado];
    var textoSeleccionado = opcionesSelecionada.value;
    alert("Longitud de la lista: " + longitud + "\n" + "Opción seleccionada: " + textoSeleccionado + "\n" +"Indice: " + indiceSeleccionado);
}

function validar(event){
    var valor = document.getElementById("dni").value;
    if (valor.length == 0) {
        alert("Esta vacío debes introducir los datos");
        event.preventDefault();
    }
    valor = document.getElementById("telefono").value;
    if( !(/^\d{9}$/.test(valor)) ) {
        alert("Debe tener 9 dígitos");
        event.preventDefault();
    }
}
