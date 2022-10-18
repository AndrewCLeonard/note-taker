function findById(id, notesArray) {
	console.log("===== findById() =====");
	console.log(`id = ${id}`);
	console.log(notesArray);
	const result = notesArray.filter((note) => note.id === id)[0];
	console.log(`result = `);
	console.log(result);
	return result;
}

module.exports = {
	findById,
};
