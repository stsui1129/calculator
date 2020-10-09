Calculator
---
This is my first working version with many bugs still to fix :)

Issues encountered:

The operate function was not working at all - Fixed by returning my result from the function after my switch statement.

The second operand was concatenating to the first operand - Fixed by adding displayValue = "" after firstOperand

Could not add 0 after a decimal point - deleted displayValue = Number(displayValue); from function inputNum, as this converts 1.0 to 1, 1.20 to 1.2 etc.

https://stsui1129.github.io/calculator/

Bugs to fix: stop concatenating 0 when the display value is 0 to avoid 0000000 etc., 2nd operator to function properly.

