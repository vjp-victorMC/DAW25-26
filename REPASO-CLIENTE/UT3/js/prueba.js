
// console.log("1. " + new Date().toString());
// let timeoutID = setTimeout(() => console.log("2. " + new Date().toString()), 5000);
// console.log("3. " + new Date().toString());

// if (prompt("Desea parar la función?(yes/no)") === "yes") {
//     clearTimeout(timeoutID);
// }


// let num = 1;
// let idInterval = setInterval(function () {
//     console.log(++num);
//     if (num > 10) {
//         clearInterval(idInterval);
//     }
// }, 1000);






let nuevoP = document.createElement("p");
nuevoP.innerText = "Este es el párrafo final"


document.body.appendChild(nuevoP);

// PRUEBA 7

let elementosP = document.getElementsByTagName("p");

for (const elemento of elementosP) {
    console.log(elemento);
}



function eliminarClase(collection, nombre) {
    for (const elemento of collection) {
        if (elemento.className === nombre) {
            elemento.remove();
        }
    }
}

eliminarClase(elementosP, "parrafos");

console.log("Mostrando despues de eliminar parrafo: ")

for (const elemento of elementosP) {
    console.log(elemento);
}







