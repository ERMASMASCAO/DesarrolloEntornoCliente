function AñadirNuevoParrafo() {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Parrafo añadido');
    parrafo.appendChild(texto);
    document.getElementById('contenedor').appendChild(parrafo);
}

function InsertarNuevoParrafo() {
    var parrafoNuevo = document.createElement('p');
    var texto = document.createTextNode('Parrafo insertado.');
    parrafoNuevo.appendChild(texto);
    var posicion = document.getElementById('contenedor').getElementsByTagName('p')[1];
    document.getElementById('contenedor').insertBefore(parrafoNuevo,posicion);
}

function ReemplazaParrafo() {
    var parrafoReemplazar = document.createElement('p');
    var texto = document.createTextNode('Parrafo reemplazado.');
    parrafoReemplazar.appendChild(texto);
    var posicion = document.getElementById('contenedor').getElementsByTagName('p')[1];
    document.getElementById('contenedor').replaceChild(parrafoReemplazar,posicion);
}

function BorrarParrafo() {
    var posicion = document.getElementById('contenedor').getElementsByTagName('p')[1];
    document.getElementById('contenedor').removeChild(posicion);
}

function ClonarDiv() {
    var clonar = document.getElementById('contenedor').cloneNode(true);
    document.getElementById('contenedor').appendChild(clonar);
}