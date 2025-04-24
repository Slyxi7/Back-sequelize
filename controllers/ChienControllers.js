const ChienService = require("../services/ChienService");
// on importe le service Maitre
class ChienController {
  // on declare la classe MChienController
  async getAllChien(req, res) {
    // on declare la fonction getAllMChiens
    try {
      // on declare le try
      const chien = await ChienService.getAllChien();
      // on declare la const Chien qui va recuperer tous les Chien
      res.json(chien);
      // on renvoie les Chien au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des chien" });
      // on renvoie l'erreur au format json
    }
  }
  async addChien(req, res) {
    // on declare la fonction addChien
    try {
      // on declare le try
      const chien = await ChienService.addChien(req.body);
      // on declare la const Chien qui va recuperer la Chien
      res.status(201).json(chien);
      // on renvoie la Chien au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout du chien" });
      // on renvoie l'erreur au format json
    }
  }
  async updateChien(req, res) {
    // on declare la fonction updateChien
    try {
      // on declare le try
      const chien = await ChienService.updateChien(
        req.params.id,
        req.body
      );
      // on declare la const Chien qui va recuperer le Chien par son id
      if (!chien) {
        // si la Chien n'existe pas
        return res.status(404).json({ error: "Chien non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json(chien);
      // on renvoie la Stagiaire au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la mise à jour de la formation" });
      // on renvoie l'erreur au format json
    }
  }
  async deleteChien(req, res) {
    // on declare la fonction deleteChien
    try {
      // on declare le try
      const chien = await ChienService.deleteChien(req.params.id);
      // on declare la const Chien qui va recuperer la Chien par son id
      if (!chien) {
        // si la Chien n'existe pas
        return res.status(404).json({ error: "Chien non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json({ message: "Chien supprimée avec succès" });
      // on renvoie le message de succes au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la suppression de la chien" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new ChienController();
// on exporte la classe ChienController
