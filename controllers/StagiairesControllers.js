const StagiaireService = require("../services/StagiaireService");
// on importe le service stagiaire
class StagiaireController {
  // on declare la classe stagiaireController
  async getAllStagiaires(req, res) {
    // on declare la fonction getAllStagiaires
    try {
      // on declare le try
      const stagiaires = await StagiaireService.getAllStagiaires();
      // on declare la const stagiaires qui va recuperer tous les stagiaires
      res.json(stagiaires);
      // on renvoie les stagiaires au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
      // on renvoie l'erreur au format json
    }
  }
  async addStagiaire(req, res) {
    // on declare la fonction addStagiaire
    try {
      // on declare le try
      const stagiaire = await StagiaireService.addStagiaire(req.body);
      // on declare la const Stagiaire qui va recuperer la Stagiaire
      res.status(201).json(stagiaire);
      // on renvoie la Stagiaire au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout du Stagiaire" });
      // on renvoie l'erreur au format json
    }
  }
  async updateStagiaire(req, res) {
    // on declare la fonction updateStagiaire
    try {
      // on declare le try
      const stagiaire = await StagiaireService.updateStagiaire(
        req.params.id,
        req.body
      );
      // on declare la const Stagiaire qui va recuperer le Stagiaire par son id
      if (!stagiaire) {
        // si la Stagiaire n'existe pas
        return res.status(404).json({ error: "Stagiaire non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json(stagiaire);
      // on renvoie la Stagiaire au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la mise à jour de la formation" });
      // on renvoie l'erreur au format json
    }
  }
  async deleteStagiaire(req, res) {
    // on declare la fonction deleteStagiaire
    try {
      // on declare le try
      const stagiaire = await StagiaireService.deleteStagiaire(req.params.id);
      // on declare la const Stagiaire qui va recuperer la Stagiaire par son id
      if (!stagiaire) {
        // si la Stagiaire n'existe pas
        return res.status(404).json({ error: "Stagiaire non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json({ message: "Stagiaire supprimée avec succès" });
      // on renvoie le message de succes au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la suppression de la Stagiaire" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new StagiaireController();
// on exporte la classe stagiaireController
