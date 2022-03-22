const content = document.createElement('p');
content.style.color = 'red';
content.textContent = "Oye, soy rojo";
document.body.appendChild(content);

var titulo = document.createElement('h3');
titulo.style.color = 'blue';
titulo.style.fontFamily = 'arial'
titulo.textContent = "Soy un h3 AZUL!";
document.body.appendChild(titulo);

var h1 = document.createElement('h1');
h1.textContent = "Estoy en un div!";

var texto = document.createElement('p');
texto.textContent = "Yo tambieeeen!";

var div = document.createElement('div');
div.style.border = '3px solid black';
div.style.backgroundColor = 'pink';
div.appendChild(h1);
div.appendChild(texto);
document.body.appendChild(div);

var nombre = "";
var genteQueSeCaga = 0;
function nombres() {
    nombre = window.prompt("Quien eres?");
}

function pulsar() {
    var textoCagar = document.createElement('p');
    genteQueSeCaga++;
    textoCagar.style.color = 'yellow';
    textoCagar.style.backgroundColor = 'black'
    textoCagar.style.fontSize = "5em";
    if (genteQueSeCaga > 1) {
        textoCagar.textContent = "Yo soy " + nombre + " y también me cago tio BUF";
    } else {
        textoCagar.textContent = "Soy " + nombre + " Me cago tio BUF";
    }
    document.body.appendChild(textoCagar);
}