window.onload = function() {
document.getElementById("primerenlace").addEventListener("mouseover", grande);
document.getElementById("primerenlace").addEventListener("mouseout", pequeno);
}

function grande() {
    //document.getElementById("parrafo").style.fontSize ="20pt";
    this.style.fontSize = '20pt';
}

function pequeno() {
    //document.getElementById("parrafo").style.fontSize ="12pt";
    this.style.fontSize = '12pt';

}