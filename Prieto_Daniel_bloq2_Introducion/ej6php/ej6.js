window.onload = function(){
    document.getElementById("boton").onclick = sacardatos;

}

function sacardatos(){
    var XMLHttpRequestObject = false;
        if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
        } 
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "ej6.php");
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
