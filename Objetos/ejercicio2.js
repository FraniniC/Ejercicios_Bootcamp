//Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Inglés, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media(promedio) de sus calificaciones.

  //Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programación: 8, HTML: 7. Sacará Nota media de Juan 8

  const alumno ={
    nombre: "Juan", 
    asignaturas: {
    ingles:9,
    programacion:8,
    html:7
   }
  };


let numero = (alumno.asignaturas.ingles+alumno.asignaturas.programacion+alumno.asignaturas.html);
const promediojuan = (numero/3);


console.log(promediojuan)