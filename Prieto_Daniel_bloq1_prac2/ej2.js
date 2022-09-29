var queMes=prompt("Introduce un mes para saber la estación");

function queEstacionEs(mes) {
    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero": alert("Es invierno");
            break;
        case "mayo" :
        case "abril":
        case "marzo": alert("Es primavera");
            break;
        case "junio":
        case "julio":
        case "agosto": alert("Es verano");
            break;
        case "octubre":
        case "noviembre":
        case "septiembre":alert("Es otoño");
            break;
        default: alert("No existe ese mes.")
            break;
    }
}
queEstacionEs(queMes);
