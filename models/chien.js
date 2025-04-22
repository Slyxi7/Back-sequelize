const { Model, DataTypes } = require("sequelize");
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require("../config/sequelize");
// on importe la config de sequelize
class Chien extends Model {}
// on declare la class formateurs qui herite de model
Chien.init(
  // on initialise le model
  {
    id_chien: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type de données
      primaryKey: true, // on declare la clé primaire
      autoIncrement: true, // on declare l'auto increment
      allowNull: false, // on declare le champ comme non nul,
    },
    race: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_maitre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Chien", // on declare le nom du model
    tableName: "Chien", // on declare le nom de la table
    timestamps: false, // on declare les timestamps
  }
);
module.exports = Chien;
// on exporte le model formateurs
