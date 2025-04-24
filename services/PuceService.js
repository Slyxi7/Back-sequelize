const {} = require("sequelize");
const Puce = require("../models/puce");

class PuceService {
  async getAllPuce() {
    return await Puce.findAll();
  }
}
module.exports = new PuceService();