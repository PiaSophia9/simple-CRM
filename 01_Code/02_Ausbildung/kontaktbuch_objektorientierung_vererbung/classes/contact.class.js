class Contact extends Person {
  phone;

  constructor(fn, ln, phone) {
    super(fn, ln);
    this.phone = phone;
  }
  printFullname() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  call() {
    window.location.href = "tel:" + this.phone;
  }
}

// Die class ist KEIN Objekt! This only decribes how the object should look like.
// Vorlage/Schablone/Template für ein Objekt

// Person in Zeile 1 ist die Überklasse/ Superklasse

// Mit super() greifen wir auf die Überklasse in person.class.js zu

// mit 'this' greifen wir immer auf die Variable in dem aktuellen Object zu.
// this.firstName greift auf das 'firstName' in Zeile 2 zu.
// Das klappt auch, wenn in Zeile 6 und 7 das stehen würde:
// this.firstName = firstName;
// this.lastName = lastName;
// So wie in Zeile 27 und 28 ist eigentlich auch richtig! Die Namen sind immer gleich.

// Wenn wir eine Klasse erstellen, ist dort immer ein constructor drin.
// Instanz von der Klasse erstellen: Ein Objekt erzeugen, was auf der Struktur und den Eigenschaften der Klasse basiert.
