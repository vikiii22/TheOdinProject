var opciones = [1, 2, 3];

function computerPlay() {
    var compu = Math.floor((Math.random() * 3) + 1);
    var elegido;
    if (compu == 1) {
        elegido = 1;
    } else if (compu == 2) {
        elegido = 2;
    } else {
        elegido = 3;
    }
    console.log(elegido);
    return elegido;
}
var vecesGanadas = 0;

function playRound(playerSelection, computerSelection) {
    var mensaje;
    if (eleccionUsua == 1) {
        if (opciones[computerSelection] == 1) {
            console.log("Empate");
            mensaje = "Empatador";
        } else if (opciones[computerSelection] == 2) {
            console.log("Pierdes");
            mensaje = "Perdedor";
        } else {
            console.log("Ganas");
            mensaje = "Ganador";
        }
    }
    if (eleccionUsua == 2) {
        if (opciones[computerSelection] == 1) {
            console.log("Ganas");
            mensaje = "Ganador";
        } else if (opciones[computerSelection] == 2) {
            console.log("Empate");
            mensaje = "Empatador";
        } else {
            console.log("Pierdes");
            mensaje = "Perdedor";
        }
    } 
    if (eleccionUsua == 3) {
        if (opciones[computerSelection] == 1) {
            console.log("Pierdes");
            mensaje = "Perdedor";
        } else if (opciones[computerSelection] == 2) {
            console.log("Ganas");
            mensaje = "Ganador";
        } else {
            console.log("Empatas");
            mensaje = "Empatador";
        }
    }

    if (mensaje == "Ganador") {
        vecesGanadas++;
    }

    return mensaje;
}

var eleccionUsua = 3;

function eligeUsuario(eleccionUsu) {
    eleccionUsua=parseInt(eleccionUsu);
}

function game() {
    for (let index = 1; index <= 5; index++) {
        const player = eligeUsuario(eleccionUsua);
        const computer = computerPlay();
        console.log(playRound(player, computer));
    }
    console.log("Has ganado " + vecesGanadas + " veces");
}

game();