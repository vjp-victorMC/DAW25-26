
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
    notas: [1, 8, 5, 13, 10]
}

let mapaEstudiantes = new Map();

mapaEstudiantes.set(estudiante1.nombre, estudiante1.notas);
mapaEstudiantes.set(estudiante2.nombre, estudiante2.notas);
mapaEstudiantes.set(estudiante3.nombre, estudiante3.notas);
mapaEstudiantes.set(estudiante4.nombre, estudiante4.notas);

function mediaAritmetica(...notas) {
    let sumaTotal = notas.reduce((total, nota) => total + nota, 0);

    let media = sumaTotal / notas.length;

    return media;

}

function mostrarEstudiantes(mapaEstudiantes) {
    mapaEstudiantes.forEach((notas, nombre) => {
        console.log("Nombre: " + nombre);
        console.log("Media: " + mediaAritmetica(...notas))
        console.log("\n");
    });
}

mostrarEstudiantes(mapaEstudiantes);


function pintarMejorAlumno(mapaEstudiantes) {
    let mejorMedia = 0;
    let mejorAlumno = "";

    mapaEstudiantes.forEach((notas, nombre) => {
        let notaMedia = mediaAritmetica(...notas);
        if (notaMedia > mejorMedia) {
            mejorMedia = notaMedia;
            mejorAlumno = nombre;
        }
    });

    console.log("El mejor alumno es " + mejorAlumno + " con una nota media de " + mejorMedia);
}

pintarMejorAlumno(mapaEstudiantes);


function ordenarEstudiantes(mapaEstudiantes) {
    let arrayEstudiantes = Array.from(mapaEstudiantes);

    for (let i = 0; i < arrayEstudiantes.length; i++) {
        for (let j = 0; j < arrayEstudiantes[i].length; j++) {
            if (j = 1) {
                arrayEstudiantes[i][j] = mediaAritmetica(...arrayEstudiantes[i][j]);
            }
        }
    }

    arrayEstudiantes.sort((a, b) => b[1] - a[1]);

    let estudiantesOrdenados = new Map(arrayEstudiantes);
}

ordenarEstudiantes(mapaEstudiantes);

















