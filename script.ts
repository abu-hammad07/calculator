function calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : NaN;
        default: return NaN;
    }
}

function calculateResult() {
    const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    const operator = (document.getElementById("operator") as HTMLSelectElement).value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result")!.textContent = "Invalid input!";
        return;
    }

    const result = calculate(num1, num2, operator);
    document.getElementById("result")!.textContent = result.toString();
}
