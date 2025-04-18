const {} = require("sequelize");
// on importe sequelize
const Stagiaires = require("../models/stagiaires");
// on importe le model stagiaires
class StagiaireService {
  async getAllStagiaires() {
    // on declare la fonction getAllStagiaires;
    return await Stagiaires.findAll(); // on renvoie tous les stagiaires
  }
  async updateStagiaire(id, stagiaire) {
    // on declare la fonction updateStagiaire
    return await Stagiaires.update(stagiaire, {
      where: {
        id_stagiaires: id,
      },
    }); // on renvoie le Stagiaire mise à jour
  }
  async addStagiaire(stagiaire) {
    // on declare la fonction addStagiaire
    return await Stagiaires.create(stagiaire); // on renvoie la Stagiaire
  }
  async deleteStagiaire(id) {
    // on declare la fonction deleteStagiaire
    return await Stagiaires.destroy({
      where: {
        id_stagiaires: id,
      },
    }); // on renvoie le stagiaire supprimé
  }
}
module.exports = new StagiaireService();
// on exporte le service stagiaire
