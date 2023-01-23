$(document).ready(function(){
    $("#botonBasico").click(function() {
        $("#imagen").hide(); 
        });

    $("#botonFundido").click(function() {
        $("#imagen").fadeOut() 
        });

    $("#botonAnimate").click(function() {
        $("#imagen").animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 5000, function() {
            // Animation complete.
          });
        });

    $("#botonDeslizamiento").click(function() {
        $("#imagen").slideUp().slideDown() 
        });
    
    });