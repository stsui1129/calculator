const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-allclear]');
const clearButton = document.querySelector('[data-clear]');
const decimalButton = document.querySelector('[data-decimal]');
const equalsButton = document.querySelector('[data-equals]');
const display = document.querySelector('.display');

display.textContent = "0";
let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let operator = null;

function operate(operator, num1, num2) {
  let result = 0;
  switch(operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case 'x':
      result =  multiply(num1, num2);
      break;
    case '÷':
      result = divide(num1, num2);
      break;
  }
  displayValue = result;
  updateDisplay();
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
  if (num2 === 0) {
    return "ERROR";
  } else {
      return num1 / num2;
    }
}

function updateDisplay() {
  if (displayValue.toString().length > 12) {
    displayValue = Number(displayValue.toString().slice(0, 12));
  }
  display.textContent = displayValue;
}

function inputNum(num) {
  displayValue += num;
  updateDisplay();
}

numberButtons.forEach(button => {
  button.addEventListener('click', e => {
    inputNum(e.target.textContent);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', e => {
      if (firstOperand != null && operator != null) {
        secondOperand = parseFloat(displayValue);
        result = operate(operator, firstOperand, secondOperand);
        displayValue = result;
        firstOperand = result;
        secondOperand = null;
        operator = e.target.innerText;
        displayValue = ""
      }
      else {
        operator = e.target.innerText;
        firstOperand = parseFloat(displayValue);
        displayValue = ""; //this resets displayValue so secondOperand doesn't concatenate to firstOperand
      }
  });
});

equalsButton.addEventListener('click', e => {
  inputEquals();
});

function inputEquals() {
  if (operator === null) {
    displayValue = displayValue; //this prevents equals sign from changing the display to 0
  }
  else {
  secondOperand = parseFloat(displayValue);
  result = operate(operator, firstOperand, secondOperand);
  displayValue = result;
  secondOperand = null;
  operator = null;
  }
}

allClearButton.addEventListener('click', e => {
  allClear();
});

function allClear() {
  operator = null;
  firstOperand = null;
  secondOperand = null;
  displayValue = "";
  display.textContent = "0";
}

clearButton.addEventListener('click', e => {
  clear();
});

function clear() {
  let result = displayValue.toString();
  result = result.slice(0, result.length - 1);
  displayValue = Number(result);
  updateDisplay();
}

decimalButton.addEventListener('click', e => {
  addDecimal();
});

 function addDecimal() {
  if (!displayValue.toString().includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
}