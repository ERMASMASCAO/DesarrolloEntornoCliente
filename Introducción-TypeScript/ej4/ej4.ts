export class Alumno {
  public nombre: string;
  public edad: number;
  public curso: string;

  constructor(nombre: string, edad: number, curso: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }

  public mostrarDatos() {
    const div = document.getElementById("alumno");

    if (div) {
      const nombre = document.createElement("p");
      nombre.innerText = `Nombre: ${this.nombre}`;

      const edad = document.createElement("p");
      edad.innerText = `Edad: ${this.edad}`;

      const curso = document.createElement("p");
      curso.innerText = `Curso: ${this.curso}`;

      div.appendChild(nombre);
      div.appendChild(edad);
      div.appendChild(curso);
    } else {
      console.error("El elemento con id 'alumno' no existe");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const alumno = new Alumno("Pedro López", 18, "1CFSJ");
  alumno.mostrarDatos();
});
