class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        return this.nombre + " (" + this.edad + ")";
    }
}

let personas = [
    new Persona("Marcos", 28),
    new Persona("Carlos", 18),
    new Persona("Maria", 8),
    new Persona("Victor", 38)];


function ordenaPersonas(p1, p2) {
    return p1.edad - p2.edad;
}

personas.sort(ordenaPersonas);
console.log(personas.toString());
