$(document).ready(function(){
    $("#boton").click(function(){
        $.post("ej2.php",{ 
            
        }).done(function(mostrarPHP){
            $("#contenedor").html(mostrarPHP);
        }).fail(function(){
            $("#contenedor").html("Upss algo a ido mal")
        })
    })
})