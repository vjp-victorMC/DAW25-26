function contarTipos(array) {
    let num = 0;
    let caden = 0;
    let resto = 0;

    array.forEach(element => {
        if (typeof element === "number") {
            num++;
        }
        else if (typeof element === "string") {
            caden++;
        }
        else {
            resto++;
        }

    })

    console.log("Total de numeros: " + num);
    console.log("Total de cadenas: " + caden);
    console.log("Resto de elementos: " + resto);
}

let arrayPrueba = [1, "Hola", "Adios", 2, true];

contarTipos(arrayPrueba);