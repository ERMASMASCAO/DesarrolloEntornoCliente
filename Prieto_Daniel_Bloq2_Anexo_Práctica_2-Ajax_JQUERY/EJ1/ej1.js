$(document).ready(function(){
    $("#botonMostrar").click(function(){
        $.ajax({
            method: "GET",
            url: "ej1.txt",
        }).done(function(mostrarMensaje){
            $("#contenedor").html(mostrarMensaje);
        }).fail(function(){
            $("#contenedor").html("Upss algo a ido mal")
        })
    })
})