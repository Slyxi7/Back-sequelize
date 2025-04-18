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
router.post("/", (req, res) => {
  FormateursControllers.addFormateur(req, res);
});
router.get("/:id", (req, res) => {
  FormateursControllers.getFormateurById(req, res);
});
router.put("/:id", (req, res) => {
  FormateursControllers.updateFormateur(req, res);
});
router.delete("/:id", (req, res) => {
  FormateursControllers.deleteFormateur(req, res);
});
module.exports = router;
// on exporte le router
