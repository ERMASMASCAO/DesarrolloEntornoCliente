window.onload = function(){
 document.getElementById("boton").onclick = sacardatos;
}

function sacardatos(){
    var XMLHttpRequestObject = false;
        if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
        } 
    if(XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", "jsextra.js");
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        eval(XMLHttpRequestObject.responseText);}}
        XMLHttpRequestObject.send(null);
    }
}
