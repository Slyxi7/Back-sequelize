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
  async updateFormation(id, formation) {
    // on declare la fonction updateFormation
    return await Formations.update(formation, {
      where: {
        id_formation: id,
      },
    }); // on renvoie la formation mise à jour
  }
  async deleteFormation(id) {
    // on declare la fonction deleteFormation
    return await Formations.destroy({
      where: {
        id_formation: id,
      },
    }); // on renvoie la formation supprimée
  }
}
module.exports = new FormationService();
// on exporte le service Formation
