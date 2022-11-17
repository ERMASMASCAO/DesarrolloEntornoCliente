window.onload = function(){
    document.getElementById("boton").onclick = sacardatos;

}

function sacardatos(){
    var XMLHttpRequestObject = false;
        if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } 
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "datos.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        objeto.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
