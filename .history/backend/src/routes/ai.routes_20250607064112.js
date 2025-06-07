const express = require("express");
const aiController = require("../controllers/ai.controller.js");

const router = express.Router();

router.get("/get-response", aiController.getResponse);

module.exports = router;