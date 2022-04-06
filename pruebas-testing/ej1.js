const capitalize = (palabra) => {
    var salida="";
    salida+=palabra.charAt(0).toUpperCase();
    for(var i=1; i<=palabra.length; i++){
        salida+=palabra.charAt(i);
    }
    return salida;
}


const inversa=(palabraInversa)=>{
    return palabraInversa.split("").reverse().join("");
}

const calculadora=(num1, num2)=>{
    return num1 + num2;
}

module.exports = capitalize;

module.exports=inversa;

module.exports=calculadora;