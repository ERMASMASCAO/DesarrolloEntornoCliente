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
    var enlaces = document.getElementsByTagName('p');
    var texto = "";
    for (var i = 0 ;i < enlaces.length; i++){
        var aes = enlaces[i].getElementsByTagName('a');
            for (let x = 0; x < aes.length; x++) {
                    texto += "Parrafo:  "+i+" " + aes[x].href + "ª\n";
            }
            
    }

    alert(texto);
}
function cambiarColor(color) {
    var parrarfo = document.getElementsByTagName('p');
    for (var i = 0; i < parrarfo.length; i++) {
        parrarfo[i].style.backgroundColor = color;
        
    }

    
    }
    