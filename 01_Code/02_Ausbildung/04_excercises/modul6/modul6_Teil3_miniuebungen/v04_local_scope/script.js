function greet() {
  let name = "Sophia";
  let age = 33;
  console.log("Hello" + name);

  sayGoodbye(name);
  sayGoodbye(age);
  sayGoodbye("Hans");
}

function sayGoodbye(name) {
  console.log("Bye, bye" + name);
}

greet();
