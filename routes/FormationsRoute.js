const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const FormationsController = require("../controllers/FormationsControllers");
// on importe le controller formation
router.get("/", (req, res) => {
  // on declare la route get
  FormationsController.getAllFormations(req, res); // on declare la fonction getAllFormations
});
router.post("/", (req, res) => {
  FormationsController.addFormation(req, res);
});
router.get("/:id", (req, res) => {
  FormationsController.getFormationById(req, res);
});
router.put("/:id", (req, res) => {
  FormationsController.updateFormation(req, res);
});
router.delete("/:id", (req, res) => {
  FormationsController.deleteFormation(req, res);
});
module.exports = router;
// on exporte le router
