function suma10en10() {
    var suma = 10;
    var valor = document.getElementById("suma").value;
    valor = parseInt(valor);
    valor = valor + suma;
    document.getElementById("suma").value = valor;
}
function iniciar() {
    document.getElementById("suma").value = 0;
}