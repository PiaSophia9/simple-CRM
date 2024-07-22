let categories = ["Salate", "Pizzen", "Pasta"];
let categoryImages = ["img/dishes/salad.jpg", "img/dishes/pizza.jpg", "img/dishes/spaghetti.jpg"];

let salads = [
  {
    amount: 1,
    category: "Salate",
    name: "Griechischer Salat",
    description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
    price: 7.99,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Feldsalat mit Lachs",
    description: "Feldsalat mit Dresssing aus Balsamico und Olivenöl mit gebratenem Lachs",
    price: 7.99,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Kartoffelsalat",
    description: "mit Kartoffeln, sauren Gurken, Eiern in einer Sahne-Mazo-Sauce",
    price: 7.99,
  },
];

let pizzas = [
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Spinacchi",
    description: "mit Spinat, Schafskäse, Tomatensauce und Käse",
    price: 6.99,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Hollondaise",
    description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
    price: 6.99,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Vegetabele",
    description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
    price: 6.99,
  },
];

let pastas = [
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Bolognese",
    description: "mit Hackfleisch und Tomatensauce",
    price: 8.99,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Spinacchi",
    description: "mit Spinat und Cherrytomaten",
    price: 8.99,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Gorgonzola",
    description: "mit Sauce aus Sahne und Gorgonzola",
    price: 8.99,
  },
];

let shoppingCart = [];

let sum = 0.0;

function renderCategories() {
  document.getElementById("categoriesContainer").innerHTML += generateCategory(0);
  renderDish(0, salads);
  document.getElementById("categoriesContainer").innerHTML += generateCategory(1);
  renderDish(1, pizzas);
  document.getElementById("categoriesContainer").innerHTML += generateCategory(2);
  renderDish(2, pastas);
}

function generateCategory(i) {
  return /*html*/ `
    <div class="section_menus__img_container" id="categoryImage${i}">
        <img class="section_menus__img" src="${categoryImages[i]}" alt="" />
    </div>
    <h3 class="section_menus__category_name">${categories[i]}</h3>
    <div id="menuesContainer${i}"></div>`;
}

function renderDish(j, category) {
  for (let i = 0; i < category.length; i++) {
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
  }
}

// function renderSalads(j) {
//   for (let i = 0; i < salads.length; i++) {
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(salads, i);
//   }
// }

// function renderPizzas(j) {
//   for (let i = 0; i < pizzas.length; i++) {
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(pizzas, i);
//   }
// }

// function renderPastas(j) {
//   for (let i = 0; i < pastas.length; i++) {
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(pastas, i);
//   }
// }

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
  document.getElementById("shoppingCartPlaceholder").classList.add("d_none");
  addDishToArray(category, i);
  renderDishIntoShoppingCart();
  displayTotalSum();
}

function getIndexInShoppingCart(name) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name == name) {
      return i;
    }
  }
  return -1;
}

function addDishToArray(category, i) {
  if (category == "Salate") {
    addSaladsToArray(i);
  }
  if (category == "Pizza") {
    addPizzasToArray(i);
  }
  if (category == "Pasta") {
    addPastasToArray(i);
  }
}

function addSaladsToArray(i) {
  let object = salads[i];
  let index = getIndexInShoppingCart(object.name);
  if (index == -1) {
    shoppingCart.push(structuredClone(object));
  } else {
    increaseAmount(index);
  }
}

function addPizzasToArray(i) {
  let object = pizzas[i];
  let index = getIndexInShoppingCart(object.name);
  if (index == -1) {
    shoppingCart.push(structuredClone(object));
  } else {
    increaseAmount(index);
  }
}

function addPastasToArray(i) {
  let object = pastas[i];
  let index = getIndexInShoppingCart(object.name);
  if (index == -1) {
    shoppingCart.push(structuredClone(object));
  } else {
    increaseAmount(index);
  }
}

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

          <p id="price${i}" class="section_shopping_cart__price">${shoppingCart[i].price.toFixed(2)}€</p>
        </div>
        <div class="section_shopping_cart__container_more_or_less">
          <img class="section_shopping_cart__icons" onclick="decreaseAmount(${i})" src="img/icons/-.svg" alt="" />
          <p>${shoppingCart[i].amount}</p>
          <img class="section_shopping_cart__icons" onclick="increaseAmount(${i})" src="img/icons/+.svg" alt="" />
        </div>`;
}

function increaseAmount(i) {
  increaseDishSum(i);
  shoppingCart[i].amount = shoppingCart[i].amount + 1;
  renderDishIntoShoppingCart();
  displayTotalSum();
}

function decreaseAmount(i) {
  decreaseDishSum(i);
  shoppingCart[i].amount = shoppingCart[i].amount - 1;
  if (shoppingCart[i].amount < 1) {
    shoppingCart.splice(i, 1);
    renderDishIntoShoppingCart();
    if (shoppingCart.length === 0) {
      document.getElementById("shoppingCartPlaceholder").classList.remove("d_none");
      document.getElementById("sum").innerHTML = `0,00€`;
      renderDishIntoShoppingCart();
    }
  } else {
    renderDishIntoShoppingCart();
    displayTotalSum();
  }
}

function displayTotalSum() {
  const prices = shoppingCart.map((product) => product.price);
  const total = prices.reduce((acc, curr) => acc + curr);
  let roundedTotal = total.toFixed(2);
  document.getElementById("sum").innerHTML = `${roundedTotal}€`;
}

function increaseDishSum(i) {
  let sumDish = shoppingCart[i].price / shoppingCart[i].amount + shoppingCart[i].price;
  shoppingCart[i].price = sumDish;
  document.getElementById(`price${i}`).innerHTML = `${sumDish.toFixed(2)}€`;
  displayTotalSum();
}

function decreaseDishSum(i) {
  sumDish = shoppingCart[i].price - shoppingCart[i].price / shoppingCart[i].amount;
  shoppingCart[i].price = sumDish;
  document.getElementById(`price${i}`).innerHTML = `${sumDish.toFixed(2)}€`;
  displayTotalSum();
}

function showResponsiveShoppingCart() {
  document.getElementById("restaurantAndMenusSection").classList.add("d_none");
  document.getElementById("shoppingCartButton").classList.add("d_none");
  document.getElementById("shoppingCartButtonContainer").classList.add("d_none");
  document.getElementById("shoppingCart").classList.add("d_flex");
  document.getElementById("footer").classList.add("footer_responsive");
  document.getElementById("body").classList.add("body_height_100_percent");
}
