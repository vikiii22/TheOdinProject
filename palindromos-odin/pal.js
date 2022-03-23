function pali(palabra){
    const reverso=palabra.split("").reverse().join("");
    return reverso === palabra ? "Es palíndromo":"No es palíndromo";
}

var palabra=window.prompt("Introduce una palabra")
var resultado=document.createElement('p');
resultado.textContent=pali(palabra);
document.body.appendChild(resultado);

console.log(pali("oso"));
console.log(pali("odin"));
console.log(pali("arroz"));
console.log(pali("ana"));