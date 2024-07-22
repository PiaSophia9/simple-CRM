let categories = ["Salate", "Pizzen", "Pasta"];
let categoryImages = ["img/dishes/salad.jpg", "img/dishes/pizza.jpg", "img/dishes/spaghetti.jpg"];

let salads = [
  {
    amount: 1,
    category: "Salate",
    name: "Griechischer Salat",
    description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
    price: 7.98,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Feldalat mit Lachs",
    description: "Feldsalat mit Dresssing aus Balsamico und Olivenöl mit gebratenem Lachs",
    price: 7.98,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Kartoffelsalat",
    description: "mit Kartoffeln, sauren Gurken, Eiern in einer Sahne-Mazo-Sauce",
    price: 7.95,
  },
];

let pizzas = [
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Spinacchi",
    description: "mit Spinat, Schafskäse, Tomatensauce und Käse",
    price: 7.98,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Hollondaise",
    description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
    price: 7.98,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Vegetabele",
    description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
    price: 7.98,
  },
];

let pastas = [
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Bolognese",
    description: "mit Hackfleisch und Tomatensauce",
    price: 7.98,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Spinacchi",
    description: "mit Spinat und Cherrytomaten",
    price: 7.98,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Gorgonzola",
    description: "mit Sauce aus Sahne und Gorgonzola",
    price: 7.98,
  },
];

let shoppingCart = [
  // {
  //   amount: 0
  //   name: "",
  //   price: 0,
  // },
];

let sum = 0.0;

function renderCategories() {
  document.getElementById("categoriesContainer").innerHTML += generateCategory(0);
  renderSalads(0);
  document.getElementById("categoriesContainer").innerHTML += generateCategory(1);
  renderPizzas(1);
  document.getElementById("categoriesContainer").innerHTML += generateCategory(2);
  renderPastas(2);
}

function generateCategory(i) {
  return /*html*/ `
    <div class="section_menus__img_container" id="categoryImage${i}">
        <img class="section_menus__img" src="${categoryImages[i]}" alt="" />
    </div>
    <h3 class="section_menus__category_name">${categories[i]}</h3>
    <div id="menuesContainer${i}"></div>`;
}

function renderSalads(j) {
  for (let i = 0; i < salads.length; i++) {
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(salads, i);
  }
}

function renderPizzas(j) {
  for (let i = 0; i < pizzas.length; i++) {
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(pizzas, i);
  }
}

function renderPastas(j) {
  for (let i = 0; i < pastas.length; i++) {
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(pastas, i);
  }
}

function generateDish(category, i) {
  return /*html*/ `
        <div class="section_menus__dishes">
            <div class="section_menus__dish">
                <p id="dishNameID${i}" class="section_menus__dish_name">${category[i].name}</p>
                <img id="addIcon${i}" onclick="addToShoppingCart('${category[i].category}', ${i})" class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
            </div>
            <p class="section_menus__ingredients">${category[i].description}</p>
            <p class="section_menus__price"><b id="dishPriceID${i}">${category[i].price}€</b></p>
        </div>
      `;
}

function addToShoppingCart(category, i) {
  // zB 'Salate'
  document.getElementById("shoppingCartPlaceholder").classList.add("d_none");
  addDishToArray(category, i);
  renderDishIntoShoppingCart();
  displaySum();
}

function getNameIndex(namemenus) {
  let index = shoppingCart.indexOf(namemenus);
  return index;
}

function addDishToArray(category, i) {
  let namemenus = salads[i].name;
  let index = getNameIndex(namemenus);
  if (index == -1) {
    if (category == "Pizza") {
      let dishName = pizzas[i].name;
      let dishPrice = pizzas[i].price;
      let dishAmount = 1;
      let dishWithNameAndPrice = {amount: dishAmount, name: dishName, price: dishPrice};
      shoppingCart.push(dishWithNameAndPrice);
    }

    if (category == "Salate") {
      let dishName = salads[i].name;
      let dishPrice = salads[i].price;
      let dishAmount = 1;
      let dishWithNameAndPrice = {amount: dishAmount, name: dishName, price: dishPrice};
      shoppingCart.push(dishWithNameAndPrice);
    }

    if (category == "Pasta") {
      let dishName = pastas[i].name;
      let dishPrice = pastas[i].price;
      let dishAmount = 1;
      let dishWithNameAndPrice = {amount: dishAmount, name: dishName, price: dishPrice};
      shoppingCart.push(dishWithNameAndPrice);
    }
  } else {
    shoppingCart[index].amount = shoppingCart[index].amount + 1;
  }

  //   let dishName = document.getElementById(`dishNameID${i}`).innerHTML;
  //   let dishPrice = document.getElementById(`dishPriceID${i}`).innerHTML;
  //   let dishAmount = 1;
  //   let dishWithNameAndPrice = {amount: dishAmount, name: dishName, price: dishPrice};
  //   shoppingCart.push(dishWithNameAndPrice);
}

