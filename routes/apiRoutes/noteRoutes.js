const router = require("express").Router();

// data
const notes = require("../../db/db");

// routes
router.get("/notes", (req, res) => {
	let result = notes;
	res.json(result);
});

module.exports = router;
