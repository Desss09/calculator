"use strict"
console.log(`it is working!`)

window.onload = init;

function init() {

    const addButton = document.querySelector("#addButton");
    const subtractButton = document.querySelector("#subtractButton");
    const multiplyButton = document.querySelector("#multiplyButton");
    const divideButton = document.querySelector("#divideButton");

    //wire up the fuctions to the click of the buttons
    addButton.addEventListener("click", add)
    subtractButton.addEventListener("click",subtract)
    multiplyButton.addEventListener("click",multiply)
    divideButton.addEventListener("click", divide)


}
//create add function that gets num1 and num2 of the page and sums then
function add() {

    let number1 = Number(document.querySelector("#number1Field").value)
    let number2 = Number(document.querySelector("#number2Field").value)

    //add thosethose number together
    let result= number1 + number2;

    //put the result in the answer input field
    document.querySelector('#answerField').value = result;
}
//create subtract function that gets num1 and num2 of the page and sums then
function subtract() {

    let number1 = Number(document.querySelector("#number1Field").value)
    let number2 = Number(document.querySelector("#number2Field").value)

    //add thosethose number together
    let result= number1 - number2;

    //put the result in the answer input field
    document.querySelector('#answerField').value = result;
}
//create multiply function that gets num1 and num2 of the page and sums then
function multiply() {

    let number1 = Number(document.querySelector("#number1Field").value)
    let number2 = Number(document.querySelector("#number2Field").value)

    //add thosethose number together
    let result= number1 * number2;

    //put the result in the answer input field
    document.querySelector('#answerField').value = result;
}
//create divide function that gets num1 and num2 of the page and sums then
function divide() {

    let number1 = Number(document.querySelector("#number1Field").value)
    let number2 = Number(document.querySelector("#number2Field").value)

    //add thosethose number together
    let result= number1 / number2;

    //put the result in the answer input field
    document.querySelector('#answerField').value = result;
}

