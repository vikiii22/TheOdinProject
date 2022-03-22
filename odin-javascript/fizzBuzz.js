var veces=prompt("Dime los números que quieres imprimir");
var i;
for (i = 1; i <= parseInt(veces); i++) {
    if (i % 3 == 0) {
        console.log("efervescencia")
    } else if (i % 5 == 0) {
        console.log("zumbido")
    }else if(i % 3==0 && i % 5==0){
        console.log("fizzBuzz")
    }else{
        console.log(i);
    }
}