const {} = require("sequelize");
// on importe sequelize
const Chien = require("../models/chien");
const Puce = require("../models/puce");
const Examen = require("../models/examen");
// on importe le model formateurs
class ChienService {
  async getAllChien() {
    // on declare la fonction getAllChien;
    return await Chien.findAll({
      include: [
        {
          model: Puce,
          as: "puces"
        },
        {
          model: Examen,
          as: "examens"
        },
      ],
    }); // on renvoie tous les Chiens
  }
  async addChien(chien) {
    // on declare la fonction addFormation
    return await Chien.create(chien); // on renvoie la formation
  }
  async getChienById(id) {
    // on declare la fonction getChienById;
    return await Chien.findByPk(id); // on renvoie le Chien par son id
  }
  async updateChien(id, chien) {
    // on declare la fonction updateChien
    return await Chien.update(chien, {
      where: {
        id_chien: id,
      },
    }); // on renvoie le formateur mise à jour
  }
  async deleteChien(id) {
    // on declare la fonction deleteChien
    return await Chien.destroy({
      where: {
        id_chien: id,
      },
    }); // on renvoie le Chien supprimé
  }
}
module.exports = new ChienService();
// on exporte le service Chien
