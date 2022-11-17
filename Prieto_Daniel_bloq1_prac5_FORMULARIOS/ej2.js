window.onload = function(){
    document.getElementById("cuadroLista").onchange = cambiarColor;
}
function cambiarColor() {
    var parrafo = document.getElementById("parrafoColores");
    var lista = document.getElementById("cuadroLista");
    var indiceSeleccionado = lista.selectedIndex;
    var opcionesSelecionada = lista.options[indiceSeleccionado];
    var valorSeleccionado = opcionesSelecionada.value;
    parrafo.style.backgroundColor = valorSeleccionado;
}