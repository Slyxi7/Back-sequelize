const {} = require("sequelize");
// on importe sequelize
const Maitre = require("../models/maitre");
// on importe le model formateurs
class MaitreService {
  async getAllMaitre() {
    // on declare la fonction getAllMaitre;
    return await Maitre.findAll(); // on renvoie tous les Maitres
  }
  async addMaitre(maitre) {
    // on declare la fonction addFormation
    return await Maitre.create(maitre); // on renvoie la formation
  }
  async getMaitreById(id) {
    // on declare la fonction getMaitreById;
    return await Maitre.findByPk(id); // on renvoie le Maitre par son id
  }
  async updateMaitre(id, maitre) {
    // on declare la fonction updateMaitre
    return await Maitre.update(maitre, {
      where: {
        id_maitre: id,
      },
    }); // on renvoie le formateur mise à jour
  }
  async deleteMaitre(id) {
    // on declare la fonction deleteMaitre
    return await Maitre.destroy({
      where: {
        id_maitre: id,
      },
    }); // on renvoie le maitre supprimé
  }
}
module.exports = new MaitreService();
// on exporte le service Maitre
