const router = require("express").Router();
const { createNewNote } = require("../../public/assets/js/notes");
const {  deleteNote } = require("../../lib/notes");

// data
// issue 2: notes need to be in curly braces to treat it as an array?
let { notes } = require("../../db/db");

// routes
router.get("/notes", (req, res) => {
	let result = notes;
	res.json(result);
});

router.get("/notes/:id", (req, res) => {
	console.log(`===== get note by id ======`);
	console.log(req.params.id);
	console.log(req.params);
	const result = findById(req.params.id, notes);
	if (result) {
		res.json(result);
	} else {
		res.sendStatus(404);
	}
});

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

router.delete("/notes/:id", (req, res) => {
	var note = req.params.id;
	console.log(`note to delete = ${note}`);
	console.log(`notes before:
	
	`);
	console.log(notes);
	deleteNote(note, notes);
	console.log(`notes after:
	
	`);
	console.log(notes);
	res.send(notes);
});

module.exports = router;
