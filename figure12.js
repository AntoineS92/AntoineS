var nombre1, nombre2, resultat, n;

nombre1 = parseFloat(prompt("Valeur du nombre 1 :"));
nombre2 = parseFloat(prompt("Valeur du nombre 2 :"));
resultat = 0;

for (n = 1; n <= nombre2; n = n + 1) {
  resultat = resultat + nombre1;
}
console.log(resultat, n);

document.write("Le résultat de " + nombre1 + " * " + nombre2 + " est " + resultat);
