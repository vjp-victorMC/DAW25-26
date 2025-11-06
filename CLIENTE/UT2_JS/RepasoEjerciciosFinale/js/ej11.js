function pintarPares(...varios) {

    let arrayNumeros = [];

    varios.forEach(elemento => {
        if (!isNaN(elemento)) {
            arrayNumeros.push(elemento);
            if (elemento % 2 == 0) {
                console.log(elemento + ", ")
            }
        }
    });

}

pintarPares(1, 4, 7, 10, "hola", 2, true);