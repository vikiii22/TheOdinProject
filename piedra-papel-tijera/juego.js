function computerPlay() {
    var compu = Math.floor((Math.random() * 3) + 1);
    var elegido;
    if (compu == 1) {
        elegido = "piedra";
    } else if (compu == 2) {
        elegido = "papel";
    } else {
        elegido = "tijera";
    }
    console.log(elegido);

    return elegido;
}
var vecesGanadas = 0;

function playRound(playerSelection, computerSelection) {
    var mensaje;
    if (playerSelection != computerSelection) {
        console.log("Enhorabuena jugador, has ganado");
        mensaje = "Ganador";
    } else if (playerSelection == computerSelection) {
        console.log("Empate técnico");
        mensaje = "Empatador";
    } else {
        console.log("Has perdido");
        mensaje = "Perdedor";
    }

    if (mensaje == "Ganador") {
        vecesGanadas++;
    }

    return mensaje;
}

function game() {
    for (let index = 1; index <= 5; index++) {
        const player = window.prompt().toLowerCase();
        const computer = computerPlay();
        console.log(playRound(player, computer));
    }
    console.log("Has ganado " + vecesGanadas + " veces");
}

game();