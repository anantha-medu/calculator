// to display the numbers on click

const numberButtons = Array.from(document.querySelectorAll('.number'));
const clearButton = document.getElementById("clear");


numberButtons.forEach(choice => choice.addEventListener("click", displayNumberOnClick));
const typedDisplay = document.getElementById("show-typing").firstChild;

let firstNumber, secondNumber
let typingText = "";
typedDisplay.textContent = typingText;

// to  display the number when clicked on button
function displayNumberOnClick(e)
{
    let num = e.currentTarget.getAttribute("data-number");
    // console.log(typedDisplay);
    // console.log(num);
    typingText = typingText + num;
    typedDisplay.textContent = typingText;
}


//to clear all when clear button is clicked

clearButton.addEventListener("click", clearAllTyped)

function clearAllTyped(e)
{
    typedDisplay.textContent = "0";
    typingText = "";

}