let categories = ["Salate", "Pizzen", "Pasta"];
let categoryImages = ["img/dishes/salad.jpg", "img/dishes/pizza.jpg", "img/dishes/spaghetti.jpg"];

let salads = [
  {
    amount: 1,
    category: "Salate",
    name: "Griechischer Salat",
    description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
    price: 7.5,
  },
  {
    amount: 1,
    category: "Salate",
    name: "Feldalat mit Lachs",
    description: "Feldsalat mit Dresssing aus Balsamico und Olivenöl mit gebratenem Lachs",
    price: 7.5,
  },
  {
    amount: 1,
    category: "Kartoffelsalat",
    name: "Griechischer Salat",
    description: "mit Kartoffeln, sauren Gurken, Eiern in einer Sahne-Mazo-Sauce",
    price: 7.5,
  },
];

let pizzas = [
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Spinacchi",
    description: "mit Spinat, Schafskäse, Tomatensauce und Käse",
    price: 7.5,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Hollondaise",
    description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
    price: 7.5,
  },
  {
    amount: 1,
    category: "Pizza",
    name: "Pizza Vegetabele",
    description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
    price: 7.5,
  },
];

let pastas = [
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Bolognese",
    description: "mit Hackfleisch und Tomatensauce",
    price: 7.5,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Spinacchi",
    description: "mit Spinat und Cherrytomaten",
    price: 7.5,
  },
  {
    amount: 1,
    category: "Pasta",
    name: "Pasta Gorgonzola",
    description: "mit Sauce aus Sahne und Gorgonzola",
    price: 7.5,
  },
];

let shoppingCart = [];

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
                <p class="section_menus__dish_name">${category[i].name}</p>
                <img class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
            </div>
            <p class="section_menus__ingredients">${category[i].description}</p>
            <p class="section_menus__price"><b>${category[i].price}€</b></p>
        </div>
      `;
}

// function generatePizzas(i) {
//   return /*html*/ `
//         <div class="section_menus__dishes">
//             <div class="section_menus__dish">
//                 <p class="section_menus__dish_name">${pizzas[i].name}</p>
//                 <img class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
//             </div>
//             <p class="section_menus__ingredients">${pizzas[i].description}</p>
//             <p class="section_menus__price"><b>${pizzas[i].price}€</b></p>
//         </div>
//       `;
// }

// function generatePastas(i) {
//   return /*html*/ `
//         <div class="section_menus__dishes">
//             <div class="section_menus__dish">
//                 <p class="section_menus__dish_name">${pastas[i].name}</p>
//                 <img class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
//             </div>
//             <p class="section_menus__ingredients">${pastas[i].description}</p>
//             <p class="section_menus__price"><b>${pastas[i].price}€</b></p>
//         </div>
//       `;
// }

// GESICHERT
// function renderCategories() {
//   for (let i = 0; i < categories.length; i++) {
//     document.getElementById("categoriesContainer").innerHTML += generateCategory(i);
//     renderSalads(i);
//   }
// }

// function generateCategory(i) {
//   return /*html*/ `
//     <div class="section_menus__img_container">
//         <img class="section_menus__img" src="${categoryImages[i]}" alt="" />
//     </div>
//     <h3 class="section_menus__category_name">${categories[i]}</h3>
//     <div id="menuesContainer${i}"></div>`;
// }

// function renderSalads(j) {
//   for (let i = 0; i < salads.length; i++) {
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateSalads(i);
//   }
// }

// function generateSalads(i) {
//   return /*html*/ `
//         <div class="section_menus__dishes">
//             <div class="section_menus__dish">
//                 <p class="section_menus__dish_name">${salads[i].name}</p>
//                 <img class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
//             </div>
//             <p class="section_menus__ingredients">${salads[i].description}</p>
//             <p class="section_menus__price"><b>${salads[i].price}€</b></p>
//         </div>
//       `;
// }
// GESICHERT ENDE

// let item = [];

// let menuNames = [];
// let prices = [];

// If you click on + this should happen:
// innerHTML of name and price should be read
// innerHTML should be pushed into the arrays

