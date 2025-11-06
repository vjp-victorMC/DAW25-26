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







