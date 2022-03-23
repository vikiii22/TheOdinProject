var num1=0, num2=1, suma=1;

function fibonacci(numeros){
    console.log(num1);
    for(var i=0; i<=numeros; i++){
        console.log(suma);

        suma=num1+num2;
        num1=num2;
        num2=suma;
    }
}

var veces=window.prompt("Cuantas veces?");
fibonacci(veces);