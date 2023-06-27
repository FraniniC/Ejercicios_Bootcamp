// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)

let frase = prompt("Escribe una frase");
let letraA = "";

for(let i = 0; i < frase.length; i= i+1) {

    if (frase.charAt(i).toLowerCase()==="a"){
        letraA =letraA+frase.charAt(i)
    } 
}
let cantidadA = letraA.length;
document.write("la frese tiene",cantidadA, "a")