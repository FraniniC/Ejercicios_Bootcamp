//Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo


function multiplicarArreglo(numeros) {
    const menorNumero = Math.min(...numeros);
    const mayorNumero = Math.max(...numeros);

return menorNumero * mayorNumero;
  }    


const numeros = [2,4,6,8,10];
const resultado = multiplicarArreglo(numeros);
console.log (resultado);