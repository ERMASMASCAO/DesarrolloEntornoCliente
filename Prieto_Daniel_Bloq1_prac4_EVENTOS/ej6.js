function presionarBoton() {
    alert('Has pulsado sobre un botón');
}

window.onload = function(){
    var botones = document.getElementsByTagName('input');

    for(var i = 0; i < botones.length; i++){
        if(botones[i].type == 'button'){
            botones[i].onclick = presionarBoton;
        }
    }
}
