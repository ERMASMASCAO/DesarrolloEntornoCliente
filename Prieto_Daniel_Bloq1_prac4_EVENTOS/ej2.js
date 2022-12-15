function grande() {
    //document.getElementById("parrafo").style.fontSize = '16pt';
    this.style.fontSize= '16pt';
}
function pequeno() {
    //document.getElementById("parrafo").style.fontSize = '12pt';
    this.style.fontSize= '12pt';
}
window.onload = function(){
document.getElementById("parrafo").onmouseover=grande;
document.getElementById("parrafo").onmouseout=pequeno;
}