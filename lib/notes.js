function findById(id, notesArray) {
	console.log("===== findById() =====");
	console.log(`id = ${id}`);
	console.log(notesArray);
	console.log(notesArray.length);

	const result = notesArray.filter((note) => note.id === parseFloat(id))[0];
	console.log(`result = `);
	console.log(result);
	return result;
}

module.exports = {
	findById,
};

