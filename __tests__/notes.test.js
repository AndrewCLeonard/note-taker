const {
	expect,
	// jest, issue 1: why does this cause problems?
	test,
} = require("@jest/globals");
const { createNewNote, deleteNote } = require("../public/assets/js/notes");
jest.mock("fs");

const { notes } = require("../db/db.json");

test("creates a new note", () => {
	// reqBody = { title: "33", text: "body text", id: 1666840228897 };
	const newNote = createNewNote({ title: "test note", text: "body text", id: 1666840228897 }, notes);

	expect(newNote.title).toBe("test note");
	expect(newNote.text).toBe("body text");
	expect(newNote.id).toBe(1666840228897);
});

test("delete a note", () => {
	const noteInDB = notes[0].id;
	deleteNote(noteInDB);
	const result = notes.filter((noteIDs) => noteInDB !== noteIDs);
	console.log(result);

	expect(result).toBe(undefined);
});
