function suma(){
    var num1=window.prompt("introduce un número");
    var num2=window.prompt("introduce un número");

    console.log(parseInt(num1)+parseInt(num2));
    var result=document.getElementById("resultado");
    var resultados=parseInt(num1)+parseInt(num2);
    result.textContent="Suma: " + num1 + " + " + num2 + " = " + resultados;
    document.body.appendChild(result);
}

function multiplicar(){
    var num1=window.prompt("introduce un número");
    var num2=window.prompt("introduce un número");

    console.log(parseInt(num1)*parseInt(num2));
    var result=document.getElementById("resultado");
    var resultados=parseInt(num1)*parseInt(num2)
    result.textContent="Multiplicación: " + num1 + " X " + num2 + " = " + resultados;
    document.body.appendChild(result);
}

function restar(){
    var num1=window.prompt("introduce un número");
    var num2=window.prompt("introduce un número");

    console.log(parseInt(num1)-parseInt(num2));
    var result=document.getElementById("resultado");
    var resultados=parseInt(num1)-parseInt(num2)
    result.textContent="Resta: " + num1 + " - " + num2 + " = " + resultados;
    document.body.appendChild(result);
}

function dividir(){
    var num1=window.prompt("introduce un número");
    var num2=window.prompt("introduce un número");

    console.log(parseInt(num1)/parseInt(num2));
    var result=document.getElementById("resultado");
    var resultados=parseInt(num1)/parseInt(num2)
    result.textContent="División: " + num1 + " / " + num2 + " = " + resultados;
    document.body.appendChild(result);
}