window.onload = function(){
    document.getElementById("cambioDeFoto").onclick = cambioImagen;

}

function cambioImagen() {
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    } 
        if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "imagen.html");
        XMLHttpRequestObject.onreadystatechange = function(){

        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}