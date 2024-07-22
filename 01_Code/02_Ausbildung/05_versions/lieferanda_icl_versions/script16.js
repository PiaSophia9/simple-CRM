let dishes = [
  {
    category: "salads",
    categoryImage: "img/dishes/salad.jpg",
    items: [
      // This is a nested object. It's nested in the object dishes.
      {
        name: "Griechischer Salat",
        description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
        price: 7.99,
      },
      {
        name: "Feldsalat mit Lachs",
        description: "Feldsalat mit Nüssen",
        price: 7.99,
      },
      {
        name: "Kartoffelsalat",
        description: "mit Kartoffeln, sauren Gurken, Eiern in einer Sahne-Mazo-Sauce",
        price: 7.99,
      },
    ],
  },
  {
    category: "pizzas",
    categoryImage: "img/dishes/pizza.jpg",
    items: [
      {
        name: "Pizza Spinat",
        description: "mit Spinat und Feta",
        price: 6.99,
      },
      {
        name: "Pizza Hollandaise",
        description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
        price: 6.99,
      },
      {
        name: "Pizza Vegetabele",
        description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
        price: 6.99,
      },
    ],
  },
  {
    category: "pastas",
    categoryImage: "img/dishes/spaghetti.jpg",
    items: [
      {
        name: "Pasta Bolognese",
        description: "mit Hackfleisch und Tomatensauce",
        price: 8.99,
      },
      {
        name: "Pasta Spinacchi",
        description: "mit Spinat und Cherrytomaten",
        price: 8.99,
      },
      {
        name: "Pasta Gorgonzola",
        description: "mit Sauce aus Sahne und Gorgonzola",
        price: 8.99,
      },
    ],
  },
];

// let categories = ["Salate", "Pizzen", "Pasta"];
// let categoryImages = ["img/dishes/salad.jpg", "img/dishes/pizza.jpg", "img/dishes/spaghetti.jpg"];

// let salads = [
//   {
//     amount: 1,
//     category: "Salate",
//     name: "Griechischer Salat",
//     description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
//     price: 7.99,
//   },
//   {
//     amount: 1,
//     category: "Salate",
//     name: "Feldsalat mit Lachs",
//     description: "Feldsalat mit Dresssing aus Balsamico und Olivenöl mit gebratenem Lachs",
//     price: 7.99,
//   },
//   {
//     amount: 1,
//     category: "Salate",
//     name: "Kartoffelsalat",
//     description: "mit Kartoffeln, sauren Gurken, Eiern in einer Sahne-Mazo-Sauce",
//     price: 7.99,
//   },
// ];

// let pizzas = [
//   {
//     amount: 1,
//     category: "Pizza",
//     name: "Pizza Spinacchi",
//     description: "mit Spinat, Schafskäse, Tomatensauce und Käse",
//     price: 6.99,
//   },
//   {
//     amount: 1,
//     category: "Pizza",
//     name: "Pizza Hollondaise",
//     description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
//     price: 6.99,
//   },
//   {
//     amount: 1,
//     category: "Pizza",
//     name: "Pizza Vegetabele",
//     description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
//     price: 6.99,
//   },
// ];

// let pastas = [
//   {
//     amount: 1,
//     category: "Pasta",
//     name: "Pasta Bolognese",
//     description: "mit Hackfleisch und Tomatensauce",
//     price: 8.99,
//   },
//   {
//     amount: 1,
//     category: "Pasta",
//     name: "Pasta Spinacchi",
//     description: "mit Spinat und Cherrytomaten",
//     price: 8.99,
//   },
//   {
//     amount: 1,
//     category: "Pasta",
//     name: "Pasta Gorgonzola",
//     description: "mit Sauce aus Sahne und Gorgonzola",
//     price: 8.99,
//   },
// ];

let shoppingCart = [];

let sum = 0.0;

function renderCategories() {
  for (let i = 0; i < dishes.length; i++) {
    let dishesObject = dishes[i];
    document.getElementById("categoriesContainer").innerHTML += generateCategory(dishesObject, i);
    renderDish(dishesObject, i);
  }
  // document.getElementById("categoriesContainer").innerHTML += generateCategory(1);
  // renderDish(1, pizzas);
  // document.getElementById("categoriesContainer").innerHTML += generateCategory(2);
  // renderDish(2, pastas);
}

function generateCategory(dishesObject, i) {
  return /*html*/ `
      <div class="section_menus__img_container" id="categoryImage${i}">
          <img class="section_menus__img" src="${dishesObject.categoryImage}" alt="" />
      </div>
      <h3 class="section_menus__category_name">${dishesObject.category}</h3>
      <div id="menuesContainer${i}"></div>`;
}

function renderDish(dishesObject, i) {
  for (let j = 0; j < items.length; j++) {
    let itemsObject = dishesObject.items[j];
    document.getElementById(`menuesContainer${i}`).innerHTML += generateDish(itemsObject);
  }
}

function generateDish(itemsObject) {
  return /*html*/ `
          <div class="section_menus__dishes">
              <div class="section_menus__dish">
                  <p id="dishNameID${i}" class="section_menus__dish_name">${itemsObject.name}</p>
                  <img id="addIcon${i}" onclick="addToShoppingCart('${itemsObject}')" class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
              </div>
              <p class="section_menus__ingredients">${itemsObject.description}</p>
              <p class="section_menus__price"><b id="dishPriceID${i}">${itemsObject.price}€</b></p>
          </div>
        `;
}

/* Todo: Change names so that category is not used in two ways. */

function addToShoppingCart(itemsOject) {
  document.getElementById("shoppingCartPlaceholder").classList.add("d_none");
  // addDishToArray
  addObjectToArrayShoppingCart(itemsOject);
  renderDishIntoShoppingCart();
  displayTotalSum();
}

function addObjectToArrayShoppingCart(itemsOject) {
  let object = category[i];
  let index = getIndexInShoppingCart(object.name);
  if (index == -1) {
    shoppingCart.push(structuredClone(object));
  } else {
    increaseAmount(index);
  }
}

function getIndexInShoppingCart(name) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name == name) {
      return i;
    }
  }
  return -1;
}

// function addDishToArray(itemsOject) {
//   if (category == "Salate") {
//     addObjectToArrayShoppingCart(i, salads);
//   }
//   if (category == "Pizza") {
//     addObjectToArrayShoppingCart(i, pizzas);
//   }
//   if (category == "Pasta") {
//     addObjectToArrayShoppingCart(i, pastas);
//   }
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
    ifShoppingCardIsEmpty();
  } else {
    renderDishIntoShoppingCart();
    displayTotalSum();
  }
}

function ifShoppingCardIsEmpty() {
  if (shoppingCart.length === 0) {
    document.getElementById("shoppingCartPlaceholder").classList.remove("d_none");
    document.getElementById("sum").innerHTML = `0,00€`;
    renderDishIntoShoppingCart();
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

function goToPayedPage() {
  if (document.getElementById("shoppingCartContainer").innerHTML == "") {
  } else {
    window.location.href = "payed.html";
  }
}
