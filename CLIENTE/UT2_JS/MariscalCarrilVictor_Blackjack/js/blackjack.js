// Constantes del juego
const PALOS = ['Corazones', 'Picas', 'Tréboles', 'Diamantes'];
const VALORES = [1,2,3,4,5,6,7,8,9,10,'Jota','Reina','Rey'];

// Construir mazo ordenado: array de cartas [palo, valor]
function construirMazo() {
  const mazo = [];
  for (const p of PALOS) {
    for (const v of VALORES) {
      mazo.push([p, v]);
    }
  }
  return mazo;
}

function barajar(mazo) {
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
  return mazo;
}

// Valor de una carta individual (figuras valen 10; As = 1 inicialmente)
function valorCarta(carta) {
  const v = carta[1];
  if (v === 'Jota' || v === 'Reina' || v === 'Rey') return 10;
  return Number(v);
}

function calcularValorMano(cartas) {
  let total = 0;
  let ases = 0;
  for (const c of cartas) {
    const v = valorCarta(c);
    if (v === 1) {
      ases += 1;      // contar Ases como 1 por ahora
      total += 1;
    } else {
      total += v;
    }
  }
  // Elevar algunos Ases de 1 a 11 si no nos pasamos
  while (ases > 0 && total + 10 <= 21) {
    total += 10;      // convertir un As de 1 a 11 añade +10
    ases -= 1;
  }
  return total;
}

// Robar una carta del mazo
function robar(mazo) {
  return mazo.pop();
}

// Mostrar carta como string
function cartaToString([palo, valor]) {
  return `[${palo}, ${valor}]`;
}


function turnoJugador(mazo) {
  const mano = [];
  mano.push(robar(mazo));
  mano.push(robar(mazo));
  while (true) {
    const total = calcularValorMano(mano);
    alert(`Tus cartas: ${mano.map(cartaToString).join(', ')}\nTotal: ${total}`);
    if (total >= 21) break;
    const quiere = confirm('¿Pedir otra carta?');
    if (!quiere) break;
    mano.push(robar(mazo));
  }
  return mano;
}

function turnoMaquina(mazo, objetivoJugador) {
  const mano = [];
  mano.push(robar(mazo));
  mano.push(robar(mazo));
  while (calcularValorMano(mano) < objetivoJugador && calcularValorMano(mano) <= 21) {
    mano.push(robar(mazo));
  }
  return mano;
}

function determinarGanador(manoJ, manoM) {
  const vJ = calcularValorMano(manoJ);
  const vM = calcularValorMano(manoM);
  if (vJ > 21) return { ganador: 'Máquina', razon: 'El jugador se pasó de 21' };
  if (vM > 21) return { ganador: 'Jugador', razon: 'La máquina se pasó de 21' };
  if (vM >= vJ) return { ganador: 'Máquina', razon: 'La máquina supera o iguala sin pasarse' };
  return { ganador: 'Jugador', razon: 'El jugador mantiene mayor puntuación' };
}

function blackJack() {
  let mazo = construirMazo();
  mazo = barajar(mazo);
  const cartasJugador = turnoJugador(mazo);
  const valorJugador = calcularValorMano(cartasJugador);
  if (valorJugador > 21) {
    alert(`Te pasaste con ${valorJugador}. Pierdes.\nTus cartas: ${cartasJugador.map(cartaToString).join(', ')}`);
    return;
  }
  const cartasMaquina = turnoMaquina(mazo, valorJugador);
  const valorMaquina = calcularValorMano(cartasMaquina);

  const res = determinarGanador(cartasJugador, cartasMaquina);
  alert(
    `Jugador: ${valorJugador} -> ${cartasJugador.map(cartaToString).join(', ')}\n` +
    `Máquina: ${valorMaquina} -> ${cartasMaquina.map(cartaToString).join(', ')}\n\n` +
    `Gana: ${res.ganador} (${res.razon})`
  );
}

(function loop() {
  if (confirm('¿Quieres jugar al BlackJack?')) {
    blackJack();
    if (confirm('¿Jugar otra vez?')) loop();
  }
})();
