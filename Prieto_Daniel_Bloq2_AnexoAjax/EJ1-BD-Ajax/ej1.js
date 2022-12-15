window.onload=function(){
  document.getElementById("boton").onclick = abrir;
}
function abrir() {
  //Recoger datos del formulario:
  renombre = document.getElementById("nombre").value;
  
  //Escribir la url para enviar los datos anteriores:
  ruta = "compruebaDisponibilidad.php"; //ruta del archivo
  envio1 = "envioNombre=" + renombre; //datos email
  datos = ruta + "?" + envio1  //url para enviar
 
  //Esta es la parte de Ajax para enviar los datos del formulario
  var XMLHttpRequestObject = false;
  if (window.XMLHttpRequest) {
      XMLHttpRequestObject = new XMLHttpRequest();
  } 
  if(XMLHttpRequestObject) {
      var lugar = document.getElementById("mostrar");
      XMLHttpRequestObject.open("GET", datos);
      XMLHttpRequestObject.onreadystatechange = function(){
      if (XMLHttpRequestObject.readyState == 4 &&
      XMLHttpRequestObject.status == 200) {
      lugar.innerHTML = XMLHttpRequestObject.responseText;
          }
      }
      XMLHttpRequestObject.send(datos);
  }
}