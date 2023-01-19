$(document).ready(function(){

    $("#boton").click(function(){
       var form = $("#formulario")
       var parametros = $(form).serialize();
       $.get("ej4.php",parametros,function(resultado) {
        $("#contenedor").html(resultado);
       })
    })
})