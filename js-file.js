function operate(x, operator, y) {
    let answer = '';

    x = Number(x);
    y = Number(y);

    switch(operator) {
        case '+':
            answer = add(x, y);
            break;
        case '-':
            answer = subtract(x, y);
            break;
        case 'X':
            answer = multiply(x, y);
            break;
        case '/':
            answer = divide(x, y);
            break;
    }
    console.log("Answer: " + answer);
    return answer;
}

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

let firstNumber = '';
let prevOperator = '';
let currOperator = ''
let secondNumber = '';
let isFirst = true;

function buildFirstNumber(number) {
    firstNumber = firstNumber.concat(number);
    display(firstNumber);
    console.log("First Number: " + firstNumber);
}

function buildSecondNumber(number) {
    secondNumber = secondNumber.concat(number);
    display(secondNumber);
    console.log("Second Number: " + secondNumber);
}

// Listen for button clicks
document.querySelector('.container').addEventListener("click", (event) => {
    //If it's a number button...
    if (event.target.className === 'number') {
        let number = event.target.innerHTML;
        // If it's the first number...
        if (isFirst == true) {
            buildFirstNumber(number);
        }
        // If it's the second number...
        else {
            buildSecondNumber(number);
        }
    }
    // If it's the operator button...
    else if (event.target.className === 'operator') {
        currOperator = event.target.innerHTML;
        // Calulate the firstNumber and listen for the new secondNumber
        
        display(currOperator);

        if (!secondNumber) {
            isFirst = false;
        }
        else {
            firstNumber = operate(firstNumber, prevOperator, secondNumber);
            console.log("New First Number: " + firstNumber);
            secondNumber = '';
        }
        prevOperator = currOperator;
    }
    else if (event.target.id === 'equals') {
        display(operate(firstNumber, currOperator, secondNumber));
    }
    else if (event.target.id === 'clear') {
        firstNumber = '';
        secondNumber = '';
        currOperator = '';
        prevOperator = ''
        isFirst = true;
        display(0)
    }
});

function display(text) {
    document.querySelector('#display').innerHTML = text;
    console.log("Display:" + text);
}

// Input firstNumber
// Input operator
// Input secondNumber
// Input operator
// Calculate
// Replace firstNumber with calculation
// Clear secondNumber
// Input new secondNumber
// Hit equals - get the answer