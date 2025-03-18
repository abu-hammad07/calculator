function calculate(num1, num2, operator) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : NaN;
        default: return NaN;
    }
}
function calculateResult() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Invalid input!";
        return;
    }
    var result = calculate(num1, num2, operator);
    document.getElementById("result").textContent = result.toString();
}
