// Ejercicio 1

num1 = parseInt(prompt("Ingrese el importe: "));
descuento = num1 * 0.12;

if(num1 >= 150) {
    final = num1 - descuento
    console.log(`Su monto final es: ${final} `)
    console.log(`Con un descuento de: ${descuento}`);
} else {
    console.log("No se aplica ningún descuento");
}

// Ejercicio 2

alumno = prompt("Ingrese el nombre del alumno: ");
notaParcial = parseInt(prompt("Ingrese la nota del parcial: "));
notaFinal = parseInt(prompt("Ingrese la nota del examen final: "));
promedioPracticas = parseInt(prompt("Ingrese el promedio de prácticas: "));

promedioFinal = (notaParcial * 0.25) + (notaFinal * 0.5) + (promedioPracticas * 0.25);

if(promedioFinal > 10) {
    console.log(`El alumno ${alumno} esta aprobado con una nota de: ${promedioFinal}`);
} else {
    console.log("Estas desaprobado");
}



// Ejercicio 1

trabajador = prompt("Nombre del trabajador: ");
sueldo = parseInt(prompt("Su sueldo básico es: "));
hijos = parseInt(prompt("Numero de hijos: "));

if(hijos > 0) {
    sueldoFinal = sueldo + (sueldo * 0.07);
    console.log(sueldoFinal);
} else {
    console.log("Usted no tiene hijos por lo tanto no tiene acceso al bono");
}


// Ejercicio 2

num1 = parseInt(prompt("Ingrese un número: "));

if(num1 > 500) {
    final = num1 * 0.18;
    console.log(final);
} else {
    console.log("No se hizo ningún cambio: ")
}


// Ejercicio 3

num1 = parseInt(prompt("Ingrese un número: "));
let total = 1

for(let i = 1; i <= num1; i++) {
    total *= i;
}
console.log(total);