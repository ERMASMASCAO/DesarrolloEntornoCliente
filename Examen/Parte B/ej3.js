
window.onload = function(){
    document.getElementById("entrantes").onchange = alertDatos;
    document.getElementById("borrar").onclick = limpiarMenu;


}
function alertDatos(){

    alert("Tienes seleccionado:"+ + "Entrantes:"+ + "precio final es:");
}
function limpiarMenu(){
    document.getElementById("caja").reset();
}
