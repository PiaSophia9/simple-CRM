function calc() {
  let inputWidth = +document.getElementById("width").value;
  let inputHeight = +document.getElementById("height").value;
  let resultScope = inputWidth + inputHeight;
  document.getElementById("scope").innerHTML += `${resultScope}`;
}

//   function calc() {
//     calcScope(inputWidth, inputHeight);
//   }

//   function calcScope(x, y) {
//     let resultScope = inputWidth * 2 + inputHeight * 2;
//     +document.getElementById("scope").innerHTML += `${resultScope}`;
//   }

//   function calcScope(x, y) {
//     return inputWidth * 2 + inputHeight * 2;

//   }
