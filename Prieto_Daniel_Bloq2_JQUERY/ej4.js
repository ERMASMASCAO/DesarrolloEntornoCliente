$(document).ready(function() {
    $("#mostrar-resultado").click(function() {
    if ($(this).is(":checked")) {
        $("#resultado-container").show(); //append para creación dinámica.
        var num1 = parseInt($("#num1").val());
        var num2 = parseInt($("#num2").val());
        var resultado = num1 + num2;
        $("#resultado").val(resultado);
    } else {
        $("#resultado-container").hide(); //remove para eliminar el campo.
    }
    });
});