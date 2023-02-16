let num1: number;
let num2: number;
let result: number;

function calculateSum() {
  num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
  num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
  result = num1 + num2;
  document.getElementById("result").innerHTML = result.toString();
}
