let array1 = [5, 2, 4, 4, 55, 11];

function procesarArray(array) {
    if (array.every(element => isNaN(element))) {
        alert("ERROR")
    }
    else {
        let i = 0;
        array.forEach(function (element, i, array) {
            array[i] = element * 2;
            i++;
        })

        console.log(array.every(element => element % 2 == 0) ? "Son todos pares" : "No son todos pares")
    }
}

procesarArray(array1);