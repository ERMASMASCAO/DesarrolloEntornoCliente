$(document).ready(function(){
    parrafo = $("p")

    $("#rojo").click(function(){
        if($("#rojo").prop('checked')){
        $(parrafo).css('backgroundColor','red');
        }
    })
    $("#azul").click (function(){
        if($("#azul").prop('checked')){
        $(parrafo).css('backgroundColor','blue');
        }
    })
    $("#verde").click(function(){
        if($("#verde").prop('checked')){
        $(parrafo).css('backgroundColor','green');
        }
    })
    
});