$(document).ready(function(){

    var cubo = $("#cubo");
        var animacion;
        
        function movercubo() {
        cubo.animate({
            left: "100px",
            top: "100px"
        }, 1000);
        cubo.animate({
            left: "200px",
            top: "100px"
        }, 1000);
        cubo.animate({
            left: "200px",
            top: "200px"
        }, 1000);
        cubo.animate({
            left: "100px",
            top: "200px"
        }, 1000, movercubo);
        }

        $("#startBtn").click(function() {
        animacion = setInterval(movercubo, 4000);
        });

        $("#stopBtn").click(function() {
            $("#cubo").stop(true);
        })
});