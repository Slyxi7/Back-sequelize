const express = require("express");
// on importe express

require("dotenv").config();
// on importe le fichier .env

const app = express();
// on declare l'application express

app.use(express.json());
// on declare le middleware pour parser le json

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// on declare la route racine

const stagiaireRoute = require("./routes/StagiairesRoute");
app.use("/stagiaires", stagiaireRoute);

const formationRoute = require("./routes/FormationsRoute");
app.use("/formations", formationRoute);

const formateurRoute = require("./routes/FormateursRoute");
app.use("/formateurs", formateurRoute);

const maitreRoute = require("./routes/MaitreRoute");
app.use("/maitres", maitreRoute);

const chienRoute = require("./routes/ChienRoute");
app.use("/chiens", chienRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvé" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`
  );
});
