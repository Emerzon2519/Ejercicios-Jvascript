// Ejercicio 1
num1 = parseInt(prompt("Ingrese un número: "));
num2 = parseInt(prompt("Ingrese un número: "));

suma = num1 + num2;
multiplicacion = num1 * num2;

console.log(suma);
console.log(multiplicacion);

// Ejercicio 2

num3 = parseInt(prompt("Ingrese un número entero: "));

porcentaje = num3 * 0.2;

console.log(porcentaje);

// Ejercicio 3

num4 = parseInt(prompt("Ingrese un numero en metros: "))

centimetros = num4 * 100;
milimetros = num4 * 1000;

console.log(centimetros);
console.log(milimetros);

// Ejercicio 4

base = parseInt(prompt("Ingrese la base: "))
altura = parseInt(prompt("Ingrese la altura: "))

area = (base * altura) / 2;

console.log(area);

// Ejercicio 5

num5 = parseInt(prompt("Ingrese un monto en dolares: "));

soles = num5 * 3.38;

console.log(`${soles} soles`);

// Ejercicio 6

num6 = parseInt(prompt("Ingrese un numero en pulgadas: "));

milimetros = num6 * 25.4;

console.log(milimetros);

// Ejercicio 7 

let num7 = prompt("Ingrese un número de 3 dígitos: ");

resultado = num7[0];
resultado1 = num7[1];
resultado2 = num7[2];
resultadoFinal = (parseInt(resultado) + parseInt(resultado1) + parseInt(resultado2)) ** 2;
console.log(resultadoFinal);

// Ejercicio 8

monto = parseInt(prompt("Ingrese el monto: "));

A = monto * 0.3;
B = monto * 0.2;
C = monto * 0.5;

console.log(A);
console.log(B);
console.log(C);

// Ejercicio 9

precio = parseInt(prompt("Ingrese el precio base del producto: "));
IGV = precio * 0.19;

precioFinal = precio + IGV;

console.log(`Este es el IGV: ${IGV}`);
console.log(`Este es el precio final: ${precioFinal}`);


// Ejercicio 10

general = parseInt(prompt("Ingresar la cantidad de entradas generales vendidas: "));
mayores = parseInt(prompt("Ingresar la cantidad de entradas para mayores de 65 años de edad vendidas: "));
menores = parseInt(prompt("Ingresar la cantidad de entradas para menores de edad vendidas: "));

generalFinal = general * 150;
mayoresFinal = mayores * 50;
menoresFinal = menores * 80;

montoFinal = generalFinal + mayoresFinal + menoresFinal;

console.log(generalFinal);
console.log(mayoresFinal);
console.log(menoresFinal);
console.log(montoFinal);




// Ejercicio 1 

nota1 = parseInt(prompt("Ingrese la primera nota: "));
nota2 = parseInt(prompt("Ingrese la segunda nota: "));
nota3 = parseInt(prompt("Ingrese la tercera nota: "));

notaFinal = (nota1 + nota2 + nota3) / 3;

console.log(notaFinal);


// Ejercicio 2

sueldo1 = parseInt(prompt("Ingrese el primer sueldo: "));
sueldo2 = parseInt(prompt("Ingrese el segundo sueldo: "));
sueldo3 = parseInt(prompt("Ingrese el tercer sueldo: "));

sueldoFinal1 = sueldo1 + (sueldo1 * 0.1);
sueldoFinal2 = sueldo2 + (sueldo2 * 0.12);
sueldoFinal3 = sueldo3 + (sueldo3 * 0.15);

console.log(sueldoFinal1);
console.log(sueldoFinal2);
console.log(sueldoFinal3);


// Ejercicio 3

nota1 = parseInt(prompt("Ingrese su primera nota: "));
nota2 = parseInt(prompt("Ingrese su segunda nota: "));
nota3 = parseInt(prompt("Ingrese su tercera nota: "));

notaFinal1 = nota1 * 0.3;
notaFinal2 = nota2 * 0.3;
notaFinal3 = nota3 * 0.4;

promedioFinal = notaFinal1 + notaFinal2 + notaFinal3;

console.log(notaFinal1);
console.log(notaFinal2);
console.log(notaFinal3);
console.log(promedioFinal);






