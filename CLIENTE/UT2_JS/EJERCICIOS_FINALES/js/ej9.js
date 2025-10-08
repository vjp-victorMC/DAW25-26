class PlatoCocina {
    constructor(nombre, duracionMinutos, dificultad) {
        this.nombre = nombre;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;

    }

    toString() {
        return "El plato " + this.nombre + " tiene un duracion de " + this.duracionMinutos + " con dificultad " + this.dificultad
    }
}

let mapaPlatos = new Map();

mapaPlatos.set(new PlatoCocina("Cocido", "60", 6), ["Sal", "Patatas", "Chorizo", "Zanahorias"]);
mapaPlatos.set(new PlatoCocina("Tortilla Española", "45", 7), ["Sal", "Patatas", "Aceite", "Cebolla"]);
mapaPlatos.set(new PlatoCocina("Berenjenas rellenas", "150", 7), ["Carne", "Aceite", "Sal"]);



function pintarMapa(mapa) {
    for (let [plato, ingredientesArray] of mapaPlatos) {
        console.log(plato.toString() + "\nIngredientes: " + ingredientesArray.join("\n"))
    }
}

pintarMapa()





