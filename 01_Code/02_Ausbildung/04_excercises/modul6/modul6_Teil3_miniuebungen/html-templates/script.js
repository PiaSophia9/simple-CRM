let name1 = "Frederick"; // Für Aufgabe 4

/**
 * Aufgabe 1
 */
function joke1() {
  document.getElementById(
    "joke"
  ).innerHTML = `Wie viele Windows-Anwender braucht man um eine Glühbirne zu wechseln? 100! Einer wechselt die Birne, 99 klicken die Fehlermeldungen weg.`;
}

/**
 * Aufgabe 1
 */
function joke2() {
  document.getElementById(
    "joke"
  ).innerHTML = `Linux wird nie das meistinstallierte Betriebssystem sein, wenn man bedenkt, wie oft man Windows neu installieren muss!`;
}

function joke3() {
  document.getElementById("joke").innerHTML = `Witz 3`;
}

function joke4() {
  document.getElementById("joke").innerHTML = `Witz 4`;
}

/**
 * Aufgabe 2
 */
function addFruit(fruit) {
  document.getElementById(
    "food"
  ).innerHTML += `Frucht hinzugefügt: <b>${fruit}</b> <br>`;
}

function deleteFruits() {
  document.getElementById("food").innerHTML = "";
}

/**
 * Aufgabe 3 und 4
 */
function generatedCircle(nameX) {
  setName(nameX);
  document.getElementById(
    "generatedHTML"
  ).innerHTML = `<div class="circle"><b>${nameX}</b></div>`;
}

function setName(n) {
  nameX = n;
}

/**
 * Aufgabe 5
 */
function sendMessage() {
  let message = document.getElementById("message"); // HTML Element mit ID message wird an die Variable 'message' zugewiesen.
  if (message.value.length < 1) {
    alert("Bitte etwas schreiben!");
  } else {
    let chat = document.getElementById("chat");

    chat.innerHTML += `
          <div><i>${name1}</i>: ${message.value}</div>
          `;

    message.value = ""; // Inhalt von Textfeld mit id "message" löschen
  }
}
