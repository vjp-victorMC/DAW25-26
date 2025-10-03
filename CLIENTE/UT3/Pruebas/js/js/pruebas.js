/* 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.getElementById('1'));
console.log(document.getElementsByClassName("parrafos"));
console.log(document.getElementsByTagName("p")); */

/* let body = document.body;

let primerParrafo = document.getElementById("2");

console.log(body.childNodes);
console.log(body.children);
console.log(body.parentNode);
console.log(primerParrafo.nextElementSibling); */


let elementosP = document.getElementsByTagName("p");

console.log("Mostrando todos los parrafos")

for (let elemento of elementosP) {
    console.log(elemento);
}

let elementosParrafo = document.getElementsByClassName("parrafos");
 


for (let elemento2 of elementosParrafo) {
    elemento2.remove();
}

console.log("Mostrando elementos parrafo despues de eliminar")
for (let elemento of elementosP) {
    console.log(elemento);
}




