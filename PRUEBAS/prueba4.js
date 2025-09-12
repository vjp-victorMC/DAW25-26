function calcularPrecio(numUnds, precio){
    let precioFinal= numUnds*precio;
    return precioFinal;
}

function pedirUnds(){
    let unidades= prompt("Introduce el numero de unidades:");
    return unidades;
}
let precio = calcularPrecio(pedirUnds(),2);
console.log("Precio final: "+ precio);


