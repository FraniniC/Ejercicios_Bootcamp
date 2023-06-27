//Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Mostrar por consola.
  //Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).

const producto1 = {
    precio: 10000,
    descuento: 0.7,
    
}

const producto2 ={
    precio: 20000,
    descuento: 0.7,

}

const preciocondescuento1= producto1.precio*producto1.descuento
const preciocondescuento2= producto2.precio*producto2.descuento

console.log("El precio con descuento es:", preciocondescuento1)
console.log("El precio con descuento es:", preciocondescuento2)