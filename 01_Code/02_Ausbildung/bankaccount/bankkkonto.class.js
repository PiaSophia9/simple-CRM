class Bankkonto {
  userName;
  kontostand;
  zinssatz = 0.04;

  constructor(userName, kontostand) {
    this.userName = userName;
    this.kontostand = kontostand;
    // this.zinssatz = 0.04;
  }

  einzahlen(einzahlung) {
    this.kontostand = this.kontostand + einzahlung;
  }

  auszahlen(auszahlung) {
    this.kontostand = this.kontostand - auszahlung;
  }

  kontostandZeigen() {
    console.log(this.kontostand);
  }

  zinsenErhalten() {
    this.kontostand = this.kontostand * this.zinssatz + this.kontostand;
    return this.kontostand;
  }
}
