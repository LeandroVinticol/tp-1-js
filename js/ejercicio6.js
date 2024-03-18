//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let primerNum = prompt("Ingrese el primer número");
let segundoNum = prompt("Ingrese el segundo número");
if (primerNum > segundoNum) {
  document.write("El mayor es ", primerNum);
} else if (primerNum < segundoNum) {
  document.write("El mayor es ", segundoNum);
} else {
  document.write("Los dos valores son iguales");
}
