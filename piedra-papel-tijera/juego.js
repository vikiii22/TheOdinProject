var opciones = [1, 2, 3];

function computerPlay() {
    var compu = Math.floor((Math.random() * 3) + 1);
    return compu;
}
var vecesGanadas = 0;
var computerSelection;
var rondas=0;

function playRound(playerSelection) {
    var mensaje;
    computerSelection = computerPlay();
    if (playerSelection == 1) {
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
        rondas++;
    }
    if (playerSelection == 2) {
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
        rondas++;
    }
    if (playerSelection == 3) {
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
        rondas++;
    }

    if (mensaje == "Ganador") {
        vecesGanadas++;
    }

    console.log("Has ganado " + vecesGanadas + " veces");

    if(rondas>=5){
        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    var texto = document.getElementById('texto');
    texto.textContent = mensaje;
    return mensaje;
}

function game() {
    for (let index = 1; index <= 5; index++) {
        console.log(playRound());
    }
}

game();