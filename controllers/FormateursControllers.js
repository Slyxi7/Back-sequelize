const FormateurService = require("../services/FormateurService");
// on importe le service foramteur
class FormateursControllers {
  // on declare la classe formateurControllers
  async getAllFormateurs(req, res) {
    // on declare la fonction getAllFormateur
    try {
      // on declare le try
      const formateurs = await FormateurService.getAllFormateurs();
      // on declare la const formateur qui va recuperer tous les formateur
      res.json(formateurs);
      // on renvoie les formateurs au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des formateurs" });
      // on renvoie l'erreur au format json
    }
  }
  async addFormateur(req, res) {
    // on declare la fonction addFormateur
    try {
      // on declare le try
      const formateur = await FormateurService.addFormateur(req.body);
      // on declare la const formateur qui va recuperer la formateur
      res.status(201).json(formateur);
      // on renvoie la formateur au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout du formateur" });
      // on renvoie l'erreur au format json
    }
  }
  async getFormateurById(req, res) {
    // on declare la fonction getFormateurById;
    try {
      // on declare le try
      const formateur = await FormateurService.getFormateurById(req.params.id);
      // on declare la const formateur qui va recuperer la formateur par son id
      if (!formateur) {
        // si la formateur n'existe pas
        return res.status(404).json({ error: "Formateur non trouvée" });
        // on renvoie l'erreur au format json
      }
      res.json(formateur);
      // on renvoie la formateur au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération du formateur" });
      // on renvoie l'erreur au format json
    }
  }
  async updateFormateur(req, res) {
    // on declare la fonction updateFormateur
    try {
      // on declare le try
      const formateur = await FormateurService.updateFormateur(
        req.params.id,
        req.body
      );
      // on declare la const formateur qui va recuperer le formateur par son id
      if (!formateur) {
        // si la formateur n'existe pas
        return res.status(404).json({ error: "Formateur non trouvé" });
        // on renvoie l'erreur au format json
      }
      res.json(formateur);
      // on renvoie la formateur au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la mise à jour de la formation" });
      // on renvoie l'erreur au format json
    }
  }
  async deleteFormateur(req, res) {
    // on declare la fonction deleteFormateur
    try {
      // on declare le try
      const formateur = await FormateurService.deleteFormateur(req.params.id);
      // on declare la const formateur qui va recuperer la formateur par son id
      if (!formateur) {
        // si la fFormateur n'existe pas
        return res.status(404).json({ error: "FFormateur non trouvée" });
        // on renvoie l'erreur au format json
      }
      res.json({ message: "Formateur supprimée avec succès" });
      // on renvoie le message de succes au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la suppression de la fFormateur" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new FormateursControllers();
// on exporte la classe FormateursControllers
