function contarEnlaces() {
    var enlaces =document.getElementsByTagName('a');
    var cont = enlaces.length;
    alert("Hay " + " " + cont + " " + " enlaces." );
}

function referenciasEnlaces() {
    var enlaces = document.getElementsByTagName('a')
    var texto = "";
    for (var i = 0 ;i < enlaces.length; i++){
        texto += "Parrafo:  "+i+" " + enlaces[i].href + "ª\n";
    }
    alert(texto);
}
function referenciasEnlacesParrafos() {
    var enlaces = document.getElementsByTagName('p')
    var texto = "";
    for (var i = 0 ;i < enlaces.length; i++){
        var aes = enlaces[i].children
            for (let x = 0; x < aes.length; x++) {
                const enlace = aes[i].getAttribute("href");
                    texto += "Parrafo:  "+i+" " + enlace[i] + "ª\n";
            }
    }

    alert(texto);
}