// 1. Möglichkeit - NICHT verwenden
function init() {
  fetch("bundesland.json").then(
    () => {
      console.log("Fertig");
    },
    () => {
      console.log("Fehler aufgetreten");
    }
  );
}

// 2. Möglichkeit - besser 3 oder 4 verwenden
async function init() {
  try {
    await fetch("bundesland.json");
    console.log("Fertig");
  } catch (e) {
    console.log("Fehler aufgetreten");
  }
}

// 3. Möglichkeit - mit einem Promise gut verwendbar
async function init() {
  // Wenn ein Fhler auftritt, wird der gecatched und die errorFunction wird ausgeführt.
  await fetch("bundesland.json").catch(errorFunction);
  console.log("Fertig");
}

function errorFunction() {
  console.log("Fehler aufgetreten");
}

// 4. Möglichkeit - mit vielen Promises gut verwendbar.
async function init() {
  let [resp, err] = await resolve(fetch("bundesland.json"));
  if (resp) {
    console.log("Fertig");
  }

  if (err) {
    console.error("Fehler");
  }
}

async function resolve(p) {
  try {
    let response = await p;
    return [response, null];
  } catch (e) {
    return [null, e];
  }
}

// 4. Möglichkeit
async function init() {
  // Eine Fetch-Anfrage wird an die Datei 'bundesland.json' gesendet und darauf gewartet, dass sie beantwortet wird.
  let [resp, err] = await resolve(fetch("bundesland.json"));
  if (resp) {
    console.log("Fertig"); // Wenn die Anfrage erfolgreich ist, wird 'Fertig' ausgegeben.
  }

  if (err) {
    console.error("Fehler"); // Wenn ein Fehler auftritt, wird 'Fehler' ausgegeben.
  }
}

// Eine Funktion, die eine Promise auflöst und ein Array zurückgibt, das den Wert der Auflösung und einen Fehler enthält.
async function resolve(p) {
  try {
    let response = await p;
    return [response, null]; // Gibt ein Array zurück, das die erfolgreiche Antwort und keinen Fehler enthält.
  } catch (e) {
    return [null, e]; // Gibt ein Array zurück, das keine erfolgreiche Antwort, sondern einen Fehler enthält.
  }
}
