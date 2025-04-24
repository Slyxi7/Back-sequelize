const PuceService = require("../services/PuceService");

class PuceController {
  async getAllPuce(req, res) {
    try {
      const puces = await PuceService.getAllPuce();

      res.json(puces);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Puces" });
    }
  }

}
module.exports = new PuceController();