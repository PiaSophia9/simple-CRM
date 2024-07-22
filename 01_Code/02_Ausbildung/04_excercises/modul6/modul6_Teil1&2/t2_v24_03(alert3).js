function calc() {
  let number = +document.getElementById("input").value;
  // Holt die Zahl aus dem Input-Feld.
  alert(getResultText(number, powerOf2(number)));
  // Alles, was hinter alert steht oder produziert wird, wird im Alert-Fenster angezeigt.
  //   getResultText() produziert den Text, der im Alert-Fenster angezeigt wird.
  //    getResultText() bekommt die ins Input-Feld eingegebene Nummer und das Ergebnis
  //    von powerOf2.
}

function powerOf2(x) {
  // Diese Funktion bekommt von oben den Wert der Variablen number. Number wird hier zu x und wird ausgerechnet.
  // number wird hier als x neu defieniert.
  return x * x;
  // Return sorgt auch dafür, dass in der Konsole "powerOf2(number)" durch das Ergebnis ersetzt wird.
}

function getResultText(number, result) {
  return `The result of ${number}² is ${result}`;
}
