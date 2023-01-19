$(document).ready(function(){
    $("#boton").click(function(){
        $.post("ej2.pp",{
            
        }).done(function(mostrarPHP){
            $("#contenedor").html(mostrarPHP);
        }).fail( function(jqXHR) {
                alert(jqXHR.status);
        });
    })
})