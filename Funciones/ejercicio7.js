// Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

function funcionArray(numeros1,numeros2) {
    const unionNum = numeros1.concat(numeros2);

    return unionNum.length;

}

const numeros1 = [0,1,2,3];
const numeros2 = [6,3,9];
const resultado = funcionArray(numeros1,numeros2);
console.log (resultado);