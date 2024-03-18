//11. Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let num = prompt('Ingrese un número');
document.write('Numero ingresado: ', num);
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
  if (num % 2 === 0) {
    document.write('<br>El numero es divisible por 2');
  }
  if (num % 3 === 0) {
    document.write('<br>El numero es divisible por 3');
  }
  if (num % 5 === 0) {
    document.write('<br>El numero es divisible por 5');
  }
  if (num % 7 === 0) {
    document.write('<br>El numero es divisible por 7');
  }
} else {
  document.write('<br>El numero no es divisible por 2, 3, 5 o 7');
}
