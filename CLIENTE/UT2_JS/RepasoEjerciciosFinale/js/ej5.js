//Funcion que ordene un array dado.(Usando sort)

function ordenarArray(array) {
    return array.sort((a, b) => a - b);

}

let arrayDado = [1, 5, 0, 3, 10];

console.log(arrayDado);

console.log(ordenarArray(arrayDado));

function ordenarArrayManual(array) {
    let aux = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1]
                array[j + 1] = aux;
            }
        }

    }

    console.log("Array ordenado:" + array);
}

let nuevoArray = [2, 5, 1]

ordenarArrayManual(nuevoArray);