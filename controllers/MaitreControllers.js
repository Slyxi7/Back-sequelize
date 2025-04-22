const MaitreService = require("../services/MaitreService");
// on importe le service Maitre
class MaitreController {
  // on declare la classe MaitreController
  async getAllMaitre(req, res) {
    // on declare la fonction getAllMaitres
    try {
      // on declare le try
      const maitre = await MaitreService.getAllMaitre();
      // on declare la const maitre qui va recuperer tous les maitre
      res.json(maitre);
      // on renvoie les maitre au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des maitre" });
      // on renvoie l'erreur au format json
    }
  }
  async addMaitre(req, res) {
    // on declare la fonction addMaitre
    try {
      // on declare le try
      const maitre = await MaitreService.addMaitre(req.body);
      // on declare la const Maitre qui va recuperer la Maitre
      res.status(201).json(maitre);
      // on renvoie la Maitre au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout du Maitre" });
      // on renvoie l'erreur au format json
    }
  }
  async updateMaitre(req, res) {
    // on declare la fonction updateMaitre
    try {
      // on declare le try
      const maitre = await MaitreService.updateMaitre(
        req.params.id,
        req.body
      );
      // on declare la const Maitre qui va recuperer le Maitre par son id
      if (!maitre) {
        // si la Maitre n'existe pas
        return res.status(404).json({ error: "Maitre non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json(maitre);
      // on renvoie la Stagiaire au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la mise à jour de la formation" });
      // on renvoie l'erreur au format json
    }
  }
  async deleteMaitre(req, res) {
    // on declare la fonction deleteMaitre
    try {
      // on declare le try
      const maitre = await MaitreService.deleteMaitre(req.params.id);
      // on declare la const Maitre qui va recuperer la Maitre par son id
      if (!maitre) {
        // si la Maitre n'existe pas
        return res.status(404).json({ error: "Maitre non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json({ message: "Maitre supprimée avec succès" });
      // on renvoie le message de succes au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la suppression de la maitre" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new MaitreController();
// on exporte la classe MaitreController
