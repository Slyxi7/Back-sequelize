const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Maitre = require("./maitre");

class Chiens extends Model {}
Chiens.init(
  {
    id_Chien: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    race: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_maitre: {
      type: DataTypes.INTEGER,
      references: {
        model: Maitre,
        key: "id_maitre",
      },
    },
  },
  {
    sequelize,
    tableName: "Chien",
    timestamps: false,
  }
);
module.exports = Chiens;