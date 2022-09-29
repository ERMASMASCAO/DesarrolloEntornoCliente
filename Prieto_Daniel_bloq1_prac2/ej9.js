var nuevaVentana;
function abrirVentana() {
nuevaVentana=window.open("", "pagina2",
"toolbar=yes,location=no,menubar=yes"+
"width=300,height=300" );
nuevaVentana.document.write("<HTML><HEAD><TITLE>"+
"Sin Título</TITLE></HEAD>\n");
nuevaVentana.document.write("<BODY><form>\n");
nuevaVentana.document.write("<input type='button' "+
"value='Cerrar' onClick='window.close();'>\n");
nuevaVentana.document.write("</form>\n");
nuevaVentana.document.write("</BODY></HTML>\n");
}