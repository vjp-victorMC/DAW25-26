function convertirEntradas(producto = "Producto generico", precio = 100, impuestos = 21) {
    // Asegurarse de que producto es string
    if (typeof producto !== "string") {
        producto = "Producto generico";
    }

    // Convertir precio a número y comprobar si es válido
    let precio1 = parseInt(precio);
    if (isNaN(precio1)) {
        precio1 = 100;
    }

    // Convertir impuestos a número y comprobar si es válido
    let impuestos1 = parseInt(impuestos);
    if (isNaN(impuestos1)) {
        impuestos1 = 21;
    }

    console.log("El producto es " + producto + " el precio es " + precio1 + " y su impuesto es " + impuestos1);
}

convertirEntradas("HOLA", "200");
convertirEntradas();
convertirEntradas(null, "true", 21);