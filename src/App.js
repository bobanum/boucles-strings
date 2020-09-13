/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		// SAISIE ===================================================
		var nom = prompt("Donnez votre nom", "Rita");
		var taille = nom.length;
		// TRAITEMENT ===============================================
		// AFFICHAGE ================================================
		var tableau = app.appendChild(document.createElement("div"));
		tableau.style.display = "grid";
		tableau.style.gridTemplateColumns = "repeat(" + taille + ", 1em)";
		tableau.style.gridTemplateRows = "repeat(" + taille + ", 1em)";
		tableau.style.gridGap = ".1em";
		tableau.style.fontSize = "200%";
		for (let i = 0; i < taille; i += 1) {
			tableau.appendChild(this.cellule(nom[i]));
		}
		for (let j = 1; j < taille - 1; j += 1) {
			tableau.appendChild(this.cellule(nom[j]));
			for (let i = 1; i < taille-1; i += 1) {
				tableau.appendChild(this.cellule(""));
			}
			tableau.appendChild(this.cellule(nom[taille-1-j]));
		}
		for (let i = taille-1; i >= 0; i -= 1) {
			tableau.appendChild(this.cellule(nom[i]));
		}
	}
	/**
	 * Méthode qui retourne une cellule avec le contenu donné
	 * @param {string} contenu Le texte à insérer dans la cellule
	 * @returns HTMLElement Un élément div
	 */	
	static cellule(contenu) {
		var resultat = document.createElement("div");
		resultat.innerHTML = contenu;
		resultat.style.border = "1px solid black";
		resultat.style.lineHeight = "1em";
		resultat.style.textAlign = "center";
		if (contenu === "") {
			resultat.style.borderColor = "transparent";
		}
		return resultat;
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
