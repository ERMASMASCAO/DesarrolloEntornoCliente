var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    return Alumno;
}());
var Curso = /** @class */ (function (_super) {
    __extends(Curso, _super);
    function Curso(nombre, edad, curso, nombreCurso) {
        var _this = _super.call(this, nombre, edad, curso) || this;
        _this.nombreCurso = nombreCurso;
        return _this;
    }
    Curso.prototype.mostrarDatos = function () {
        var mensaje = "Mi nombre es ".concat(this.nombre, " \nTengo ").concat(this.edad, " a\u00F1os \nEstoy en ").concat(this.curso, " ").concat(this.nombreCurso);
        alert(mensaje);
    };
    return Curso;
}(Alumno));
var alumno1 = new Curso("Pedro López", 18, "1CFSJ", "Primer curso de grado superior de DAW");
alumno1.mostrarDatos();
