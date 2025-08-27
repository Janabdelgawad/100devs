// *Variables*
// Create a variable and console log the value
let varValue = 10;
console.log(varValue);
// Create a variable, add 10 to it, and alert the value
let varAlert = 10;
varAlert += 10;
alert(varAlert);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtraction(num1, num2, num3, num4) {
    let difference = num1 - num2 - num3 - num4;
    alert(difference);
}
// Create a function that divides one number by another and returns the remainder
function remainder(num1, num2) {
    return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function comparison(num1, num2) {
    let sum = num1 + num2;
    if(sum > 50) {
        alert("Jumanji");
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumbers(num1, num2, num3) {
    let product = num1 * num2 * num3;
    if(product % 3 == 0) {
        alert("ZEBRA");
    }
}