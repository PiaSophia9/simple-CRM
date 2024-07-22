let numbers = [2, 4, 2, 6, 7, 9];

function init() {
  logAll();
  longerThanFive();
}

function logAll() {
  document.getElementById("allNumbers").innerHTML = numbers;
  // console.log(numbers);
}

// Kurzschreibweise:
// numbers.forEach(logNumber);
// function logNumber(number) {
// console.log(number);
// }

function longerThanFive() {
  if (numbers.length > 5) {
    // console.log("The array is longer than 5.");
    document.getElementById("longerThanFive").innerHTML = `The array is longer than 5.`;
  } else {
    document.getElementById("longerThanFive").innerHTML = `The array is shorter that 5.`;
    // console.log("The array is shorter that 5.");
  }

  // Kurzschreibweise:
  // console.log(numbers.length <= 5 ? 'smaller or equal 5' : 'bigger that 5');
  // Nur bei einfachen Abfragen machen.
  // "numbers.length <= 5 ?" if die ift-Abfrage
  // 'smaller or equal 5' ist was passieren soll, wenn die ift-Abfrage true ist.
  // 'bigger that 5' ist was passieren soll, wenn die ift-Abfrage true ist (entspricht dem else-Teil).
}
