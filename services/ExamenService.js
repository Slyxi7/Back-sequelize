const {} = require("sequelize");
const Examen = require("../models/examen");

class ExamenService {
  async getAllExamen() {
    return await Examen.findAll({
      include: [
        {
          model: Examen,
          as: "examens"
        },
      ]
    });
  }
}
module.exports = new ExamenService();