// function saveShoppingCart(i) {
//   Das gleichnamige array in den local storage.
// }

function renderDishIntoShoppingCart() {
  document.getElementById("shoppingCartContainer").innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    document.getElementById("shoppingCartContainer").innerHTML += generateDishInShoppingCart(i);
  }
}

function generateDishInShoppingCart(i) {
  return /*html*/ `
        <div class="section_shopping_cart__container_item">
          <div class="section_shopping_cart__container_item_and_name">
            <p id="amount" class="section_shopping_cart__amount">${shoppingCart[i].amount}</p>
            <p id="name" class="section_shopping_cart__name"><b>${shoppingCart[i].name}</b></p>
          </div>

          <p id="price" class="section_shopping_cart__price">${shoppingCart[i].price}€</p>
        </div>
        <div class="section_shopping_cart__container_more_or_less">
          <img class="section_shopping_cart__icons" onclick="decreaseAmount(${i})" src="img/icons/-.svg" alt="" />
          <p>${shoppingCart[i].amount}</p>
          <img class="section_shopping_cart__icons" onclick="increaseAmount(${i})" src="img/icons/+.svg" alt="" />
        </div>`;
}

function increaseAmount(i) {
  //amount im array shoppingCart erhöhen.
  shoppingCart[i].amount = shoppingCart[i].amount + 1;
  // Shoppingcart neu rendern.
  renderDishIntoShoppingCart();
  displaySum();
}

function decreaseAmount(i) {
  //amount im array shoppingCart reduzieren.
  shoppingCart[i].amount = shoppingCart[i].amount - 1;
  // aus dem shoppingCart löschen
  if (shoppingCart[i].amount < 1) {
    shoppingCart.splice(i, 1);
  }
  // Shoppingcart neu rendern.
  renderDishIntoShoppingCart();
  // Summe im Warenkorb neu anzeigen.
  displaySum();

  // if (shoppingCart.length === 0) {
  //   sum = 0.0;
  // } else {
  //   displaySum();
  // }

  // Wenn im ShoppingCart nichts drin ist, soll der Shoppingcart-Placeholder wieder angezeigt werden.
  // if ((document.getElementById("shoppingCartContainer").innerHTML = "")) {
  //   document.getElementById("shoppingCartPlaceholder").classList.remove("d_none");
  // }
}

// function seeIfNameExists() {
//   let menu = shoppingCart[0].name;
//   let index = getMenuIndex(menu);
//   if (index == -1) {
//     menus.push(menu);
//     let price = getPriceFromInput();
//     prices.push(price);
//     let amount = 1;
//     amounts.push(amount);
//   } else {
//     amounts[index] = amounts[index] + 1;
//   }
// }

function calculateSum() {
  // let sum = 0.00;
  for (let i = 0; i < shoppingCart.length; i++) {
    sum = sum + shoppingCart[i].price * shoppingCart[i].amount;
    // sum = sum + shoppingCart[i].price;
    roundedSum = sum.toFixed(2);
  }
  return roundedSum;
}

function displaySum() {
  let sumShoppingCart = calculateSum();
  document.getElementById("sum").innerHTML = `${sumShoppingCart}€`;
}

// document.getElementById("sum").innerHTML = "0.00€";

function showResponsiveShoppingCart() {
  document.getElementById("restaurantAndMenusSection").classList.add("d_none");
  document.getElementById("shoppingCartButton").classList.add("d_none");
  document.getElementById("shoppingCartButtonContainer").classList.add("d_none");
  document.getElementById("shoppingCart").classList.add("d_flex");
  document.getElementById("footer").classList.add("footer_responsive");
  document.getElementById("body").classList.add("body_height_100_percent");
}
