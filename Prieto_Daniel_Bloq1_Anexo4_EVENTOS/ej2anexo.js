function evitarFuncionLink(evento) {
    evento.preventDefault();
}

window.onload = function(){
    document.getElementById("link1").onclick = evitarFuncionLink;
}