const router = require("express").Router();
const { createNewNote } = require("../../public/assets/js/notes");

// data
// issue 2: notes need to be in curly braces to treat it as an array?
const { notes } = require("../../db/db");

// routes
router.get("/notes", (req, res) => {
	let result = notes;
	res.json(result);
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
	
	===================noteRoutes.js===================
							END
	`);
});

module.exports = router;
