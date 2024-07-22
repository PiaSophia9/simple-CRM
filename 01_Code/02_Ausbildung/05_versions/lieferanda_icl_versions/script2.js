let categories = ["Salate", "Pizzen", "Pasta"];
let categoryImages = ["img/dishes/salad.jpg", "img/dishes/pizza.jpg", "img/dishes/spaghetti.jpg"];

let salads = [
  {
    amount: 1,
    category: "Salate",
    name: "Griechischer Salat",
    description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
    price: 7.95,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Feldalat mit Lachs",
    description: "Feldsalat mit Dresssing aus Balsamico und Olivenöl mit gebratenem Lachs",
    price: 7.95,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Griechischer Salat",
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
    price: 7.95,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Hollondaise",
    description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
    price: 7.95,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Vegetabele",
    description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
    price: 7.95,
  },
];

let pastas = [
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Bolognese",
    description: "mit Hackfleisch und Tomatensauce",
    price: 7.95,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Spinacchi",
    description: "mit Spinat und Cherrytomaten",
    price: 7.95,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Gorgonzola",
    description: "mit Sauce aus Sahne und Gorgonzola",
    price: 7.95,
  },
];

let shoppingCart = [
  // {
  //   amount: 0
  //   name: "",
  //   price: 0,
  // },
];

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
    <div class="section_menus__img_container">
        <img class="section_menus__img" src="${categoryImages[i]}" alt="" />
    </div>
    <h3 class="section_menus__category_name">${categories[i]}</h3>
    <div id="menuesContainer${i}"></div>`;
}

function renderSalads(j) {
  for (let i = 0; i < salads.length; i++) {
    category = salads;
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
  }
}

function renderPizzas(j) {
  for (let i = 0; i < pizzas.length; i++) {
    category = pizzas;
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
  }
}

function renderPastas(j) {
  for (let i = 0; i < pastas.length; i++) {
    category = pastas;
    document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
  }
}

function generateDish(category, i) {
  return /*html*/ `
        <div class="section_menus__dishes">
            <div class="section_menus__dish">
                <p id="dishNameID${category[i]}" class="section_menus__dish_name">${category[i].name}</p>
                <img id="addIcon${i}" onclick="addToShoppingCart(${(category, i)})" class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
            </div>
            <p class="section_menus__ingredients">${category[i].description}</p>
            <p class="section_menus__price"><b id="dishPriceID${i}">${category[i].price}€</b></p>
        </div>
      `;
}

function addToShoppingCart(category, i) {
  addDishToArray(category, i);
  // saveShoppingCart(i);
  renderDishIntoShoppingCart();
}

function addDishToArray(category, i) {
  let dishName = document.getElementById(`dishNameID${category[i]}`).innerHTML;
  let dishPrice = document.getElementById(`dishPriceID${i}`).innerHTML;
  let dishAmount = 1;
  let dishWithNameAndPrice = {amount: dishAmount, name: dishName, price: dishPrice};
  shoppingCart.push(dishWithNameAndPrice);
}

// function saveShoppingCart(i) {
//   Das gleichnamige array in den local storage.
// }

function renderDishIntoShoppingCart() {
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

          <p id="price" class="section_shopping_cart__price">${shoppingCart[i].price}</p>
        </div>
        <div class="section_shopping_cart__container_more_or_less">
          <img src="img/icons/-.svg" alt="" />
          <p>1</p>
          <img src="img/icons/+.svg" alt="" />
        </div>`;
}

function showShoppingCart() {
  document.getElementById("restaurantAndMenusSection").classList.add("d_none");
  document.getElementById("shoppingCartButton").classList.add("d_none");
  document.getElementById("shoppingCartButtonContainer").classList.add("d_none");
  document.getElementById("shoppingCart").classList.add("d_flex");
  document.getElementById("footer").classList.add("footer_responsive");
  document.getElementById("body").classList.add("body_height_100_percent");
}

function decreaseAmount(i) {
  //amount im array shoppingCart reduzieren.
  shoppingCart[i].amount = shoppingCart[i].amount - 1;
  // aus dem shoppingCart löschen
  if (shoppingCart.length == 0) {
    // Wenn im ShoppingCart nichts drin ist, soll der Shoppingcart-Placeholder wieder angezeigt werden.
    document.getElementById("shoppingCartPlaceholder").classList.remove("d_none");
    document.getElementById("sum").innerHTML = `0,00€`;
  } else {
    if (shoppingCart[i].amount < 1) {
      shoppingCart.splice(i, 1);
      renderDishIntoShoppingCart();
    } else {
      renderDishIntoShoppingCart();
      displayTotalSum();
      calculateDishSum(i);
    }
  }
}

