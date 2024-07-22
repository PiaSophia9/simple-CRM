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
  document.getElementById("shoppingCartPlaceholder").classList.add("d_none");
  addDishToArray(category, i);
  renderDishIntoShoppingCart();
  displayTotalSum();
}

function getIndexInShoppingCart(object) {
  let index = shoppingCart.indexOf(object);
  return index;
}

function addDishToArray(category, i) {
  if (category == "Salate") {
    let object = salads[i];
    let index = getIndexInShoppingCart(object);
    if (index == -1) {
      shoppingCart.push(structuredClone(object));
    } else {
      //   shoppingCart[index].amount = shoppingCart[index].amount + 1;
      // amount und preis müssen erhöht werden, die dishes müssen neu gerendert werden und die TotalSum muss geändert werden. Das passiert alles in dieser Funktion:
      increaseAmount(index);
    }
  }
  if (category == "Pizza") {
    let object = pizzas[i];
    let index = getIndexInShoppingCart(object);
    if (index == -1) {
      shoppingCart.push(object);
    } else {
      increaseAmount(index);
    }
  }
  if (category == "Pasta") {
    let object = pastas[i];
    let index = getIndexInShoppingCart(object);
    if (index == -1) {
      shoppingCart.push(object);
    } else {
      increaseAmount(index);
    }
  }
}

// function addDishToArray(category, i) {

// }

// function addDishToArray(category, i) {

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

          <p id="price${i}" class="section_shopping_cart__price">${shoppingCart[i].price}€</p>
        </div>
        <div class="section_shopping_cart__container_more_or_less">
          <img class="section_shopping_cart__icons" onclick="decreaseAmount(${i})" src="img/icons/-.svg" alt="" />
          <p>${shoppingCart[i].amount}</p>
          <img class="section_shopping_cart__icons" onclick="increaseAmount(${i})" src="img/icons/+.svg" alt="" />
        </div>`;
}

function increaseAmount(i) {
  increaseDishSum(i);
  //amount im array shoppingCart erhöhen.
  shoppingCart[i].amount = shoppingCart[i].amount + 1;
  // Shoppingcart neu rendern.
  renderDishIntoShoppingCart();
  displayTotalSum();
}

function decreaseAmount(i) {
  decreaseDishSum(i);
  shoppingCart[i].amount = shoppingCart[i].amount - 1;
  if (shoppingCart[i].amount < 1) {
    shoppingCart.splice(i, 1);
    renderDishIntoShoppingCart();

    // Code nochmal checken. Keien Ahnung, ob der noch Sinn macht.

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

// WICHTIG
// function calculateTotalSum() {
//   sum = 0;
//   for (let i = 0; i < shoppingCart.length; i++) {
//     sum = sum + shoppingCart[i].price;
//     roundedSum = sum.toFixed(2);
//     return roundedSum;
//   }
// }

function displayTotalSum() {
  //WICHTIG   let sumShoppingCart = calculateTotalSum();

  // creates aray with only the prices:
  const prices = shoppingCart.map((product) => product.price);

  //calculates the total price
  const total = prices.reduce((acc, curr) => acc + curr);

  //allow only 2 digets after decimal point
  let roundedTotal = total.toFixed(2);

  // displays the total price:
  document.getElementById("sum").innerHTML = `${roundedTotal}€`;
}

function increaseDishSum(i) {
  // sumDish ist (der Preis der im Warenkorb steht zB 16, geteilt durch den Amount zB 2 = 8) + der Preis der im Warenkorb steht zB 16.
  //            7,89                    1                        7,89
  let sumDish = shoppingCart[i].price / shoppingCart[i].amount + shoppingCart[i].price;
  //   let roundedSumDish = +sumDish.toFixed(2);
  let roundedSumDish = +sumDish.toFixed(2);
  //   (Math.round(sumDish * 100) / 100).toFixed(2);
  shoppingCart[i].price = roundedSumDish;
  document.getElementById(`price${i}`).innerHTML = `${roundedSumDish}€`;
  displayTotalSum();
}

function decreaseDishSum(i) {
  sumDish = shoppingCart[i].price - shoppingCart[i].price / shoppingCart[i].amount;
  shoppingCart[i].price = sumDish;
  document.getElementById(`price${i}`).innerHTML = `${sumDish}€`;
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
