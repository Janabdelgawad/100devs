//--- Easy
//create a variable and assign it a number
let number = 20;
//minus 10 from that number
number -= 10;
//print that number to the console
console.log(number)
//--- Medium
//create a variable that holds a value from the input
let userInput = Number(document.querySelector('input').value);
//add 25 to that number
userInput += 25;
//alert that number
alert(userInput);
//--- Hard
//create a variable that holds the h1
let heading1 = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
heading1.addEventListener('click', sum);

function sum() {
    console.log(number + userInput);
}