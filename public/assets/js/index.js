let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

// set variables when on the `/notes` page:
if (window.location.pathname === "/notes") {
	noteTitle = document.querySelector(".note-title");
	noteText = document.querySelector(".note-textarea");
	saveNoteBtn = document.querySelector(".save-note");
	newNoteBtn = document.querySelector(".new-note");
	noteList = document.querySelectorAll(".list-container .list-group");
	// deleteNoteBtn =
}

// Show an element
const show = (elem) => {
	elem.style.display = "inline";
	console.log("show() has been called");
	console.log(saveNoteBtn);
};

// Hide an element
const hide = (elem) => {
	elem.style.display = "none";
	console.log("hide() has been called");
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

/**
 * API CALLS START
 */
const getNotes = () => {
	return fetch("/api/notes", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		// if this were a callback function, it would break the promise by opening scope with new function
	}).then(console.log("===== getNotes() ====="));
};

/**
 * save note
 */

const saveNote = (note) => {
	console.log(`===== saveNote(note) =====`);
	fetch("/api/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(note),
	}).then((response) => {
		if (response.ok) {
			console.log(`response.ok: ${response}`);
		} else alert("Error: " + response.statusText);
	});
};

/**
 * API CALLS END
 */

const renderActiveNote = () => {
	hide(saveNoteBtn);
	console.log("========== renderActiveNote() ==========");

	if (activeNote.id) {
		console.log(`activeNote.id: ${activeNote.id}`);
		noteTitle.setAttribute("readonly", true);
		noteText.setAttribute("readonly", true);
		noteTitle.value = activeNote.title;
		noteText.value = activeNote.text;
	} else {
		noteTitle.removeAttribute("readonly");
		noteText.removeAttribute("readonly");
		noteTitle.value = "";
		noteText.value = "";
	}
};

const handleNoteSave = () => {
	const newNote = {
		title: noteTitle.value,
		text: noteText.value,
		id: new Date().getTime(),
	};
	console.log(`===== handleNoteSave() =====`);
	console.log(newNote);
	console.log(`===== handleNoteSave() ===== END`);
	saveNote(newNote).then(() => {
		getAndRenderNotes();
		renderActiveNote();
	});
};

/**
 * delete note
 */

const deleteNote = (id) => {
	console.log("===== deleteNote (id) =====");
	console.log(id);
	fetch(`/api/notes/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

// Delete the clicked note
const handleNoteDelete = (e) => {
	console.log("===== handleNoteDelete() =====");
	// Prevents the click listener for the list from being called when the button inside of it is clicked
	e.stopPropagation();

	const note = e.target;
	console.log(`note = ${note}`);
	const noteId = JSON.parse(note.parentElement.getAttribute("data-note")).id;
	console.log(`noteId: ${noteId}`);
	console.log(`activeNote.id: ${activeNote.id}`);

	if (activeNote.id === noteId) {
		activeNote = {};
	}

	deleteNote(noteId);
	// .then(() => {
	// getAndRenderNotes();
	// renderActiveNote();
	// });
	console.log("===== handleNoteDelete() ===== END");
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
	console.log("===== handleNoteView() =====");

	e.preventDefault();
	activeNote = JSON.parse(e.target.parentElement.getAttribute("data-note"));
	console.log(`activeNote = ${activeNote.title}, id = ${activeNote.id} `);
	renderActiveNote();
};

// Sets the activeNote to an empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
	console.log("========== handleNewNoteView() ==========");
	activeNote = {};
	renderActiveNote();
};

const handleRenderSaveBtn = () => {
	if (!noteTitle.value.trim() || !noteText.value.trim()) {
		console.log("handleRenderSaveBtn = hide");
		hide(saveNoteBtn);
	} else {
		show(saveNoteBtn);
		console.log("handleRenderSaveBtn = show");
	}
};

// issue 3: I don't see this promise returning any results
// Render the list of note titles
const renderNoteList = async (notes) => {
	console.log(`===== renderNoteList() =====`);
	let jsonNotes = await notes.json();
	if (window.location.pathname === "/notes") {
		noteList.forEach((el) => {
			el.innerHTML = "";
		});
	}

	let noteListItems = [];

	// Returns HTML element with or without a delete button
	const createLi = (text, delBtn = true) => {
		const liEl = document.createElement("li");
		liEl.classList.add("list-group-item");

		const spanEl = document.createElement("span");
		spanEl.classList.add("list-item-title");
		spanEl.innerText = text;
		spanEl.addEventListener("click", handleNoteView);

		liEl.append(spanEl);

		if (delBtn) {
			// const delBtnEl = document.createElement("i");
			const delBtnEl = document.createElement("span");
			// delBtnEl.classList.add("fas", "fa-trash-alt", "float-right", "text-danger", "delete-note");
			delBtnEl.classList.add("float-right", "delete-note");
			delBtnEl.innerText = "🗑";
			delBtnEl.addEventListener("click", handleNoteDelete);

			liEl.append(delBtnEl);
		}

		return liEl;
	};

	if (jsonNotes.length === 0) {
		noteListItems.push(createLi("No saved Notes", false));
	}
	jsonNotes.forEach((note) => {
		const li = createLi(note.title);
		li.dataset.note = JSON.stringify(note);

		noteListItems.push(li);
	});

	if (window.location.pathname === "/notes") {
		noteListItems.forEach((note) => noteList[0].append(note));
	}
};

// Gets notes from the db and renders them to the sidebar
// const getAndRenderNotes = () => getNotes().then(renderNoteList);
const getAndRenderNotes = () => {
	console.log(`===== getAndRenderNotes() =====`);
	getNotes().then(renderNoteList);
};

if (window.location.pathname === "/notes") {
	saveNoteBtn.addEventListener("click", handleNoteSave);
	newNoteBtn.addEventListener("click", handleNewNoteView);
	noteTitle.addEventListener("keyup", handleRenderSaveBtn);
	noteText.addEventListener("keyup", handleRenderSaveBtn);
}

getAndRenderNotes();
