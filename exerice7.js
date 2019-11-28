var somme, premier, poids_courant, dernier, difference, moyenne, compteur, n;

somme = 0;
compteur = 1;

n = parseInt(prompt("Nombre de mesures"));

console.log(n);
//On commence la boucle ici
for(compteur = 1; compteur <= n; compteur = compteur + 1){
  poids_courant = parseInt(prompt("Entrez le poids numéro " + compteur));
  somme = somme + poids_courant;
  console.log(compteur);

  if (compteur == 1) {
    premier = poids_courant;
    console.log(compteur);
  }
}
//On fini la boucle ici
dernier = poids_courant;
difference = dernier - premier;
moyenne = somme / n;

document.write("Le poids moyen est de " + moyenne + "<br>" + "Le premier poids était de " + premier + "<br>" + "Le dernier poids était de " + dernier +"<br>" + "La différence entre les premiers et derniers poids est de " + difference);
