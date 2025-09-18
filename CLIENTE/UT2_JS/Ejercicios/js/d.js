let cadena = "Aola que tal";

function cadenas(string){
    let longitud= string.replace(/\s/g,"").length;
    let empiezaA = string.startsWith("A");

    console.log("Longitud de la cadena:"+longitud)
    console.log("Empieza por A? "+(empiezaA? "si":"no"))
}

cadenas(cadena);

