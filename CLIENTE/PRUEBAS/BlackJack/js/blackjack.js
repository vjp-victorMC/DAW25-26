/**
 * Función para lanzar un juego de blackjack
 */

function blackJack() {
    console.log("Creando el mazo...");
    let mazo = construirMazo();

    let cartasJugador = turnoJugador(mazo);
    let valorJugador = calcularValorMano(cartasJugador);
    let cartasMaquina;
    if (valorJugador < 21) {
        cartasMaquina = turnoMaquina(mazo, valorJugador);

    }
}


function calcularValorMano(cartas) {

    let valorTotal = 0;

    cartas.forEach(carta => {
        valorTotal += carta.valor;
    });

    return valorTotal;

}


// Creacion de cartas 
// Declaramos array con nombres de Palos

let palos = ["Corazones", "Picas", "Treboles", "Diamantes"];
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function construirMazo() {
    let mazo = [];
    for (let i = 0; i < palos.length; i++) {
        for (let j = 0; j < valores.length; j++) {
            mazo.push({ palo: palos[i], valor: valores[j] });
        }
    }

    return mazo;
}

function turnoJugador(mazo) {

    let cartasJugador = [];
    let sumaTotal = 0;
    console.log("Pidiendo cartas...");

    do {
        console.log("sacar carta");
        console.log(sumaTotal);
        let cartaJugador = sacarCarta(mazo);
        cartasJugador.push(cartaJugador);
        sumaTotal += cartaJugador.valor;
        console.log(cartasJugador);

    } while (confirm("Desea pedir más cartas?") && sumaTotal < 21);

    if (sumaTotal == 21) {
        console.log("Has ganado")
        return;
    }
    else if (sumaTotal > 21) {
        console.log("Te has pasado")
        return;
    }

    else {
        console.log("Su puntuacion es de: " + sumaTotal);
        return cartasJugador;
    }
    // else {
    //     console.log("Te has pasado")
    // }

}

function turnoMaquina(mazo, valorJugador) {
    let sumaTotal = 0;
    do {
        let cartasMaquina = [];
        sumaTotal = 0;
        console.log(sumaTotal);
        let cartaMaquina = sacarCarta(mazo);
        sumaTotal += cartaMaquina.valor;
        cartasMaquina.push(cartaMaquina);
    } while (sumaTotal < valorJugador);

    if (sumaTotal > valorJugador && sumaTotal > 21) {
        console.log("El jugador gana")
    }
    else if (sumaTotal > valorJugador && sumaTotal <= 21) {
        console.log("Gana la maquina")
    }
    else console.log("empate");

    return cartasMaquina;

}

function sacarCarta(mazo) {
    let indiceAleatorio = Math.floor(Math.random() * 40);
    let carta = mazo[indiceAleatorio];
    return carta;
}

while (confirm("Quieres jugar a BlackJack?")) {
    blackJack();
}





