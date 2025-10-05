function quitarRepetidosYListar(arr) {
  const contador = new Map();
  for (const x of arr) {
    contador.set(x, (contador.get(x) ?? 0) + 1);
  }

  const sinRepetidos = [...new Set(arr)];

  const repetidos = [];
  for (const [valor, veces] of contador.entries()) {
    if (veces > 1) repetidos.push({ valor, veces });
  }

  if (repetidos.length > 0) {
    console.log('Repetidos: ' + repetidos.map(r => `${r.valor} (${r.veces})`).join(', '));
  } else {
    console.log('No había repetidos');
  }
  return sinRepetidos;
}

// Ejemplos
quitarRepetidosYListar([1,2,2,3,4,4,4,5, '5', '5']);
// -> Repetidos: 2 (2), 4 (3), 5 (2)
