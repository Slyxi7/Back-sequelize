const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const FormateursControllers = require("../controllers/FormateursControllers");
// on importe le controller formateur
router.get("/", (req, res) => {
  // on declare la route get
  FormateursControllers.getAllFormateurs(req, res); // on declare la fonction getAllFormateurs
});
module.exports = router;
// on exporte le router
