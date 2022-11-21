// Ejercicio 1

num1 = 20;
num2 = 46;
num3 = 19;
num4 = 25;

suma = num1 + num2;
resta = num4 - num3;
multiplicar = suma * resta;

resultadoFinal = console.log(multiplicar);


// Ejercicio 1


hombres = parseInt(prompt("Ingrese la cantidad de varones: "));
mujeres = parseInt(prompt("Ingrese la cantidad de mujeres: "));

hombres2 = `El porcentaje de hombres es de: ${hombres}% de un total de ${hombres + mujeres} personas`;
mujeres2 = `El porcentaje de mujeres es de: ${mujeres}% de un total de ${hombres + mujeres} personas`;

console.log(hombres2);
console.log(mujeres2);


// Ejercicio 2

monto = parseInt(prompt("Ingrese el monto de inversión en soles: "));

avenidaMar = monto * 0.35;
avenidaAbancay = monto * 0.25;
avenidaJulio = monto * 0.1;
avenidaAviacion = monto * 0.15;
avenidaTacna = monto * 0.15;

console.log(avenidaMar);
console.log(avenidaAbancay);
console.log(avenidaJulio);
console.log(avenidaAviacion);
console.log(avenidaTacna);


// Ejercicio 3

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
