let titles = [];
let notes = [];
let deletedTitles = [];
let deletedNotes = [];

function renderCards() {
  document.getElementById("notesContainer").innerHTML = ``;
  for (let i = 0; i < titles.length; i++) {
    document.getElementById(
      "notesContainer"
    ).innerHTML += ` <div id="noteCard" class="note_card" type="checkbox" onclick="openPopup(${i})"> <h2 class="h2_note_card" id="inputTitle${i}">${titles[i]}</h2> <p class="p_note_card" id="inputNote${i}">${notes[i]}</p> <img id="trash" class="float_right trash" onclick="deleteCard(${i})" src="img/trash.png" alt="">
      </div>`;
  }
}

function clearInput() {
  document.getElementById("inputTitle").value = ``;
  document.getElementById("inputNote").value = ``;
}

function addToArrays() {
  let title = document.getElementById("inputTitle").value;
  let note = document.getElementById("inputNote").value;
  if (title == "" || note == "") {
    alert("Bitte geben Sie einen Titel und eine Notiz ein.");
  } else {
    titles.push(title);
    notes.push(note);
    clearInput();
  }
  renderCards();
  save();
}

function deleteCard(i) {
  addToDeletedArrays(i);
  titles.splice([i], [1]);
  notes.splice([i], [1]);
  event.stopPropagation(onclick);
  renderCards();
  save();
}

// local-storage-functions

function save() {
  let notesAsText = JSON.stringify(notes);
  localStorage.setItem("notes", notesAsText);
  let titlesAsText = JSON.stringify(titles);
  localStorage.setItem("titles", titlesAsText);
}

function load() {
  let notesAsText = localStorage.getItem("notes");
  let titlesAsText = localStorage.getItem("titles");
  if (notesAsText && titlesAsText) {
    notes = JSON.parse(notesAsText);
    titles = JSON.parse(titlesAsText);
  }
  renderCards();
}

// popup-functions

function openPopup(i) {
  document.getElementById("popUp").classList.remove("d_none");
  renderPopup(i);
}

function renderPopup(i) {
  document.getElementById("popUp").innerHTML = ` 
  <div class="popup_div">
    <div class="popup_inputs">
      <textarea class="popup_title" id="popupTitle" type="text" rows="1">${titles[i]}</textarea>
      <textarea class="popup_note" id="popupNote" name="">${notes[i]}</textarea>
    </div>
    <button onclick="closePopup(${i})" type="button">Schließen</button>
  </div>`;
  saveChangesPopup(i);
}

function saveChangesPopup(i) {
  let titlePopup = document.getElementById("popupTitle").value;
  let notePopup = document.getElementById("popupNote").value;
  if (titlePopup == "" || notePopup == "") {
    alert("Bitte geben Sie einen Titel und eine Notiz ein.");
  } else {
    titles[i] = titlePopup;
    notes[i] = notePopup;
  }
}

function closePopup(i) {
  saveChangesPopup(i);
  save();
  document.getElementById("popUp").classList.add("d_none");
  renderCards();
}

// trash-functions

function addToDeletedArrays(position) {
  let deletedTitle = document.getElementById(`inputTitle${position}`).innerHTML;
  let deletedNote = document.getElementById(`inputNote${position}`).innerHTML;
  if (deletedTitle == "" || deletedNote == "") {
    alert("Bitte geben Sie einen Titel und eine Notiz ein.");
  } else {
    deletedTitles.push(deletedTitle);
    deletedNotes.push(deletedNote);
  }
  saveDeletedArrays();
}

function openTrashInNav() {
  goYellowTrash();
  document.getElementById("formToWriteNote").classList.add("d_none");
  loadDeletedCards();
  renderDeletedCards();
}

function openNotesInNav() {
  document.getElementById("formToWriteNote").classList.remove("d_none");
  goYellowNotes();
  load();
}

function renderDeletedCards() {
  document.getElementById("notesContainer").innerHTML = "";
  if (deletedTitles < 1) {
    document.getElementById("notesContainer").innerHTML += `<h2>Keine Notizen im Papierkorb.</h2>`;
  } else {
    document.getElementById(
      "notesContainer"
    ).innerHTML += `<div id="buttonAndDeltedNotes" class="button_and_delted_notes"><div class="div_around_button"><button class="button_empty_trash" type="button" onclick="deleteAllTrash()">Papierkorb leeren</button></div><div id="deletedNotesContainer" class="deleted_notes_container"><div/></div>`;
    for (let i = 0; i < deletedTitles.length; i++) {
      document.getElementById("deletedNotesContainer").innerHTML += ` <div id="deletedCard" class="note_card" type="checkbox">
        <h2 class="h2_note_card" id="deletedTitle">${deletedTitles[i]}</h2>
        <p class="p_note_card" id="deletedNote">${deletedNotes[i]}</p>
        <img id="deletedTrash" class="float_right trash" onclick="deleteDeletedCard(${i})" src="img/trash.png" alt="">
      </div>`;
    }
  }
}

function deleteDeletedCard(i) {
  deletedTitles.splice([i], [1]);
  deletedNotes.splice([i], [1]);
  event.stopPropagation(onclick);
  saveDeletedArrays();
  renderDeletedCards();
}

function saveDeletedArrays() {
  let deletedNotesAsText = JSON.stringify(deletedNotes);
  localStorage.setItem("deletedNotes", deletedNotesAsText);
  let deletedTitlesAsText = JSON.stringify(deletedTitles);
  localStorage.setItem("deletedTitles", deletedTitlesAsText);
}

function loadDeletedCards() {
  let deletedNotesAsText = localStorage.getItem("deletedNotes");
  let deletedTitlesAsText = localStorage.getItem("deletedTitles");
  if (deletedNotesAsText && deletedTitlesAsText) {
    deletedNotes = JSON.parse(deletedNotesAsText);
    deletedTitles = JSON.parse(deletedTitlesAsText);
  }
}

function deleteAllTrash() {
  let deletedTitles = [];
  let deletedNotes = [];
  let deletedNotesAsText = JSON.stringify(deletedNotes);
  localStorage.setItem("deletedNotes", deletedNotesAsText);
  let deletedTitlesAsText = JSON.stringify(deletedTitles);
  localStorage.setItem("deletedTitles", deletedTitlesAsText);
  document.getElementById("notesContainer").innerHTML = `<h2>Keine Notizen im Papierkorb.</h2>`;
}

function goYellowTrash() {
  document.getElementById("navnotes").classList.remove("go_yellow");
  document.getElementById("navTrash").classList.add("go_yellow");
}

function goYellowNotes() {
  document.getElementById("navTrash").classList.remove("go_yellow");
  document.getElementById("navnotes").classList.add("go_yellow");
}
