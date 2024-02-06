function add(num1, num2) {
  return num1 + num2;
}

function subt(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return (num1 * num2)
}

function divi(num1, num2) {
  if (num2 === 0) {
    return undefined;
  } else {
    return (num1 / num2);
  }
}

let opration = "/"

let num1 = 4;
let num2 = 5;

let result;


switch (opration) {
  case "+":
    result = add(num1, num2);
    break;
  case "_":
    result = subt(num1, num2);
    break;
  case "*":
    result = mult(num1, num2);
    break;
  case "/":
    result = divi(num1, num2);
    break;
  default:
    result = "Invalid operator";
}

console.log("The Result of this operation is : " + result);