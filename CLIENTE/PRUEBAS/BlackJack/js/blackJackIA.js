// BlackJack básico 1–10 sin figuras ni As flexible

const PALOS = ["Corazones", "Picas", "Treboles", "Diamantes"];
const VALORES = [1,2,3,4,5,6,7,8,9,10];

function construirMazo() {
  const mazo = [];
  for (const p of PALOS) {
    for (const v of VALORES) {
      mazo.push({ palo: p, valor: v, nombre: `${v} de ${p}` });
    }
  }
  return mazo;
}

function sacarCarta(mazo) {
  const i = Math.floor(Math.random() * mazo.length);
  const [carta] = mazo.splice(i, 1); // quitar del mazo
  return carta;
}

function calcularValorMano(cartas) {
  return cartas.reduce((acc, c) => acc + c.valor, 0);
}

function turnoJugador(mazo) {
  const cartas = [];
  while (true) {
    const carta = sacarCarta(mazo);
    cartas.push(carta);
    const suma = calcularValorMano(cartas);
    alert(`Robas: ${carta.nombre}\nTu mano: ${cartas.map(c=>c.nombre).join(", ")}\nTotal: ${suma}`);
    if (suma === 21) {
      return { cartas, suma, estado: "blackjack" };
    }
    if (suma > 21) {
      return { cartas, suma, estado: "pierde" };
    }
    const pedir = confirm("¿Pides otra carta? (Aceptar = Sí / Cancelar = Plantarse)");
    if (!pedir) return { cartas, suma, estado: "plantado" };
  }
}

function turnoMaquina(mazo, objetivo) {
  const cartas = [];
  while (true) {
    const suma = calcularValorMano(cartas);
    if (suma >= objetivo || suma >= 21) {
      return { cartas, suma, estado: suma > 21 ? "pierde" : "plantado" };
    }
    const carta = sacarCarta(mazo);
    cartas.push(carta);
  }
}

function decidirGanador(j, m) {
  if (j.estado === "pierde") return "La máquina gana (te pasaste).";
  if (j.estado === "blackjack") {
    if (m.suma === 21 && m.cartas.length === 2) return "Empate a 21.";
    return "¡Ganas con 21!";
  }
  if (m.estado === "pierde") return "Ganas (la máquina se pasó).";
  if (m.suma > j.suma) return "La máquina gana.";
  if (m.suma < j.suma) return "Ganas tú.";
  return "Empate.";
}

function mostrarManos(j, m) {
  alert(
    `Tus cartas (${j.suma}): ${j.cartas.map(c=>c.nombre).join(", ")}\n` +
    `Cartas máquina (${m.suma}): ${m.cartas.map(c=>c.nombre).join(", ")}`
  );
}

function blackJack() {
  const mazo = construirMazo();
  const j = turnoJugador(mazo);
  if (j.estado === "pierde" || j.estado === "blackjack") {
    const m = { cartas: [], suma: 0, estado: "sin_jugar" };
    mostrarManos(j, m);
    alert(decidirGanador(j, m));
    return;
  }
  const m = turnoMaquina(mazo, j.suma);
  mostrarManos(j, m);
  alert(decidirGanador(j, m));
}

// Bucle principal
while (confirm("¿Quieres jugar a BlackJack?")) {
  blackJack();
}
