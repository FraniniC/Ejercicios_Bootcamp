// Deberás crear un array para guardar los nombres de los meses del año , empezando por 0 para enero . Para comprobar el funcionamiento pide al usuario un número entre 0 y 11 y devuelve el nombre del mes del año . Se supone que el dato tecleado estará entre 0 y 11
  // ejemplo : Si tecleo el número 4 me deberá decir que el mes es mayo.

const meses= ['enero','febrero','marzo', 'abril','mayo','junio','julio','agosto', 'septiembre', 'octube', 'noviembre', 'diciembre'];

const numerMes = prompt ("Indique un numero entre 0 y 11")

console.log(meses[numerMes]);