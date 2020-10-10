Calculator
---
This working version took me a ridiculously long time as there were many bugs I had to fix along the way.

Issues encountered:

The operate function was not working at all - fixed by returning my result from the function after my switch statement.

The second operand was concatenating to the first operand - fixed by adding displayValue = "" after firstOperand.

Could not add 0 after a decimal point - deleted displayValue = Number(displayValue); from function inputNum, as this was converting 1.0 to 1, 1.20 to 1.2 etc.

The calculator had issues with storing firstOperand after an operation has already been done, causing problems with future operations. This was fixed by altering the code below although I don't fully quite understand why.

result = operate(operator, firstOperand, secondOperand);
displayValue = result;
firstOperand = result;

operate(operator, firstOperand, secondOperand);
firstOperand = displayValue;

https://stsui1129.github.io/calculator/

Bug still to fix: Pressing operator buttons consecutively returns NaN.

Next update: Add keyboard functioning.
