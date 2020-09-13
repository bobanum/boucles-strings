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
		// TRAITEMENT ===============================================
		// AFFICHAGE ================================================
	}
	/**
	 * Méthode qui retourne une cellule avec le contenu donné
	 * @param {string} contenu Le texte à insérer dans la cellule
	 * @returns HTMLElement Un élément div
	 */	
	static cellule(contenu) {
		var resultat;
		
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
