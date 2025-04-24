const express = require("express");
const ExamenController = require("../controllers/ExamenControllers");
const router = express.Router();

router.get("/", (request, response) => {
  ExamenController.getAllExamen(request, response);
});

module.exports = router;