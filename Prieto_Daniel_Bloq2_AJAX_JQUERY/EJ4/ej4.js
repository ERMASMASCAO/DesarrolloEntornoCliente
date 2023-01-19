$(document).ready(function(){
    $("#boton").click(function(){
        $.post("ej4.php",{ 
            nombre: "Daniel", apellidos : "Prieto Cano", edad : "21", sexo : "hombre" , estatura : "180 cm" , complexion : "delgada"
        }).done(function(mostrarPHP){
            $("#contenedor").html(mostrarPHP);
        });
    })
})