const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Chien = require("./chien");
const Examen = require("./examen");

class Passer extends Model {}

Passer.init(
  {
    id_Examen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Examen,
        key: "id_examen",
      },
    },
    id_chien: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Chien,
        key: "id_chien",
      },
    },
  },
  {
    sequelize,
    tableName: "Passer",
    timestamps: false,
  }
);

module.exports = Passer;