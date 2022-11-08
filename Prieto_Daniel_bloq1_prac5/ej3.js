window.onload = function(){
    var array=document.getElementsByName("radio");
    for ( i = 0; i < array.length; i++) {
        array[i].onchange=cambiarColor;
    
}
}

function cambiarColor(){
    var array = document.getElementsByName("radio");
    for(var i= 0;i<array.length; i++){
        if (this.value=="green") {
            document.getElementById("parrafoColores").style.color="green";
        }else if(this.value=="red"){
            document.getElementById("parrafoColores").style.color="red";
        }else if(this.value=="blue"){
            document.getElementById("parrafoColores").style.color="blue";
        }
    }
}