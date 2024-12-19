
class Guerrier {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom; 
        this.pointsDeVie = pointsDeVie; 
        this.attaque = attaque; 
        this.precision = precision; 
    }

    attaquer(adversaire) {
        if (Math.random() < this.precision) {
            adversaire.pointsDeVie -= this.attaque; 
            console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${this.attaque} points de dégâts !`);
        } else {
            console.log(`${this.nom} attaque ${adversaire.nom} mais manque sa cible !`);
        }
    }

    estVivant() {
        return this.pointsDeVie > 0; 
    }
}

let guerrier1 = new Guerrier("James", 100, 15, 0.3);
let guerrier2 = new Guerrier("Zouz", 80, 17, 0.8);

console.log("Début du combat !");
while (guerrier1.estVivant() && guerrier2.estVivant()) {
    guerrier1.attaquer(guerrier2); 
    if (!guerrier2.estVivant()) break; 
    guerrier2.attaquer(guerrier1); 
}

if (guerrier1.estVivant()) {
    console.log(`${guerrier1.nom} est le vainqueur avec ${guerrier1.pointsDeVie} points de vie restants !`);
} else if (guerrier2.estVivant()) {
    console.log(`${guerrier2.nom} est le vainqueur avec ${guerrier2.pointsDeVie} points de vie restants !`);
} else {
    console.log("Les deux combattants sont morts dans un duel épique !")};


