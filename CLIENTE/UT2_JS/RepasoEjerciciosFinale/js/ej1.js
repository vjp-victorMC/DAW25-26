//Crear una funcion que reciba dos cadenas y pinte cual es lamas corta de las dos.

// Función que recibe dos parametros y en caso de que ambos sean strings comprueba cual es la cadena mas corta y la imprime por pantalla.Si ambos no son strings nos devuelve un mensaje de error.

function cadenaMasCorta(cadena1, cadena2) {
    if (typeof cadena1 === 'string' && typeof cadena2 === 'string') {
        console.log(cadena1.length < cadena2.length ? "Esta es la cadena mas corta: "+cadena1 : "Esta es la cadena mas corta: "+cadena2);
    }
    else {
        console.log("Error, los dos parametros deben ser cadenas")
    }
}

//Llamada a la función 'cadenaMasCorta' pasándole dos cadenas directamente por parametros.

cadenaMasCorta("Hola qué tal?","Como estás?");