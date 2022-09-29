function botonFechaActual(){
    var fecha = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    alert(fecha.toLocaleDateString("es-ES", options));
}