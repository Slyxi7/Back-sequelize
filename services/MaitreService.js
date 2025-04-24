const {} = require("sequelize");
const Maitre = require("../models/maitre");
const Chien = require("../models/chien");

class MaitreService {
  async getAllMaitre() {
    return await Maitre.findAll({ include: [
        {
          model: Chien,
          as: "chiens",
        },
      ],});
  }

  async getAllMaitreById(maitreId) {
    return await Maitre.findByPk(maitreId, { include: [
        {
          model: Chien,
          as: "chiens",
        },
      ],});
  }
}
module.exports = new MaitreService();