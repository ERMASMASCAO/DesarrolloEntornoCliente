$(document).ready(function(){
    imagen = $("#img")

    $("#mostrar").on("click", function(event){
        $(imagen).show(2500);
    })

    $("#ocultar").on("click", function(event){
        $(imagen).hide("slow");
    })
});
