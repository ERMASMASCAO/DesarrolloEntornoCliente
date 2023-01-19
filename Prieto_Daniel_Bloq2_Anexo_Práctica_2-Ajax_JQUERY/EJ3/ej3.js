$(document).ready(function(){
    $("#botonMostrar").click(function(){
        $.ajax({
            method: "GET",
            url: "ej3prueba.js",
            dataType: "script",
        }).done(function(mostrarMensaje){
            console.log(mostrarMensaje);
        }).fail(function(){
            $("#contenedor").html("Upss algo a ido mal")
        })
    })
})