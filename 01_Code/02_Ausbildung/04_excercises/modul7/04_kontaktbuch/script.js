let names = ["Sophia Brouwers", "Claudio Schirrmann"];
let phoneNumbers = ["724646", "831329723"];

load();

function load() {
  let namesAsText = localStorage.getItem("names");
  let phonenumbersAsText = localStorage.getItem("phoneNumbers");
  if (namesAsText && phonenumbersAsText) {
    names = JSON.parse(namesAsText);
    phoneNumbers = JSON.parse(phonenumbersAsText);
  }
}

function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML += html`<h1>My Contacts</h1>`;
  content.innerHTML += html`
    <div>
      <input placeholder="Name" id="name" />
      <input placeholder="Telefon" id="phone" />
      <button onclick="addContact()">Hinzufügen</button>
    </div>
  `;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const phoneNumber = phoneNumbers[i];

    content.innerHTML += html`
      <div class="card">
        <b>Name: </b>${name}<br />
        <b>Telefon: </b>${phoneNumber}<br />
        <button onclick="deleteContact(${i})">Löschen</button>
      </div>
    `;
  }
}

function save() {
  let namesAsText = JSON.stringify(names);
  localStorage.setItem("names", namesAsText);

  let phonenumbersAsText = JSON.stringify(phoneNumbers);
  localStorage.setItem("phoneNumbers", phonenumbersAsText);
}

function addContact() {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");

  names.push(name.value);
  phoneNumbers.push(phone.value);

  render();
  save();
}

function deleteContact(i) {
  names.splice([i], [1]);
  phoneNumbers.splice([i], [1]);

  render();
  save();
}
