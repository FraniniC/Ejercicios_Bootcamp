// Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx».

function generar_caracteres(n, caracter) {
    return caracter.repeat(n);
}

let n = 5;
let caracter = 'x';

let resultado = generar_caracteres(n, caracter);
console.log(resultado);