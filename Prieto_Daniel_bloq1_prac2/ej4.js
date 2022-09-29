/*var navegador = navigator.userAgent;
if (navegador != "msie") {
alert("OPERACION NO PERMITIDA EN ESTE NAVEGADOR");
}else{
var nueva = window.open("","pagina2","toolbar=yes,location=no,menubar=yes"+ "width=500,height=500");
}
*/

var ventanaNueva = navigator.userAgent;
//if (ventanaNueva != "msie") {
    document.write("Operacion no permitida con este navegador")
//} else {
    ventanaNueva = window.open("","","height = 500, width = 500");
    ventanaNueva = resizeTo(500, 500);
//}