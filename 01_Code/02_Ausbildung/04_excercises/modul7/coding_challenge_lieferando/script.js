let menus = ["Pizza Spinat", "Pasta"];
let prices = [4.5, 6.5];
let amounts = [1, 3];

function getValueFromInput(ID) {
  return document.getElementById(ID).value;
}

function getMenuFromInput() {
  let input = getValueFromInput("menu");
  let result = input.trim();
  return result;
}

function getPriceFromInput() {
  let input = +getValueFromInput("price");
  return input;
}

function onAddMenu() {
  let menu = getMenuFromInput();
  let x = getMenuIndex(menu);
  if (x == -1) {
    menus.push(menu);
    let price = getPriceFromInput();
    prices.push(price);
    let amount = 1;
    amounts.push(amount);
  } else {
    amounts[x] = amounts[x] + 1;
  }
}

function getMenuIndex(menu) {
  let index = menus.indexOf(menu);
  if (menu) {
    return index;
  } else {
    return -1;
  }
}
