window.onload = function(){
    var boton = document.getElementById("boton");
    boton.addEventListener("click",cuadrad);
    var divs = document.getElementById("cuadrado");
    divs.addEventListener("click", medidas);
}

function medidas(event){
    alert('x: '.concat(event.clientX - this.offsetLeft, '\ny:', event.clientY - this.offsetTop));
}

function cuadrad(event){
    with(this.parentNode.style){
        height = Math.round(Math.random() * screen.height) + 'px';
        width = Math.round(Math.random() * screen.width) + 'px';
    }
    event.stopPropagation();
}