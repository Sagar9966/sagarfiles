let currentInput = "";
let currentOperator = "";
let firstOperand = null;
let secondOperand = null;

function clearOutput() {
    currentInput = "";
    currentOperator = "";
    firstOperand = null;
    secondOperand = null;
    document.getElementById("output").value = "";
}

function appendInput(input) {
    if (input === '+' || input === '-' || input === '*' || input === '/') {
        if (currentOperator !== "" && currentInput !== "") {
            calculateResult();
        }
        currentOperator = input;
        currentInput = "";
    } else {
        currentInput += input;
    }

    document.getElementById("output").value = currentInput;
}

function calculateResult() {
    if (currentInput === "" || currentOperator === "" || currentOperator === '=') {
        return;
    }

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (secondOperand === null) {
        secondOperand = parseFloat(currentInput);
    }

    if (firstOperand !== null && secondOperand !== null) {
        switch (currentOperator) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                currentInput = (firstOperand / secondOperand).toString();
                break;
        }
        currentOperator = '=';
        firstOperand = parseFloat(currentInput);
        secondOperand = null;
        document.getElementById("output").value = currentInput;
    }
}