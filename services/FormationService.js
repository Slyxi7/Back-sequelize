const {} = require("sequelize");
// on importe sequelize
const Formations = require("../models/formations");
// on importe le model formations
class FormationService {
  async getAllFormations() {
    // on declare la fonction getAllFormations;
    return await Formations.findAll(); // on renvoie tous les formations
  }
  async addFormation(formation) {
    // on declare la fonction addFormation
    return await Formations.create(formation); // on renvoie la formation
  }
  async getFormationById(id) {
    // on declare la fonction getFormationById;
    return await Formations.findByPk(id); // on renvoie la formation par son id
  }
}
module.exports = new FormationService();
// on exporte le service Formation
