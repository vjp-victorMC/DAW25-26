
let respuesta = prompt("Desea detener la función?: ");
let id = setTimeout(() => console.log("2." + new Date().toString()), 5000);
if (respuesta === "yes") {
    clearTimeout(id);
}

