window.onload = function(){
    document.getElementById("enlace1").onclick = sacarInicio;
    document.getElementById("enlace2").onclick = sacarBienvenido;
}

function sacarInicio() {
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    } 
        if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "inicio.html");
        XMLHttpRequestObject.onreadystatechange = function(){

        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

function sacarBienvenido() {
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    } 
        if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "bienvenido.html");
        XMLHttpRequestObject.onreadystatechange = function(){

        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}