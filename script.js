let firstNumber = '';
let secondNumber = '';
let operator = '';


function add(num1,num2) {
  return num1 + num2;
}

function substract(num1,num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case '+':
      console.log(num1 + num2);
      return num1 +  num2;
    case '-': 
      console.log(num1 - num2);
      return num1 - num2;
    case '*': 
      console.log(num1 * num2);
      return num1 * num2;
    case '/': 
      console.log(num1 / num2);
      return num1 / num2;
  }
};