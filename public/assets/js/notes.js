const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
	const note = body;

	console.log(`body:
    
    `);
	console.log(typeof body);

	console.log(body);
	console.log(`note:
    
    `);
	console.log(typeof note);
	console.log(note);
	console.log(`notes:
    
    `);
	console.log(typeof notes);
	console.log(notes);
	notes.push(note);
	fs.writeFileSync(path.join(__dirname, "../../../db/db.json"), JSON.stringify({ notes }, null, 2));
	return note;
}

module.exports = {
	createNewNote,
};
