function mostrar() {
    const imagen1 = document.getElementById("light");
    let valor = imagen1.getAttribute("src"); 
    alert(valor);
}
function asignarID() {
    const imagen0 = document.getElementsByTagName('img')[0];
    let valor2 = imagen0.setAttribute("id","img0");
    alert(valor2);
}
