const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Chiens = require("./chien");

class Puce extends Model {}
Puce.init(
  {
    id_Puce: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_Chien: {
      type: DataTypes.INTEGER,
      references: {
        model: Chiens,
        key: "id_chien",
      },
    },
  },
  {
    sequelize,
    tableName: "Puce",
    timestamps: false,
  }
);
module.exports = Puce;