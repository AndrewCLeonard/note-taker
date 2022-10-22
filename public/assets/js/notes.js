const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
	console.log(`===== createNewNote(body, notes) public/js/notes ======`);

	const note = body;

	console.log(`body is an ${typeof body}`);
	console.log(body);

	notes.push(note);
	fs.writeFileSync(path.join(__dirname, "../../../db/db.json"), JSON.stringify({ notes }, null, 2));
	console.log(`===== createNewNote(body, notes) public/js/notes ====== END`);
	return note;
}

module.exports = {
	createNewNote,
};
