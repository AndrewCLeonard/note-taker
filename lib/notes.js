function findById(id, notesArray) {
	console.log("===== findById() =====");
	console.log(`id = ${id}`);
	console.log(notesArray);
	console.log(notesArray.length);

	// issue 4: `typeof id` = string, so using `parseFloat` to change it back to a number.
	const result = notesArray.filter((note) => note.id === parseFloat(id))[0];
	console.log(`result = `);
	console.log(result);
	return result;
}

module.exports = {
	findById,
};

