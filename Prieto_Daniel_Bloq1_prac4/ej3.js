function letra (elEvento) {
var elEvento = elEvento || window.event;
    
    switch (elEvento.type) {
        case 'mouseover':
            this.style.fontSize='16pt';
            break;
    case"mouseout":
        this.style.fontSize='12pt';
            break;
    }
}
window.onload = function(){
    document.getElementById("parrafo").onmouseover = letra;
    document.getElementById("parrafo").onmouseout = letra;

}