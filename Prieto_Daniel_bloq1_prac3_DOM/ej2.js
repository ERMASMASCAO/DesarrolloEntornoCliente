function AñadirNuevoElemento() {
    var parrafo = document.createElement('li');
    var texto = document.createTextNode('elefante');
    parrafo.appendChild(texto);
    document.getElementById('contenedor').appendChild(parrafo);
}

function InsertarNuevoElemento() {
    var parrafoNuevo = document.createElement('li');
    var texto = document.createTextNode('oso');
    parrafoNuevo.appendChild(texto);
    var posicion = document.getElementById('contenedor').getElementsByTagName('li')[1];
    document.getElementById('contenedor').insertBefore(parrafoNuevo,posicion);
}

function ReemplazaElemento() {
    var parrafoReemplazar = document.createElement('li');
    var texto = document.createTextNode('Pez');
    parrafoReemplazar.appendChild(texto);
    var posicion = document.getElementById('contenedor').getElementsByTagName('li')[1];
    document.getElementById('contenedor').replaceChild(parrafoReemplazar,posicion);
}

function BorrarElemnto() {
    var posicion = document.getElementById('contenedor').getElementsByTagName('li')[1];
    document.getElementById('contenedor').removeChild(posicion);
}

function ClonarListaCompleta() {
    var clonar = document.getElementById('contenedor').cloneNode(true);
    document.getElementById('contenedor').appendChild(clonar);
}

function crearSublistaDOM() {
    var lista = document.createElement('ul');
    var item = document.createElement('li');
    var parrafo = document.createTextNode("Domestico");
    item.appendChild(parrafo);
    lista.appendChild(item);
    document.getElementsByTagName('li')[0].appendChild(lista);
}

function crearSublistaInerHTML() {
    var lista = document.createElement('ul');
    lista.innerHTML = "<li>Clamidosaurio de King</li>";
    document.getElementsByTagName('li')[0].appendChild(lista);
}