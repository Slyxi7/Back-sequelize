const express = require("express");
const PuceController = require("../controllers/PuceControllers");
const router = express.Router();

router.get("/", (request, response) => {
  PuceController.getAllPuce(request, response);
});

module.exports = router;