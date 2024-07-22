let userBasket = [
  {
    id: 1,
    name: "Smartphone X",
    price: 599.99,
    category: "Elektronik",
    coupon: true,
  },
  {
    id: 2,
    name: "Jeanshose Slim Fit",
    price: 39.99,
    category: "Kleidung",
    coupon: false,
  },
  {
    id: 3,
    name: "Buch: Die Abenteuer von Sherlock Holmes",
    price: 12.99,
    category: "Bücher",
    coupon: false,
  },
  {
    id: 4,
    name: "Küchenmaschine Deluxe",
    price: 149.99,
    category: "Haushalt",
    coupon: false,
  },
];

function renderBasket() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < userBasket.length; i++) {
    const product = userBasket[i];
    content.innerHTML += /*html*/ `
          <div class="product" id="product${i}">
              Produkt: ${product.name} <br>
              <span id="price${i}">Preis: ${product.price}</span>
          </div>
      `;
    if (product.coupon) {
      let result = product.price * 0.8;
      document.getElementById(`price${i}`).innerHTML = `
               Rabattierter Preis: ${result.toFixed(2)} der Kategorie: <span class="highlight">${product.category}</span>
          `;
    }
  }
}

// function renderBasket() {
//   for (let i = 0; i < userBasket.length; i++) {
//     // const item = userBasket[i];
//     document.getElementById("content").innerHTML += generateItem(i);
//   }
// }

// function generateItem(i) {
//   return `
//     <div class="user_basket">
//      <p>Produkt: ${userBasket[i]["name"]}</p><p class="display_inline">Preis: ${userBasket[i]["price"]}</p> der Kategorie: <p id="kategory" class="display_inline">${userBasket[i]["category"]}</p>
//     </div>`;
// }

// function seeIfCustomerHasCoupon() {
//   if (userBasket[i]["coupon"] == true) {
//     // add class red
//     // 20% davon
//   }
// }
