window.onload = function(){
    addEventListener('click',cambiar);
}

function cambiar() {
    let parrafo = document.getElementById("parrafoEstilo");

    if (document.getElementById("bold").checked) {
        parrafo.style.fontWeight = "bold";
    } else {
        parrafo.style.fontWeight = "";
    }
    if (document.getElementById("italic").checked) {
        parrafo.style.fontStyle = "italic";
    } else {
        parrafo.style.fontStyle = "";
    }
}
