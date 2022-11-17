window.onload = function(){
    document.getElementById("email").focus();
    document.getElementById("formulario").onsubmit = validar;
    document.getElementById("formulario").onsubmit = limpiarFormulario;
    document.getElementById("visitas").visitasFalsas();


}


function limpiarFormulario(){
    document.getElementById("formulario").reset();
}


function validar(event){
    var valor = document.getElementById("contraseña").value;
    if (valor.length == 0) {
        alert("La contraseña esta vacía debes introducir los datos");
        event.preventDefault();
    }
    var valor = document.getElementById("contraseña2").value;
    if (valor.length == 0) {
        alert("La contraseña esta vacía debes introducir los datos");
        event.preventDefault();
    }

    valor = document.getElementById("telefono").value;
    if( !(/^\d{9}$/.test(valor)) ) {
        alert("El telefono debe tener 9 dígitos");
        event.preventDefault();
    }   
function visitasFalsas() {
    var ran
    ran = Math.round(Math.random()*50000)
    document.write("Usted es el visitante " + ran + " de esta página.")
}

