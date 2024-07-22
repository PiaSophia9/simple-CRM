function add() {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  // durch das + erkennt JS, dass wir hier eine Zahl auslesen wollen. Das ist besonders beim Rechnen super wichtig. ohne das "+" ergibt "1+1" 11. "Hallo + du" ergibt Hallo du. Erst, wenn wir JS mit dem "+" vor "document" mitteilen, dass es sich um eine Zahl handelt, behandelt es unseren Input auch wie eine Zahl.

  let result = num1 + num2;

  document.getElementById(
    "result-div"
  ).innerHTML = `Das Ergebnis ist: ${result}`;
}
