import { Alumno } from "../ej4/ej4"

class Curso extends Alumno {
  nombreCurso: string;

  constructor(nombre: string, edad: number, curso: string, nombreCurso: string) {
    super(nombre, edad, curso);
    this.nombreCurso = nombreCurso;
  }

  mostrarDatos() {
    const mensaje = `Mi nombre es ${this.nombre} \nTengo ${this.edad} años \nEstoy en ${this.curso} ${this.nombreCurso}`;
    alert(mensaje);
  }
}

const alumno1 = new Curso("Pedro López", 18, "1CFSJ", "Primer curso de grado superior de DAW");
alumno1.mostrarDatos();
