# Simple Calculator (CLI-based)

This is a simple CLI-based calculator that performs basic arithmetic operations: addition, subtraction, multiplication, and division.

## Features
- Accepts user input through the terminal.
- Performs calculations based on user input.
- Uses the built-in **readline** module in Node.js.

## Installation
To run this program, install Node.js and the required TypeScript definitions.

```sh
npm install -g typescript
npm install @types/node
```

## Steps to Implement

### Step 1: Importing the Readline Module
```typescript
import * as readline from "readline";
```
- This imports the built-in **readline** module in Node.js.
- **readline** is used to take user input in the terminal.

### Step 2: Creating an Interface for Input and Output
```typescript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```
- The **readline.createInterface()** function creates an interface for user input.
- **input: process.stdin** allows the program to read input from the terminal.
- **output: process.stdout** displays output in the terminal.

### Step 3: Creating a Function to Perform Calculations
```typescript
function calculate(num1: number, num2: number, operator: string): number {
  switch (operator) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num2 !== 0 ? num1 / num2 : NaN;
    default: return NaN;
  }
}
```
#### Explanation:
- The function **calculate()** takes three parameters:
  - **num1**: The first number (type **number**).
  - **num2**: The second number (type **number**).
  - **operator**: A string representing the mathematical operation (**+**, **-**, **\***, **/**).
- Uses a `switch` statement to perform the appropriate operation.
- Ensures that division by zero is handled properly.
- Returns **NaN** if an invalid operator is entered.

### Step 4: Taking Input from the User
```typescript
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter an operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      const result = calculate(parseFloat(num1), parseFloat(num2), operator);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
```
#### Explanation:
- **`rl.question()`** prompts the user for input.
- The user enters the first number, an operator, and the second number.
- The inputs are converted from strings to numbers using `parseFloat()`.
- The `calculate()` function is called with these values.
- The result is displayed in the terminal.
- Finally, `rl.close()` is used to close the input interface.

## Running the Program
To execute the program, run:
```sh
node calculator.js
```
(Replace `calculator.js` with the actual filename.)

## Example Output
```
Enter first number: 10
Enter an operator (+, -, *, /): *
Enter second number: 5
Result: 50
```

## Conclusion
This simple calculator demonstrates how to use TypeScript and the `readline` module to build a CLI-based application. You can expand it by adding more operations or improving error handling.

Happy coding! 🚀

