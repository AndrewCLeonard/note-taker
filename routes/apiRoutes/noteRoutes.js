const router = require("express").Router();
const { createNewNote } = require("../../public/assets/js/notes");
const { findById } = require("../../lib/notes");

// data
// issue 2: notes need to be in curly braces to treat it as an array?
const { notes } = require("../../db/db");

/**
 * ROUTES START
 */

/**
 * GET
 */
router.get("/notes", (req, res) => {
	console.log(`===== get notes ======`);
	let result = notes;
	res.json(result);
});
/**
 * GET by id
 */
router.get("/notes/:id", (req, res) => {
	console.log(`

	===== get note by id ======`);
	console.log(req.params.id);
	console.log(req.params);
	const result = findById(req.params.id, notes);
	if (result) {
		res.json(result);
	} else {
		res.sendStatus(404);
	}
});
/**
 * POST
 */
router.post("/notes", (req, res) => {
	console.log(`
	
	===================noteRoutes.js===================
	
	`);
	console.log(notes);
	console.log(`req.body:
	
	`);
	console.log(req.body);
	const note = createNewNote(req.body, notes);
	res.json(note);
	console.log(`
	
	===================noteRoutes.js=================== END
	`);
});
/**
 * DELETE
 */
router.delete("/notes/:id", (req, res) => {
	console.log(`
	
router.delete ============================================================================
	
	`);
	console.log(req.params.id);
	console.log(req.params);
	const result = findById(req.params.id, notes);
	if (result) {
		res.json(result);
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;
