let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let resetDisplay = false;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

// Attach event listeners
buttons.forEach(button => button.addEventListener('click', handleButtonClick));
clearButton.addEventListener('click', resetCalculator);
equalsButton.addEventListener('click', evaluate);

function handleButtonClick(e) {
  const button = e.target;
  if (button.dataset.type === 'digit') {
    appendNumber(button.textContent);
  } else if (button.dataset.type === 'operator') {
    setOperator(button.textContent);
  }
}

function appendNumber(number) {
  // If resetDisplay is true, we reset the display
  if (resetDisplay) {
    displayReset();
  }

  // Handle decimal point input
  if (number === '.' && display.textContent.includes('.')) return; // Prevent multiple decimals
  
  // Update the display text
  if (display.textContent === '0' && number !== '.') {
    display.textContent = number; // First number input should replace zero
  } else {
    display.textContent += number; // Otherwise, append the number
  }
}

function displayReset() {
  display.textContent = '';
  resetDisplay = false;
}

function setOperator(operator) {
  if (currentOperator !== '') {
    evaluate();
  }
  firstNumber = display.textContent;
  currentOperator = operator;
  resetDisplay = true;
}

function evaluate() {
  if (currentOperator === '' || resetDisplay) return;

  secondNumber = display.textContent;
  if (currentOperator === '/' && secondNumber === '0') {
    display.textContent = "Error: Division by 0";
    resetCalculator();
    return;
  }

  const result = operate(currentOperator, firstNumber, secondNumber);
  display.textContent = roundResult(result);
  firstNumber = result;
  currentOperator = '';
  resetDisplay = true;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000; // Round to 3 decimal places
}

function resetCalculator() {
  display.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperator = '';
  resetDisplay = false;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return null;
  }
}