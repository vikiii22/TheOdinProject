function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'oscuro' ? 'claro' : 'oscuro';
    root.className = newTheme;

    document.querySelector('.tema').textContent = newTheme;
    console.log("pulsado");
}

document.querySelector('.cambiaColor').addEventListener('click', setTheme);