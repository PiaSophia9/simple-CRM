let dishes = [
  {
    category: "Salate",
    categoryImage: "img/dishes/salad.jpg",
    items: [
      {
        name: "Griechischer Salat",
        description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
        price: 7.9,
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
    category: "Pizza",
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
    category: "Pasta",
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

let shoppingCart = [];

let sum = 0.0;

function renderCategories() {
  for (let i = 0; i < dishes.length; i++) {
    let dishesObject = dishes[i];
    document.getElementById("categoriesContainer").innerHTML += generateCategory(dishesObject, i);
    renderDish(dishesObject, i);
  }
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
  for (let j = 0; j < dishesObject.items.length; j++) {
    let itemsObject = dishesObject.items[j];
    let itemsObjectName = dishesObject.items[j].name;
    document.getElementById(`menuesContainer${i}`).innerHTML += generateDish(itemsObject, itemsObjectName, i, j);
  }
}

function generateDish(itemsObject, itemsObjectName, i, j) {
  return /*html*/ `
          <div class="section_menus__dishes">
              <div class="section_menus__dish">
                  <p id="dishNameID${i}" class="section_menus__dish_name">${itemsObject.name}</p>
                  <img id="addIcon${i}" onclick="addToShoppingCart('${itemsObjectName}', ${i}, ${j})" class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
              </div>
              <p class="section_menus__ingredients">${itemsObject.description}</p>
              <p class="section_menus__price"><b id="dishPriceID${i}">${itemsObject.price.toFixed(2).replace(".", ",")}€</b></p>
          </div>
        `;
}

function addToShoppingCart(itemsObjectName, i, j) {
  document.getElementById("shoppingCartPlaceholder").classList.add("d_none");
  addObjectToArrayShoppingCart(itemsObjectName, i, j);
  renderDishIntoShoppingCart();
}

function addObjectToArrayShoppingCart(itemsObjectName, i, j) {
  let index = getIndexInShoppingCart(itemsObjectName);
  if (index == -1) {
    let shoppingCartObject = {
      shoppingCartAmount: 1,
      shoppingCartName: dishes[i].items[j].name,
      shoppingCartDescription: dishes[i].items[j].description,
      shoppingCartPrice: dishes[i].items[j].price,
    };
    shoppingCart.push(shoppingCartObject);
  } else {
    increaseAmount(index);
  }
}

function getIndexInShoppingCart(itemsObjectName) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].shoppingCartName == itemsObjectName) {
      return i;
    }
  }
  return -1;
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
              <p id="amount" class="section_shopping_cart__amount">${shoppingCart[i].shoppingCartAmount}</p>
              <p id="name" class="section_shopping_cart__name"><b>${shoppingCart[i].shoppingCartName}</b></p>
            </div>
  
            <p id="price${i}" class="section_shopping_cart__price">${shoppingCart[i].shoppingCartPrice.toFixed(2).replace(".", ",")}€</p>
          </div>
          <div class="section_shopping_cart__container_more_or_less">
            <img class="section_shopping_cart__icons" onclick="decreaseAmount(${i})" src="img/icons/-.svg" alt="" />
            <p>${shoppingCart[i].shoppingCartAmount}</p>
            <img class="section_shopping_cart__icons" onclick="increaseAmount(${i})" src="img/icons/+.svg" alt="" />
          </div>`;
}

function increaseAmount(i) {
  increaseDishSum(i);
  shoppingCart[i].shoppingCartAmount = shoppingCart[i].shoppingCartAmount + 1;
  renderDishIntoShoppingCart();
  displayTotalSum();
}

function decreaseAmount(i) {
  decreaseDishSum(i);
  shoppingCart[i].shoppingCartAmount = shoppingCart[i].shoppingCartAmount - 1;
  if (shoppingCart[i].shoppingCartAmount < 1) {
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
  const prices = shoppingCart.map((product) => product.shoppingCartPrice);
  const total = prices.reduce((acc, curr) => acc + curr);
  let roundedTotal = total.toFixed(2).replace(".", ",");
  document.getElementById("sum").innerHTML = `${roundedTotal}€`;
}

function increaseDishSum(i) {
  let sumDish = shoppingCart[i].shoppingCartPrice / shoppingCart[i].shoppingCartAmount + shoppingCart[i].shoppingCartPrice;
  shoppingCart[i].shoppingCartPrice = sumDish;
  // document.getElementById(`price${i}`).innerHTML = `${sumDish.toFixed(2)}€`;
  //   displayTotalSum();
}

function decreaseDishSum(i) {
  sumDish = shoppingCart[i].shoppingCartPrice - shoppingCart[i].shoppingCartPrice / shoppingCart[i].shoppingCartAmount;
  shoppingCart[i].shoppingCartPrice = sumDish;
  // document.getElementById(`price${i}`).innerHTML = `${sumDish.toFixed(2)}€`;
  //   displayTotalSum();
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

window.onscroll = function () {
  let shoppingCart = document.getElementById("shoppingCart");
  if (window.scrollY > 0) {
    shoppingCart.style = "top: 0";
  } else {
    shoppingCart.style = "top: 80px";
  }
};
