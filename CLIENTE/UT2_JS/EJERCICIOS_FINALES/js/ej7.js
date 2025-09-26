// Comprobar si todos los elementos de un array son pares.

let array = [2, 4, 6, 8, 10];

console.log(array.every(element => element % 2 == 0) ? "Son todos pares" : "No son todos pares")