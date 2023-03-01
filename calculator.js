//selecting the elements from html dom

const numberButtons = Array.from(document.querySelectorAll('.number'));
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const operationButtons = Array.from(document.querySelectorAll('.operation'));
const equalsButton = document.getElementById('equals');

// to display the numbers on click
numberButtons.forEach(choice => choice.addEventListener("click", displayNumberOnClick));
const typedDisplay = document.getElementById("show-typing");
const upperDisplay = document.getElementById("show-typed");

let firstNumber, secondNumber
let typingText = "0";
typedDisplay.textContent = typingText;

// to  display the number when clicked on button
function displayNumberOnClick(e)
{
    
    if(typedDisplay.textContent.length >= 14)
    {
        return;
    }
    
    let num = e.currentTarget.getAttribute("data-number");
    if(typingText === "0")
    {
        if(num===".")
        {typingText = typingText + num}
        else
        {
            typingText = num;
        }
    }
    else if(typedDisplay.classList.contains('finalAnswer'))
    {
        upperDisplay.textContent = "";
        typedDisplay.classList.remove('finalAnswer');
        typingText = num;
    }
    else
    {
        if(num === ".")
        {
            if(typedDisplay.textContent.includes("."))
            {
                return
            }

            else
            {
                typingText = typingText + num;
            }
        }
        
        else
        {
            typingText = typingText + num;
        }
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
        firstNumber = parseFloat(typedDisplay.textContent);
        upperDisplay.textContent = firstNumber + " " + operator
        typingText = "0";
    }
    
    // here the numbers will also be evaluated
    else
    {
        secondNumber = parseFloat(typedDisplay.textContent);
        solution = evaluate(firstNumber, secondNumber, operator);
        if(isNaN(solution))
        {
            return
        }
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
    secondNumber = parseFloat(typedDisplay.textContent);
    solution = evaluate(firstNumber, secondNumber, operator);
    console.log(solution);
    if(isNaN(solution))
        {
            return
        }
    upperDisplay.textContent = firstNumber + " " + operator + " " + secondNumber + " " + e.currentTarget.getAttribute("data-value");
    typedDisplay.textContent = solution;
    typedDisplay.classList.add('finalAnswer');
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
            if(second !== 0)
            {
                {tempSolution = first / second;}
                break;
            }
            else
            {   
                alert("Cannot divide by zero");
                tempSolution = NaN;
                break
            }
    }
    // tempSolution = Math.round(tempSolution*10000)/10000;
    // tempSolution = tempSolution.toFixed(4).replace(/\.?0+$/,"");
    if(tempSolution > 99999999999999)
    {
        tempSolution = Number.parseFloat(tempSolution).toExponential(4);
    }
    
    if(typeof(tempSolution) === "number")
    {
        if(tempSolution >= 100000000000)
        {
            tempSolution = tempSolution.toFixed(2).replace(/\.?0+$/,"");
        }
        else
        {
            tempSolution = tempSolution.toFixed(4).replace(/\.?0+$/,"");
        }
        
    }
    return tempSolution;
}


//to delete a digit when button is clicked

deleteButton.addEventListener("click", deleteDigit)

function deleteDigit(e)
{
    typingText = typedDisplay.textContent
    if(typedDisplay.textContent === "" || typedDisplay.textContent === "0")
    {
        return;
    }
    else if(typedDisplay.textContent.length === 1)
    {
        typingText = "0";
        typedDisplay.textContent = typingText; 
    }
    else
    {
        typingText = typingText.slice(0, typingText.length-1);
        typedDisplay.textContent = typingText;
    }
}

//to clear all when clear button is clicked

clearButton.addEventListener("click", clearAllTyped)

function clearAllTyped(e)
{
    typedDisplay.textContent = "0";
    typingText = "";
    upperDisplay.textContent = "";

}