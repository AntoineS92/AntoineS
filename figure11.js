var dé1, dé2, dé3;

dé1 = parseInt(prompt("Entrez la valeur du dé 1"));
dé2 = parseInt(prompt("Entrez la valeur du dé 2"));
dé3 = parseInt(prompt("Entrez la valeur du dé 3"));

console.log(dé1, dé2, dé3);

if (dé1 == dé2 && dé1 == dé3) {
  document.write("Tu as un full !");
} else {
  if (dé1 + 1 == dé2 && dé2 + 1 == dé3) {
    document.write("Tu as une suite !");
  } else {
    if (dé1 == dé2 || dé2 == dé3) {
      document.write("Tu as une paire !");
    } else {
      document.write("Tu ne marques aucun point...");
    }
  }
}
