function helloJunus() {
  console.log("Hallo, ich bin Junus");
}

function helloManuel() {
  console.log("Hi, ich bin Manuel");
}

function sayHello() {
  helloJunus();
  helloManuel();
}

sayHello();

console.log("Fertig");

// Im Hintergrund passiert der Callstack. Kann man nicht gut schriftlich erklaren.
// https://youtu.be/LZpS4xS307Q?si=KgIJQbJ3giGaBWj5&t=544

// Die folgende Funktion funktioniert nicht! Es kommt zu einem Stackoverflow, weil diese Funktion endlos weietrgeht. Sie beginnt bei 1 und erhoeht sich dann bis ins Unedliche um 1.
function count(i) {
  console.log(i);
  count(i + 1);
}

count(1);
