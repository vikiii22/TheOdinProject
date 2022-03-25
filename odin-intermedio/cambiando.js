function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'oscuro' ? 'claro' : 'oscuro';
    root.className = newTheme;

    document.querySelector('.tema').textContent = newTheme;
    console.log("pulsado");
}

document.querySelector('.cambiaColor').addEventListener('click', setTheme);

function double() {
    var number = [1, 2, 3, 4];
    var elDoble = [];

    for (var i = 0; i < number.length; i++) {
        elDoble = number[i] * 2;
        console.log(elDoble);
    }
}

double();