class Libros {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    info() {
        return this.titulo + " tiene " + this.paginas;
    }

    anyadir() {
        var nuevo = new Libros(window.prompt("Titulo"), window.prompt("Autor"), window.prompt("Paginas"));
        if (nuevo.titulo != '') {
            biblioteca.push(nuevo);
            console.log(nuevo.info());
        }
    }
}

var biblioteca = [];
var libro1 = new Libros("Harry potter", "JK", "600");
console.log(libro1.info());

function anyadirLibro() {
    libro1.anyadir();
}