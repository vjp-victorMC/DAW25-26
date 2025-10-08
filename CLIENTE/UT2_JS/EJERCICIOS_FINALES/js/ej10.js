function pruebaRest(...varios) {
    for (let elemento of varios) {
        if (typeof elemento !== "string") {
            console.log("error")
            return;
        }
    }

    let longitudCadenas = varios.reduce((acumulado, cadenaActual) => acumulado + cadenaActual.length, 0);

    console.log(longitudCadenas);
}

pruebaRest("Hola", "que", "tal");