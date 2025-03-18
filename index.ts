import { log } from "console";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculates(num1: number, num2: number, operator: string) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : NaN;
        default:
            return NaN;
    }
}

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter an operation (+, -, *, /): ", (operation) => {
        rl.question("Enter second number: ", (num2) => {
            const result = calculates(parseFloat(num1), parseFloat(num2), operation);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});

