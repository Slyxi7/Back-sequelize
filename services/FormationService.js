const {} = require("sequelize");
// on importe sequelize
const Formations = require("../models/formations");
// on importe le model formations
class FormationService {
  async getAllFormations() {
    // on declare la fonction getAllFormations;
    return await Formations.findAll(); // on renvoie tous les formations
  }
}
module.exports = new FormationService();
// on exporte le service Formation
