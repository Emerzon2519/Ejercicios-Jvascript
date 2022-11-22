// Ejercicio 1

let restar = function(a,b) {
    return a - b;
}

const resultado = restar(10,5);
console.log(resultado);


// Ejercicio 2

// ºC = (ºF-32) ÷ 1.8

let conversion = (F) => {return (F - 32) / 1.8;};

let resultado1 = conversion(40);
console.log(`La conversion da como rersultado ${resultado1}`);


// Ejercicio 3

num1 = parseInt(prompt("Ingrese un número: "));
num2 = parseInt(prompt("Ingrese un número: "));

function sumar() {
    return num1 + num2;
}

console.log(sumar());