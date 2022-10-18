function grande() {
    document.getElementById("parrafo").style.fontSize ="16pt";
}

function pequeno() {
    document.getElementById("parrafo").style.fontSize ="12pt";
}

document.addEventListener("mouseover", grande);
document.addEventListener("mouseout", pequeno);