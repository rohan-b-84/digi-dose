const express = require("express");
const router = express.Router();
const getNewsByCategory = require("../controllers/getNewsByCategory");
const getNewsById = require("../controllers/getNewsById");

router.get("/:category", getNewsByCategory);
router.get("/:category/:id", getNewsById);

module.exports = router;
