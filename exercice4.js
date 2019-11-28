var conso1, conso2, conso_mini, conso_maxi;

conso1 = parseInt(prompt("première consommation (doit être un nombre entier)"));
conso2 = parseInt(prompt("deuxième consommation (doit être un nombre entier)"));

if (conso1>conso2) {
  conso_mini = conso2;
  conso_maxi = conso1;
} else {
  conso_mini = conso1;
  conso_maxi = conso2;
}

document.write("votre consommation minimale est : " + conso_mini + "<br>", "votre consommation maximale est : " + conso_maxi);
