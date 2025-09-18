let nombre = prompt("Introduce tu nombre");
let tiempo = 3000;

let respuesta = "Bienvenido "+nombre;

setTimeout(function(){
    alert(respuesta)
},tiempo)