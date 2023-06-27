// Escriba una función con el nombre de esVocal() que tome un carácter, devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.

let esVocal = ['a', 'e', 'i', 'o', 'u'];

let letra = prompt("Inserte una letra");

let esVocalEncontrada = false;

for (let i = 0; i < esVocal.length; i++) {
    if (esVocal[i].toLowerCase() === letra.toLowerCase()) {
        esVocalEncontrada = true;
        break;
    }
}

if (esVocalEncontrada) {
    console.log('True, es vocal');
} else {
    console.log('No es vocal');
}