const {} = require("sequelize");
// on importe sequelize
const Formateurs = require("../models/formateurs");
// on importe le model formateurs
class FormateursService {
  async getAllFormateurs() {
    // on declare la fonction getAllFormateurs;
    return await Formateurs.findAll(); // on renvoie tous les formateurs
  }
}
module.exports = new FormateursService();
// on exporte le service Formateur
