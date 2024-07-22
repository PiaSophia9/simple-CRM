let contacts = [
  // Nicht so:
  //  {
  //     firstName: "Mona",
  //     lastname: "Schenkelberg",
  //     address: "Musterstraße 1, 12345 Musterstadt",
  //   },
  // sondern so:
  new Contact("Mona", "Schenkelberg", "634278234789234"),
  new Friend("Lena", "Lengersdorf"),
];

function addContact(firstName, lastName, phone) {
  let myContact = new Contact(firstName, lastName, phone);
  contacts.push(myContact);
}

addContact("Sophia", "Brouwers", "671247834684");
addContact("Claudio", "Schirrmann", "2678346834678");
