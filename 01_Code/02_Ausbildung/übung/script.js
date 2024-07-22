// Aufgabe 1
let ages = [22, 35, 27, 48, 20, 40, 30, 25, 42, 18, 29, 36, 45, 21, 33, 23, 49, 19, 38, 26];

function init() {
  generateLowerAgesArray();
  displayAmountFromBerlin();
  generateBeginnerArray();
  generateExtraArray();
}

// Diese Funktion soll ein Array generieren mit allen Werten kleiner/gleich 30 , gebe das Array in der Konsole aus
function generateLowerAgesArray() {
  let result = ages.filter(checkAdult);
  console.log(result);
}

function checkAdult(age) {
  return age <= 30;
}

// Aufgabe 2
let cities = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Frankfurt",
  "Stuttgart",
  "Düsseldorf",
  "Dortmund",
  "Essen",
  "Bremen",
  "Leipzig",
  "Dresden",
  "Berlin",
  "Nürnberg",
  "Duisburg",
  "Bochum",
  "Wuppertal",
  "Bielefeld",
  "Bonn",
  "Münster",
  "Berlin",
  "Hannover",
  "Berlin",
  "Berlin",
  "Berlin",
];

// Diese Funktion gibt in der Konsole aus, wie viele Leute aus Berlin kommen
function displayAmountFromBerlin() {
  let result = cities.filter(checkCity);
  console.log(result.length);
}

function checkCity(city) {
  return city === "Berlin";
}

// Aufgabe 3
let customers = [
  {name: "John Doe", modul: 7, "time every week": 20},
  {name: "Jane Doe", modul: 12, "time every week": 30},
  {name: "Alice", modul: 4, "time every week": 21},
  {name: "Bob", modul: 9, "time every week": 25},
  {name: "Charlie", modul: 3, "time every week": 18},
  {name: "David", modul: 15, "time every week": 35},
  {name: "Eve", modul: 6, "time every week": 22},
  {name: "Frank", modul: 11, "time every week": 28},
  {name: "Grace", modul: 2, "time every week": 12},
  {name: "Hank", modul: 8, "time every week": 21},
  {name: "Ivy", modul: 14, "time every week": 37},
  {name: "Jack", modul: 5, "time every week": 17},
  {name: "Kelly", modul: 10, "time every week": 32},
  {name: "Liam", modul: 1, "time every week": 11},
  {name: "Mia", modul: 13, "time every week": 38},
  {name: "Noah", modul: 7, "time every week": 20},
  {name: "Olivia", modul: 4, "time every week": 15},
  {name: "Peter", modul: 9, "time every week": 25},
  {name: "Quinn", modul: 11, "time every week": 28},
  {name: "Anna", modul: 6, "time every week": 22},
];

// Diese Funktion generiert ein JSON-Aray mit allen Teilnehmern, welche noch nicht in Modul 6 sind
function generateBeginnerArray() {
  let result = customers.filter(checkModul);
  console.log(result);
}

function checkModul(customer) {
  return customer.modul < 6;
}

// Zusatz Aufgabe 3.1
// Diese Funktion generiert ein JSON-Aray mit allen Teilnehmern, welche mehr als 20 Stunden wöchentlich arbeiten
// UND ein a im Namen haben
function generateExtraArray() {
  let workaholics = customers.filter(checkWorkaholics);
  console.log(workaholics);
}

function checkWorkaholics(customer) {
  return customer["time every week"] > 20 && customer.name.toLowerCase().includes("a");
}
