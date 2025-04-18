const {} = require("sequelize");
// on importe sequelize
const Formateurs = require("../models/formateurs");
// on importe le model formateurs
class FormateursService {
  async getAllFormateurs() {
    // on declare la fonction getAllFormateurs;
    return await Formateurs.findAll(); // on renvoie tous les formateurs
  }
  async addFormateur(formateur) {
    // on declare la fonction addFormation
    return await Formateurs.create(formateur); // on renvoie la formation
  }
  async getFormateurById(id) {
    // on declare la fonction getFormateurById;
    return await Formateurs.findByPk(id); // on renvoie le formateur par son id
  }
  async updateFormateur(id, formateur) {
    // on declare la fonction updateFormateur
    return await Formateurs.update(formateur, {
      where: {
        id_formateur: id,
      },
    }); // on renvoie le formateur mise à jour
  }
  async deleteFormateur(id) {
    // on declare la fonction deleteFormateur
    return await Formateurs.destroy({
      where: {
        id_formateur: id,
      },
    }); // on renvoie le formateur supprimé
  }
}
module.exports = new FormateursService();
// on exporte le service Formateur
