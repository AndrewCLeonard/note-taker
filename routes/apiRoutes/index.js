// why do I require express here?
const express = require("express");
const router = express.Router();

const noteRoutes = require("./noteRoutes");

router.use(noteRoutes);

module.exports = router;