// function addToShoppingBasket(menuName, price) {
//   menuName = document.getElementById().innerHTML;
//   menuNames.push(menuName);
//   prices.push(price);
// }

// function addToarrays() {}

// function updatePrices() {
//   let sum = 0;
//   for (let i = 0; i < prices.length; i++) {
//     const price = prices[i];
//     sum += prices[i];
//   }

//   document.getElementById().innerHTML = sum;
// }

// BETTER SCRIPT:

// let categories = ["Salate", "Pizzen", "Pasta"];
// let categoryImages = ["img/dishes/salad.jpg", "img/dishes/pizza.jpg", "img/dishes/spaghetti.jpg"];

// let dishes = [
//   {
//     amount: 1,
//     category: "Salate",
//     name: "Griechischer Salat",
//     description: "mit Fetakäse, Grünem Blattsalat, Tomaten, Gurke, Paprika, Balsamico und Olivenöl",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Salate",
//     name: "Feldalat mit Lachs",
//     description: "Feldsalat mit Dresssing aus Balsamico und Olivenöl mit gebratenem Lachs",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Salate",
//     name: "Kartoffelsalat",
//     description: "mit Kartoffeln, sauren Gurken, Eiern in einer Sahne-Mazo-Sauce",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Pizza",
//     name: "Pizza Spinacchi",
//     description: "mit Spinat, Schafskäse, Tomatensauce und Käse",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Pizza",
//     name: "Pizza Hollondaise",
//     description: "mit Sauce Hollandaise, Brokkoli, Tomatensauce und Käse",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Pizza",
//     name: "Pizza Vegetabele",
//     description: "mit Zucchini, Aubergine, Oliven, Zwiebeln, Tomatensauce und Käse",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Pasta",
//     name: "Pasta Bolognese",
//     description: "mit Hackfleisch und Tomatensauce",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Pasta",
//     name: "Pasta Spinacchi",
//     description: "mit Spinat und Cherrytomaten",
//     price: 7.5,
//   },
//   {
//     amount: 1,
//     category: "Pasta",
//     name: "Pasta Gorgonzola",
//     description: "mit Sauce aus Sahne und Gorgonzola",
//     price: 7.5,
//   },
// ];

// let shoppingCart = [];

// function renderCategories() {
//   document.getElementById("categoriesContainer").innerHTML += generateCategory(0);
//   for (let i = 0; i < dishes.length; i++) {
//     const dish = dishes[i];
//     if (dish.category == "Salate") {
//       category = "Salate";
//       renderSalads(category, i);
//     }
//   }

//   document.getElementById("categoriesContainer").innerHTML += generateCategory(1);
//   if (dishes.category == "Pizza") {
//     renderPizzas(i);
//   }
//   document.getElementById("categoriesContainer").innerHTML += generateCategory(2);
//   if (dishes.category == "Pasta") {
//     renderPastas(i);
//   }
// }

// function generateCategory(i) {
//   return /*html*/ `
//     <div class="section_menus__img_container">
//         <img class="section_menus__img" src="${categoryImages[i]}" alt="" />
//     </div>
//     <h3 class="section_menus__category_name">${categories[i]}</h3>
//     <div id="menuesContainer${i}"></div>`;
// }

// function renderSalads(category, j) {
//   for (let i = 0; i < category.length; i++) {
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
//   }
// }

// function renderPizzas(j) {
//   for (let i = 0; i < pizzas.length; i++) {
//     category = pizzas;
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
//   }
// }

// function renderPastas(j) {
//   for (let i = 0; i < pastas.length; i++) {
//     category = pastas;
//     document.getElementById(`menuesContainer${j}`).innerHTML += generateDish(category, i);
//   }
// }

// function generateDish(category, i) {
//   return /*html*/ `
//         <div class="section_menus__dishes">
//             <div class="section_menus__dish">
//                 <p class="section_menus__dish_name">${dishes[i].name}</p>
//                 <img class="section_menus_add_icon" src="img/icons/add.svg" alt="" />
//             </div>
//             <p class="section_menus__ingredients">${dishes[i].description}</p>
//             <p class="section_menus__price"><b>${dishes[i].price}€</b></p>
//         </div>
//       `;
// }
