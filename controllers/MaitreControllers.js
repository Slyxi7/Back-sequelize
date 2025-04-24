const MaitreService = require("../services/MaitreService");

class MaitreController {
  async getAllMaitre(req, res) {
    try {
      const Maitres = await MaitreService.getAllMaitre();

      res.json(Maitres);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des Maitres" });
    }
  }

  async getAllMaitreById(request, response) {
    try {
      const Maitres = await MaitreService.getAllMaitreById(request.params.id);
      response.json(Maitres);
    } catch (error) {
      response.status(500);
      response.json({
        error: "Une erreur est survenue lors de la récupération du Patient",
      });
    }
  }
}
module.exports = new MaitreController();
