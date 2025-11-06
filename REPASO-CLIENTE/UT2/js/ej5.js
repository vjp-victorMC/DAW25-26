function esPalindromo(cadena1, cadena2) {
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        console.log("Debes usar dos cadenas")
    }
    else {
        let cadenaInvertida = "";
        for (let i = cadena1.length - 1; i >= 0; i--) {
            cadenaInvertida += cadena1[i]
        }

        if (cadenaInvertida === cadena2) {
            console.log("Son iguales")
        }
        else console.log("No son iguales")
    }
}


esPalindromo("aaa", "aaa");