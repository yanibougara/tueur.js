let jason = 100;
let survivants = [
  { nom: "Yani", caractéristique: "nerd" },
  { nom: "Alyssia", caractéristique: "charismatique" },
  { nom: "Léo", caractéristique: "sportif" },
  { nom: "Olivier", caractéristique: "blonde" },
  { nom: "Louca", caractéristique: "mystérieux" },
];
function attaquerSurvivant(survivant) {
  let probabilitéMourir = Math.random();
  if (probabilitéMourir < 0.3) {
    console.log("Jason a tué " + survivant.nom);
  } else if (probabilitéMourir < 0.8) {
    console.log(survivant.nom + " a esquivé et infligé 10 dégats");
    jason -= 10;
  } else {
    console.log(survivant.nom + " a infligé 15 dégats mais est mort");
    jason -= 15;
  }
}
while (jason > 0 && survivants.length > 0) {
  let LesSurvivantAleatoire = Math.floor(Math.random() * survivants.length);
  let survivantAleatoire = survivants[LesSurvivantAleatoire];
  attaquerSurvivant(survivantAleatoire);
  survivants.splice(LesSurvivantAleatoire, 1);
}
if (jason <= 0) {
  console.log("Jason est mort");
} else {
  console.log("Les survivants ont gagnés!!");
}

