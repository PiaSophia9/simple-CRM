let startPortion = 4;
// Es muss eine feste Portion angegeben werden, weil sonst Chaos entsteht, wenn man mehrfach eine Portion-Menge eingibt.

let ingredients = [
  [4, "", "Tortilla Wrap(s)"],
  [0.5, "", "Salatgurke(n)"],
  [1, "", "Paprikaschote(n), rot"],
  [200, "g", "Cherrytomate(n)"],
  [100, "g", "Feta"],
  [0.25, "", "Eisbergsalat"],
  [1, "kl Dose", "Mais"],
  [250, "g", "Joghurt"],
  [2, "EL", "Mayo"],
  [1, "EL", "Garam Masala"],
  [1, "TL", "Rauchpaprika-Pulver"],
  ["", "", "Salz und Pfeffer"],
];
// So macht man Arrays in arrays.
// Wichtig ist, dass die Ansprache in der Funktion anders ist, als wenn man nur ein array hat.
// Mit dem erste [i] gibt man die Zeile an (so wie in einem eindimensionales array).
// Mit dem zweiten [i] gibt man das Element in der Zeile an.

function showTable() {
  table.innerHTML = "";
  // html muss man leeren, sonst wird bei jeder Eingabe ins Input-Feld eine komplette neue Tabelle unter die alte eingefügt.
  let inputPortion = document.getElementById("input").value;
  // Wir nehmen den Wert aus dem Input-Feld.
  if (inputPortion < 1) {
    alert("Die Portionen-Anzahl muss größer oder gleich 1 sein.");
    inputPortion = 4; // Muss definiert werden, damit es in Zeile 42 einen Wert für inputPortion gibt.
    document.getElementById("input").value = 4; // Sorgt dafür, dass wieder 4 im Input-Feld steht.
    // Wenn die Portion kleiner als 1 ist, wird die Zahl nicht übernommen, sondern wird wieder zu einer 4. Wenn die Zahl gleich oder größer 1 ist, wird else ausgeführt.
    // Alternative, die nicht funktioniert: alert("Die Portionen-Anzahl muss größer oder gleich 1 sein.");
    // showTable();
    // Man muss nochmal die Tabelle erstellen, sonst ist nach dem Ausführen von Zeile 39 keine Tabelle da.
  }
  // else {
  for (let i = 0; i < ingredients.length; i++) {
    //let i = 0;  Die for-Schleife wird INITIALISIERT. Der erste Wert ist 0, also beginnt die for-Schleife bei der 0. Stelle und das ist das 1. Element des arrays. Beim ersten Durchgang hat die Schleife die Werte: 4, "a", "Tortilla Wrap(s)
    // i < ingredients.length; ist die BEDINGUNG der for-Schleife. Sie sagt, dass die for-Schleife nur dann weitergehen soll, solange der Wert i (der für die Stelle im array steht) kleiner ist als die Länge des arrays.
    // i++ sorgt dafür, dass i bei jeder Itteration um eins erhöhrt wird.
    let result = (ingredients[i][0] * inputPortion) / startPortion;
    // Das Ergebnis wird definiert. Mit ingredients[i][0] greife ich auf mein Array zu. In der ersten Schleife hat die Variable i den Wert 0. Mit [0] greife ich auf die jeweils erste Stelle in inneren arrays.
    // inputPortion ist weiter oben definiert. Die Variable enthält den Wert des Inhalts des Input-Feldes.
    // mit / startPortion teilen wir noch durch 4.
    if (result == 0) {
      table.innerHTML += `<tr><td>${""}${" "}${ingredients[i][1]}${" "}${ingredients[i][2]}</td></tr>`;
      // Wenn das Ergebnis von Menge * Portion, was in der Variablen result festgehalten ist, = 0 ist, wird eine Tabellenzeile erstellt, die fast gleich ist, wie die anderen Zeilen mit dem Unterschied, dass dort nicht ${result} sondern ${""} steht. Nur so erreicht man, dass vor den Zutaten nichts steht.
    } else {
      table.innerHTML += `<tr><td>${result}${" "}${ingredients[i][1]}${" "}${ingredients[i][2]}</td></tr>`;
    }
    // Mit table.innerHTML += füge ich bei jeder Itteration eine Tabellenzeile mit zwi Tabellenzellen hinzu.
    // 1. Zelle:
    // <td>${result} Hier wird das Ergebnis angezeigt (siehe Zeile 54). das Ergebnis aus Mengenangabe * Portionen.
    // ${" "} Hier wird ein Leerzeichen eingefügt.
    // ${ingredients[i][1]} Hier wird die zweite Stelle im i. Array angezeigt. Hier werden immer die Maßeinheiten angezeigt (g, ml etc.).
    // 2. Zelle:
    // ${ingredients[i][2]} Hier wird die dritte Stelle im i. Array angezeigt. Das sind die Zutaten.
  }
}
// }
