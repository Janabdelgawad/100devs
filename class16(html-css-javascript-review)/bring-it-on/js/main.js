// *Variables*
// Create a variable and console log the value
let num1 = 10;
console.log(num1);

// Create a variable, add 10 to it, and alert the value
let num2;
num2 += 10;
alert(num2);


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourAndAlert(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4);
}
subtractFourAndAlert(1, 2, 3, 4);


// Create a function that divides one number by another and returns the remainder
function remainderOfTwoNums(n1, n2) {
    return n1 % n2;
}
console.log(remainderOfTwoNums(2,4));


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Alert50Jumanji(n1, n2) {
    let add = n1 + n2;
    if(add > 50){
        alert("Jumanji");
    }
}
Alert50Jumanji(20,40);


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAndAlertZebra(n1, n2, n3) {
    let product = n1 * n2 * n3;
    if(product % 3 == 0) {
        alert("ZEBRA");
    }
}
multiplyThreeAndAlertZebra(3, 6, 9);


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function ConsoleWordNTimes(word, number) {
    for(let i = 1; i <= number; i++) {
        console.log(word);
    }
}