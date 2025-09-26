// Función que comprueba si los dos parametros que recibe son cadenas, en caso afirmativo crea un string invirtiendo la primera cadena recibida y lo compara con la segunda cadena recibida. Devuelve un mensaje indicando si son o no iguales.

function igualesDelReves(cadena1, cadena2) {
    if (typeof cadena1 === 'string' && typeof cadena2 === 'string') {

        let invertida = "";

        for (let i = cadena1.length - 1; i >= 0; i--) {
            invertida += cadena1[i];
        }

        console.log(cadena2 == invertida ? "Son iguales" : "No son iguales")

    }

    else {
        console.log("Ambos parametros deben ser cadenas.")
    }
}

igualesDelReves("hola", "alho");