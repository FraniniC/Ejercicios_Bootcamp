 // Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».

function numeroMayor(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else if (numero3 > numero1 && numero3 > numero2) {
        return numero3;
    } else {
        return "Los números son iguales";
    }
}

let num1 = 2;
let num2 = num1 + 2;
let num3 = num2 + 2;

let mayorNumero = numeroMayor(num1, num2, num3);
console.log("El número mayor es:", mayorNumero);