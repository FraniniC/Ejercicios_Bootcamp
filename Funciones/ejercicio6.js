//Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual (>=) a 10 que retorne true si es menor a 10 que retorne false.
const numeros1 = [0,1,2,3];
const numeros2 = [0.6,0.3,0.9];

function booleanoArray (numeros1, numeros2) {

    const unionNum = numeros1.concat(numeros2);

    if (unionNum >= 10) {
    return true;}
else (unionNum < 10)
    return false;
}


const resultado = booleanoArray (numeros1, numeros2);

console.log(resultado);