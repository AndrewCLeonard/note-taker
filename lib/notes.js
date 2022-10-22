function findById(id, notesArray) {
	console.log("===== findById() =====");
	console.log(`id = ${id}`);
	console.log(notesArray);
	const result = notesArray.filter((note) => note.id === id)[0];
	console.log(`result = `);
	console.log(result);
	return result;
}

function filterByID(item, NoteID) {
	if (item.id !== NoteID) {
		return true;
	}
	return false;
}

function deleteNote(id, notesArray) {
	console.log(`===== deleteNote() in lib/notes.js =====`);
	console.log(`id = ${id}`);
}

module.exports = {
	findById,
	deleteNote,
};
