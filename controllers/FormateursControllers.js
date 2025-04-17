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
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des formateurs" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new FormateursControllers();
// on exporte la classe FormateursControllers
