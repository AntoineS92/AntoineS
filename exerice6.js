var nombre, tarif, total, statut;

nombre = parseInt(prompt("Combien de places ?"));
statut = prompt("Êtes-vous étudiant ?");

if (statut == "oui") {
  tarif = 7.5;
} else {
  if (nombre>3) {
    tarif = 8.75;
  } else {
    tarif = 10;
  }
}

total = nombre * tarif;

document.write ("Vous devez payer " + total + " euros pour ces " + nombre + " places");
