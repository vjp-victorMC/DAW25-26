function sumarLongitudes(...cadenas) {
  if (!cadenas.every(v => typeof v === 'string')) {
    throw new TypeError('Todos los argumentos deben ser cadenas');
  }
  const total = cadenas.reduce((acc, s) => acc + s.length, 0);
  console.log(total);
  return total;
}

// Pruebas
sumarLongitudes('hola', 'mundo');           // 9
sumarLongitudes('JS', 'rest', 'reduce');    // 13
// sumarLongitudes('ok', 123)               // lanza TypeError
