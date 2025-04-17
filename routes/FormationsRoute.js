const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const FormationsControllers = require("../controllers/FormationsControllers");
// on importe le controller formation
router.get("/", (req, res) => {
  // on declare la route get
  FormationsControllers.getAllFormations(req, res); // on declare la fonction getAllFormations
});
module.exports = router;
// on exporte le router
