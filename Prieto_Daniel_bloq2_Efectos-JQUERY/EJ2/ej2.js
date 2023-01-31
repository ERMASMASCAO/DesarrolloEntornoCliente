$(document).ready(function(){

    $("#botonFundido").click(function(){
        $("#frase").fadeOut("slow"); //fadeTo("slow",1)
    })

    $("#botonBasico").click(function(){
        $("#frase").fadeIn("slow")
    })

});