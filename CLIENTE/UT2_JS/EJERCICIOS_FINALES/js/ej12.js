
let estudiante1 = {
    nombre: "Ramón",
    notas: [1, 2, 5, 6, 5]
}
let estudiante2 = {
    nombre: "Victor",
    notas: [10, 9, 5, 6, 5]
}
let estudiante3 = {
    nombre: "Maria",
    notas: [7, 2, 10, 6, 2]
}
let estudiante4 = {
    nombre: "Julia",
    notas: [1, 8, 5, 3, 10]
}

let mapaEstudiantes = new Map();

mapaEstudiantes.set(estudiante1.nombre, estudiante1.notas);

function mediaAritmetica(...notas) {
    let sumaTotal = notas.reduce((total, nota) => total + nota, 0);

    let media = sumaTotal / notas.length;

    return media;

}

function pintarMedia(estudiante) {
    console.log("Nombre: " + estudiante.nombre);
    console.log("Media: " + mediaAritmetica(...estudiante.notas))
    console.log("\n");
}

pintarMedia(estudiante1);
pintarMedia(estudiante2);
pintarMedia(estudiante3);
pintarMedia(estudiante4);




