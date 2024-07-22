let fruits = ["Apple", "Banana", "Strawberry", "Blackberry", "Raspberry"];
let amount = ["3x", "1x", "250g", "200g", "100g"];

function init() {
  exercise1();
  exercise2();
  exercise3();
  exercise4();
  exercise5();
  exercise6();
  exercise7();
  exercise8();
}

function exercise1() {
  let list = document.getElementById("list1");

  for (let i = 0; i < 10; i++) {
    list.innerHTML += `<li>${i}</li>`;
  }
}

function exercise2() {
  let list = document.getElementById("list2");
  for (let i = 1; i < 6; i++) {
    list.innerHTML += `<li>${i}</li>`;
  }
}

function exercise3() {
  let list3 = document.getElementById("list3");

  for (let i = 0; i < 11; i += 2) {
    list3.innerHTML += `<li>${i}</li>`;
  }
}

function exercise4() {
  let list = document.getElementById("list4");
  for (let i = 10; i > -1; i--) {
    list.innerHTML += `<li>${i}</li>`;
  }
}

function exercise5() {
  document.getElementById(fruits);
  for (let i = 0; i < fruits.length; i++) {
    list5.innerHTML += `<li>${fruits[i]}</li>`;
  }
}

function exercise6() {
  document.getElementById(fruits);
  for (let i = 4; i > -1; i--) {
    list6.innerHTML += `<li>${fruits[i]}</li>`;
  }
}

function exercise7() {
  let list = document.getElementById("list7");
  for (let i = 0; i < fruits.length; i += 2) {
    list.innerHTML += `<li>${fruits[i]}</li>`;
  }
}

function exercise8() {
  let list = document.getElementById("list8");
  for (let i = 0; i < fruits.length; i++) {
    list.innerHTML += `<li>${amount[i]} ${fruits[i]}</li>`;
  }
}

function exercise9() {
  let newFruit = document.getElementById("newfruit").value;
  fruits.push(newFruit);

  let list = document.getElementById("list10");
  list.innerHTML = ``;

  for (let i = 0; i < fruits.length; i++) {
    list.innerHTML += `<li>${fruits[i]}</li>`;
  }
}

// function exercise9() {}
