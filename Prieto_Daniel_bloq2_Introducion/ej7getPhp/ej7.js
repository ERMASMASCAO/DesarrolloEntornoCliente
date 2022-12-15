window.onload = function(){
    document.getElementById("env").onclick = enviar;
}

function enviar() {
    //Recoger datos del formulario:
    reemail = document.getElementById("email").value; //Email escrito por el usuario
    recontra1 = document.getElementById("password").value; //Contraseña primera
    recontra2 = document.getElementById("password2").value; //Contraseña segunda

    //Escribir la url para enviar los datos anteriores:
    ruta = "ej7.php"; //ruta del archivo
    envio1 = "envioEmail=" + reemail; //datos email
    envio2 = "envioContra1=" + recontra1; //datos contraseña 1�
    envio3 = "envioContra2=" + recontra2; //datos contraseña 2�
    url = ruta + "?" + envio1 + "&" + envio2 + "&" + envio3; //url para enviar
   
    //Esta es la parte de Ajax para enviar los datos del formulario
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } 
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("comp");
        XMLHttpRequestObject.open("GET", url);
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

