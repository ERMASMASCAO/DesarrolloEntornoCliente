var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrarDatos = function () {
        var div = document.getElementById("alumno");
        if (div) {
            var nombre = document.createElement("p");
            nombre.innerText = "Nombre: ".concat(this.nombre);
            var edad = document.createElement("p");
            edad.innerText = "Edad: ".concat(this.edad);
            var curso = document.createElement("p");
            curso.innerText = "Curso: ".concat(this.curso);
            div.appendChild(nombre);
            div.appendChild(edad);
            div.appendChild(curso);
        }
        else {
            console.error("El elemento con id 'alumno' no existe");
        }
    };
    return Alumno;
}());
document.addEventListener("DOMContentLoaded", function () {
    var alumno = new Alumno("Pedro López", 18, "1CFSJ");
    alumno.mostrarDatos();
});