function decreaseAmount(i) {
  //amount im array shoppingCart reduzieren.
  shoppingCart[i].amount = shoppingCart[i].amount - 1;
  // aus dem shoppingCart löschen

  if (shoppingCart[i].amount < 1) {
    shoppingCart.splice(i, 1);
    renderDishIntoShoppingCart();
    document.getElementById("sum").innerHTML = `0,00€`;
    // Wenn im ShoppingCart nichts drin ist, soll der Shoppingcart-Placeholder wieder angezeigt werden.
    document.getElementById("shoppingCartPlaceholder").classList.remove("d_none");
  } else {
    renderDishIntoShoppingCart();
    displayTotalSum();
    calculateDishSum(i);
  }
}

function increaseDishSum(i) {
  //   let sumDish = shoppingCart[i].price * shoppingCart[i].amount;
  // sumDish ist (der Preis der im Warenkorb steht zB 16, geteilt durch den Amount zB 2 = 8) + der Preis der im Warenkorb steht zB 16.
  //            7,89                    1                        7,89
  sumDish = shoppingCart[i].price / shoppingCart[i].amount + shoppingCart[i].price;
  let roundedSumDish = sumDish.toFixed(2);
  shoppingCart[i].price = roundedSumDish;
  document.getElementById(`price${i}`).innerHTML = `${roundedSumDish}€`;
}

function decreaseDishSum(i) {
  sumDish = shoppingCart[i].price - shoppingCart[i].price / shoppingCart[i].amount;
  let roundedSumDish = sumDish.toFixed(2);
  shoppingCart[i].price = roundedSumDish;
  document.getElementById(`price${i}`).innerHTML = `${roundedSumDish}€`;
}

function increaseDishSum(i) {
  //   let sumDish = shoppingCart[i].price * shoppingCart[i].amount;
  // sumDish ist (der Preis der im Warenkorb steht zB 16, geteilt durch den Amount zB 2 = 8) + der Preis der im Warenkorb steht zB 16.
  //            7,89                    1                        7,89
  sumDish = shoppingCart[i].price / shoppingCart[i].amount + shoppingCart[i].price;
  roundedDishSum = sumDish.toFixed(2);
  shoppingCart[i].price = roundedDishSum;
  document.getElementById(`price${i}`).innerHTML = `${roundedDishSum}€`;
}

function decreaseDishSum(i) {
  sumDish = shoppingCart[i].price - shoppingCart[i].price / shoppingCart[i].amount;
  shoppingCart[i].price = sumDish;
  document.getElementById(`price${i}`).innerHTML = `${sumDish}€`;
}

let roundedDishSum = sumDish.toFixed(2);
shoppingCart[i].price = roundedDishSum;
document.getElementById(`price${i}`).innerHTML = `${roundedDishSum}€`;

function getNameIndex(namemenus) {
  for (let i = 0; i < shoppingCart.length; i++) {
    const name = shoppingCart[i].name;
    let index = name.indexOf(namemenus);
    return index;
  }
}

function addDishToArray(category, i) {
  if (category == "Salate") {
    let object = salads[i];
  }

  if (category == "Pizza") {
    let object = pizzas[i];
  }

  if (category == "Pasta") {
    let object = pastas[i];
  }

  let object = salads[i]; // Ich glaube, man kann einfach category statt salads einsetzten. Nein, das ist ein string. Der muss erst wieder in ein array verwandelt werden.
  let index = getIndexInShoppingCart(object);
  if (index == -1) {
    if (category == "Pizza") {
      //   push das ganze Objekt in den Warenkorb
      shoppingCart.push(pizzas[i]);
      //     let dishName = pizzas[i].name;
      //   let dishPrice = pizzas[i].price;
      //   let dishAmount = 1;
      //   let dishWithNameAndPrice = {amount: dishAmount, name: dishName, price: dishPrice};
      //   shoppingCart.push(dishWithNameAndPrice);
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
}

// if (category == "Pizza") {
//   let object = pizzas[i];
//   let index = getOjectIndex(object);
//   shoppingCart.push(object);
// }

// if (category == "Pasta") {
//   let object = pastas[i];
//   let index = getOjectIndex(object);
//   shoppingCart.push(object);
// }
