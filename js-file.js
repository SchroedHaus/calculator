function operate(x, operator, y) {
    let answer = '';

    x = Number(x);
    y = Number(y);

    switch(operator) {
        case '+':
            answer = x + y;
            break;
        case '-':
            answer = x - y;
            break;
        case 'X':
            answer = x * y;
            break;
        case '/':
            if (y == 0) {
                answer = "Come on, bruh."
            }
            else {
                answer = x / y;
            }
            break;
    }
    return Math.round(answer * 10000) / 10000;
}

// Create the variables
let firstNumber = '';
let secondNumber = '';
let prevOperator = '';
let currOperator = ''
let isFirst = true;

function buildFirstNumber(number) {
    firstNumber = firstNumber.concat(number);
    display(firstNumber);
}

function buildSecondNumber(number) {
    secondNumber = secondNumber.concat(number);
    display(secondNumber);
}

// Listen for button clicks
document.querySelector('.container').addEventListener("click", (event) => {
    let buttonType = event.target.className;

    //If it's a number button...
    switch(buttonType) {
        case 'number':
            let number = event.target.innerHTML;
            // If it's the first number...
            if (isFirst == true) {
                buildFirstNumber(number);
            }
            // If it's the second number...
            else {
                buildSecondNumber(number);
            }
            break;

        case 'operator':
            currOperator = event.target.innerHTML;
            // Calulate the firstNumber and listen for the new secondNumber
            if (!secondNumber) {
                isFirst = false;
            }
            else {
                firstNumber = operate(firstNumber, prevOperator, secondNumber);
                secondNumber = '';
                display(firstNumber);
            }
            prevOperator = currOperator;
            break;

        case 'equals':
            if (!secondNumber) {
                display(firstNumber);
            }
            else {
                display(operate(firstNumber, currOperator, secondNumber));
            }
            break;

        case 'clear':
            firstNumber = '';
            secondNumber = '';
            currOperator = '';
            prevOperator = ''
            isFirst = true;
            display(0)
            break;
    }
});

function display(text) {
    document.querySelector('#display').innerHTML = text;
}