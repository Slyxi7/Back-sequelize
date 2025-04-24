const Maitre = require("./maitre");
const Chien = require("./chien");
const Puce = require("./puce");
const Examen = require("./examen");
const Passer = require("./passer");

// relation 1 à N (maitre -> chien)
Maitre.hasMany(Chien, {
  foreignKey: "id_maitre",
  as: "chiens",
});
Chien.belongsTo(Maitre, {
  foreignKey: "id_maitre",
  as: "maitre",
});

// relation 1 à 1 (chien -> puce)
Chien.hasOne(Puce, {
  foreignKey: "id_chien",
  as: "puces",
});
Puce.belongsTo(Chien, {
  foreignKey: "id_chien",
  as: "chiens",
});
// relation N à N (chien -> examen)
Chien.belongsToMany(Examen, {
  through: Passer,
  foreignKey: "id_chien",
  as: "chiens",
});
Examen.belongsToMany(Chien, {
  through: Passer,
  foreignKey: "id_examen",
  as: "examens",
});

module.exports = {
  Maitre,
  Chien,
  Puce,
  Examen,
  Passer,
};
