function numeroAleatorio() {
    var valor = document.getElementById("id").value
    var numero1al10 = Math.random()
    numero1al10 = numero1al10 * 10;
    numero1al10 = Math.round(numero1al10);
    if (numero1al10 == valor) {
        alert("Enhorabuena has acertado el numero");
    } else {
        alert("No has acertadoo");
    }
}