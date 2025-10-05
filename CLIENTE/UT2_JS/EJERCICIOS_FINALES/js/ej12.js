
const estudiantes = new Map([
  ['Ana',   [7, 8, 9, 6, 7, 8]],
  ['Bruno', [5, 6, 7, 6, 5, 6]],
  ['Carla', [9, 9, 8, 10, 9, 8]],
  ['Diego', [6, 7, 6, 7, 6, 7]],
]);

// a) mediaAritmetica con número indeterminado de elementos
function mediaAritmetica(...nums) {
  return nums.reduce((acc, n) => acc + n, 0) / nums.length;
}

// a) Pintar nombre + media de cada estudiante
function imprimirMedias(mapa) {
  for (const [nombre, notas] of mapa.entries()) {
    const media = mediaAritmetica(...notas);
    console.log(`${nombre}: ${media.toFixed(2)}`);
  }
}

// b) Estudiante con mejor media y su media
function mejorEstudiante(mapa) {
  let mejorNombre = null;
  let mejorMedia = -Infinity;
  for (const [nombre, notas] of mapa) {
    const media = mediaAritmetica(...notas);
    if (media > mejorMedia) {
      mejorMedia = media;
      mejorNombre = nombre;
    }
  }
  console.log(`Mejor: ${mejorNombre} con media ${mejorMedia.toFixed(2)}`);
  return { nombre: mejorNombre, media: mejorMedia };
}

// c) Nombres ordenados por media (de mayor a menor)
function nombresOrdenadosPorMedia(mapa) {
  const ordenados = [...mapa.entries()]
    .map(([nombre, notas]) => [nombre, mediaAritmetica(...notas)])
    .sort((a, b) => b[1] - a[1])
    .map(([nombre]) => nombre);
  console.log(ordenados.join(', '));
  return ordenados;
}

// Ejecutar
imprimirMedias(estudiantes);
mejorEstudiante(estudiantes);
nombresOrdenadosPorMedia(estudiantes);
