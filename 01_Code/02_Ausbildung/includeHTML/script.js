async function init() {
  // Wir warten bis der Header generiert ist.
  // awit können wir immer nur zusammen mit einer "async" function verwenden.
  await includeHTML();
  // Erst danach ändere ich die Headline.
  document.getElementById("headline").innerHTML = "Herzlich willkommen!";
}

async function includeHTML() {
  // Hiermit bekommen wir alle Emelemnte, die das Attribut "w3-include-html" haben - in unserem Fall gibt es das nur in der header.html.
  let includeElements = document.querySelectorAll("[w3-include-html]");
  // Hier gehen wir durch alle Elemente mit dem Attribut "w3-include-html". In unserem Fall ist das nicht nötig, da es ja nur ein Element gibt. Trotzdem ist es sinnvoll, dass es die Forschleife gibt, weil so der Code nicht geändert werden muss, wenn es doch mal mehrere Elemente gibt.
  // Unser element ist "<div w3-include-html="header.html"></div>" in der index.html
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    // In file wird "header.html" aus "<div w3-include-html="header.html"></div>" gespeichert. "header.html" ist der Wert des Atrributs "w3-include-html"
    file = element.getAttribute("w3-include-html");
    // Fetch ruft ab, was in file gespeichert ist. In diesem Fall die Verlinkung zur header.html. Bevor das nicht geschehen ist, wird auch der weitere Teil des Codes nicht ausgeführt.
    let resp = await fetch(file);
    // 'ok' steht für dass auf resp runtergeladen werden kann.
    if (resp.ok) {
      // element.innerHTML ist das, was hier rein kommt: "<div w3-include-html="header.html"></div>"> So: "<div w3-include-html="header.html">await resp.text()</div>">
      // Text aus resp wird ausgelesen. Der Text ist der Inhalt der header.html
      element.innerHTML = await resp.text();
    } else {
      // Wenn die Datei nicht gefunden wird (zB header.html falsch geschrieben), kommt das:
      element.innerHTML = "Page not found";
    }
  }
}
