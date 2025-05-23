const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Maitres extends Model {}
Maitres.init(
  {
    id_maitre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Maitre",
    timestamps: false,
  }
);
module.exports = Maitres;
