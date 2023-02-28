//selecting the elements from html dom

const numberButtons = Array.from(document.querySelectorAll('.number'));
const clearButton = document.getElementById("clear");
const operationButtons = Array.from(document.querySelectorAll('.operation'));
const equalsButton = document.getElementById('equals');

// to display the numbers on click
numberButtons.forEach(choice => choice.addEventListener("click", displayNumberOnClick));
const typedDisplay = document.getElementById("show-typing").firstChild;
const upperDisplay = document.getElementById("show-typed");

let firstNumber, secondNumber
let typingText = "0";
typedDisplay.textContent = typingText;

// to  display the number when clicked on button
function displayNumberOnClick(e)
{
    let num = e.currentTarget.getAttribute("data-number");
    if(typingText === "0")
    {
        typingText = num;
    }
    else
    {
        typingText = typingText + num;
    }

    typedDisplay.textContent = typingText;
}


// upper display string content

upperDisplay.textContent = "";

// to display upperstring when any operation keys pressed

operationButtons.forEach(choice => choice.addEventListener("click", displayAfterOperationbtnClick));

let operator;

function displayAfterOperationbtnClick(e)
{
    // const operator = e.currentTarget.getAttribute("data-value");
    
    if(upperDisplay.textContent === "")
    {
        operator = e.currentTarget.getAttribute("data-value");
        firstNumber = parseInt(typedDisplay.textContent);
        upperDisplay.textContent = firstNumber + " " + operator
        typingText = "0";
    }

    else
    {
        secondNumber = parseInt(typedDisplay.textContent);
        solution = evaluate(firstNumber, secondNumber, operator);
        firstNumber = solution;
        operator = e.currentTarget.getAttribute("data-value");
        upperDisplay.textContent = firstNumber + " " + operator;
        typingText = "0";
    }
    typedDisplay.textContent = typingText;
}

// to get the final answer after clicking on equals

equalsButton.addEventListener("click", finalEvaluation);

function finalEvaluation(e)
{
    secondNumber = parseInt(typedDisplay.textContent);
    upperDisplay.textContent = firstNumber + " " + operator + " " + secondNumber
    solution = evaluate(firstNumber, secondNumber, operator);
    typedDisplay.textContent = solution;
}


// to evaluate the numbers

function evaluate(first, second, operator)
{
    let tempSolution;
    switch(operator)
    {
        case "+":
            tempSolution = first + second;
            break;
        
        case "-":
            tempSolution = first - second;
            break;

        case "*":
            tempSolution = first * second;
            break;

        case "/":
            tempSolution = first / second;
            break
    }

    return tempSolution;
}




//to clear all when clear button is clicked

clearButton.addEventListener("click", clearAllTyped)

function clearAllTyped(e)
{
    typedDisplay.textContent = "0";
    typingText = "";
    upperDisplay.textContent = "";

}