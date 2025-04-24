const ExamenService = require("../services/ExamenService");

class ExamenController {
  async getAllExamen(req, res) {
    try {
      const examens = await ExamenService.getAllExamen();

      res.json(examens);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Examens" });
    }
  }

}
module.exports = new ExamenController();