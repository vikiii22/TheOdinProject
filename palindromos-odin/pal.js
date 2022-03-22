function pali(palabra){
    const reverso=palabra.split("").reverse().join("");
    return reverso === palabra ? "Es palíndromo":"No es palíndromo";
}

console.log(pali("oso"));
console.log(pali("odin"));
console.log(pali("arroz"));
console.log(pali("ana"));