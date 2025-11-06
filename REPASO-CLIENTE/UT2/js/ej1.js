function pintarMasCorta(cadena1, cadena2) {
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        console.log("Debes usar dos cadenas")
    }
    else {
        if (cadena1.length > cadena2.length) {
            console.log("La cadena mas corta de las dos es: " + cadena2)
        }
        else {
            console.log("La cadena mas corta de las dos es: " + cadena1)
        }

    }
}

pintarMasCorta("aaa", "");