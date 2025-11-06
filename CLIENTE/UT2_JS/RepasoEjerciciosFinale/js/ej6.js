let array = [2, 4, 5, 3];
console.log("Array inicial: " + array.join('#'));


array.unshift(12, 8);

console.log("Array con elementos añadidos: " + array.join('#'));

array.push(6, 7, 1);

console.log("Array con elementos añadidos al final: " + array.join('#'));

array.splice(3, 3);

console.log("Array con posiciones 3,4 y 5 eliminadas: " + array.join('#'))




array.splice(array.length - 1, 0, 13);
array.splice(array.length - 1, 0, 22);

console.log("Array con elementos insertados antes del ultimo elemento: " + array.join('#'));