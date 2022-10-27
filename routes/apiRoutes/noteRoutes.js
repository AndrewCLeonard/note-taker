const router = require("express").Router();
const { createNewNote, deleteNote } = require("../../public/assets/js/notes");
const { findById } = require("../../lib/notes");

// data
let { notes } = require("../../db/db");

/**
 * ROUTES START
 */

/**
 * GET
 */
router.get("/notes", (req, res) => {
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
	const elementToDelete = findById(req.params.id, notes);
	if (elementToDelete) {
		const modifiedNotesArray = notes.filter((note) => elementToDelete.id !== note.id);
		// Node has db.json in memory, need to redefine it so that it matches db.json in the server
		notes = modifiedNotesArray;
		deleteNote(modifiedNotesArray);
		res.json(modifiedNotesArray);
	} else {
		res.sendStatus(404);
	}
});

// if the ID matches NoteID, return FALSE
// if the ID !== NoteID, return TRUE

module.exports = router;
