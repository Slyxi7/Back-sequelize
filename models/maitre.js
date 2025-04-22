const { Model, DataTypes } = require("sequelize");
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require("../config/sequelize");
// on importe la config de sequelize
class Maitre extends Model {}
// on declare la class formateurs qui herite de model
Maitre.init(
  // on initialise le model
  {
    id_maitre: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type de données
      primaryKey: true, // on declare la clé primaire
      autoIncrement: true, // on declare l'auto increment
      allowNull: false, // on declare le champ comme non nul,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Maitre", // on declare le nom du model
    tableName: "Maitre", // on declare le nom de la table
    timestamps: false, // on declare les timestamps
  }
);
module.exports = Maitre;
// on exporte le model formateurs
