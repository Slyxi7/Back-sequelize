const FormationService = require("../services/FormationService");
// on importe le service formation
class FormationsControllers {
  // on declare la classe formationController
  async getAllFormations(req, res) {
    // on declare la fonction getAllFormations
    try {
      // on declare le try
      const formations = await FormationService.getAllFormations();
      // on declare la const formation qui va recuperer tous les formation
      res.json(formations);
      // on renvoie les formations au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new FormationsControllers();
// on exporte la classe FormationsControllers
