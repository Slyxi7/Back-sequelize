const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const ChienController = require("../controllers/ChienControllers");
// on importe le controller Chien
router.get("/", (req, res) => {
  // on declare la route get
  ChienController.getAllChien(req, res); // on declare la fonction getAllChiens
});
router.post("/", (req, res) => {
  ChienController.addChien(req, res);
});
router.put("/:id", (req, res) => {
  ChienController.updateChien(req, res);
});
router.delete("/:id", (req, res) => {
  ChienController.deleteChien(req, res);
});
module.exports = router;
// on exporte le router
