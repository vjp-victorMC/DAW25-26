function imprimirNumerosPares(...params) {
  const numeros = params.filter(v => typeof v === 'number' && Number.isFinite(v));
  const pares = numeros.filter(n => n % 2 === 0);
  if (pares.length > 0) console.log(pares.join(', '));
  return pares;
}

// Pruebas
imprimirNumerosPares(1, 2, '3', 4, null, 6, 7, 8); // 2, 4, 6, 8
imprimirNumerosPares('a', true, 11, 13);           // (no imprime nada)
