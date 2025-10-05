class PlatoCocina {
  constructor(nombrePlato, duracionMinutos, dificultad) {
    this.nombrePlato = nombrePlato;
    this.duracionMinutos = duracionMinutos;
    this.dificultad = dificultad;
  }
  toString() {
    return `El plato ${this.nombrePlato} tiene una duración de ${this.duracionMinutos} minutos con dificultad ${this.dificultad}`;
  }
}

const cocido = new PlatoCocina('Cocido', 60, 6);
const tortilla = new PlatoCocina('Tortilla Española', 45, 7);
const berenjenas = new PlatoCocina('Berenjenas rellenas', 150, 7);

const mapaPlatos = new Map();
mapaPlatos.set(cocido, ['Garbanzos', 'Sal', 'Patatas', 'Chorizo', 'Zanahorias']);
mapaPlatos.set(tortilla, ['Huevos', 'Sal', 'Patatas', 'Aceite', 'Cebolla']);
mapaPlatos.set(berenjenas, ['Berenjenas', 'Carne', 'Aceite', 'Queso', 'Pimientos', 'Tomates', 'Bechamel']);

function imprimirMapaPlatos(mapa) {
  for (const [plato, ingredientes] of mapa) {
    console.log(`${plato.toString()}`);
    console.log('Ingredientes:\n- ' + ingredientes.join('\n- '));
    console.log('');
  }
}

imprimirMapaPlatos(mapaPlatos);
