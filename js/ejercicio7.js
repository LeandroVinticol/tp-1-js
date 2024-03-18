//7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let primerNum = prompt('Ingrese el primer número');
let segundoNum = prompt('Ingrese el segundo número');
let tercerNum = prompt('Ingrese el tercer número');
if (primerNum === segundoNum && primerNum === tercerNum) {
  document.write('Los tres numeros son iguales');
} else if (primerNum > segundoNum && primerNum > tercerNum) {
  document.write('El mayor es ', primerNum);
} else if (segundoNum > tercerNum) {
  document.write('El mayor es ', segundoNum);
} else {
  document.write('El mayor es ', tercerNum);
}
