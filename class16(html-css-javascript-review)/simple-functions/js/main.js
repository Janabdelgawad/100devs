//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwoAndAlert(num1, num2){
    alert(num1 - num2)
}
// subtractTwoAndAlert(1,2)



//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(num1, num2, num3) {
    console.log( num1 / num2 / num3)
}
// divideThreeAndLog(2, 6, 8)



//create a function that multiplys three numbers and returns the product
function multiplyThreeAndReturn(num1, num2, num3) {
    return num1 * num2 * num3
}
// console.log(multiplyThreeAndReturn(1, 2, 3))



//---Medium
//create a function that takes in three numbers. 
// Add the first two numbers and
// return the remainder of dividing the sum of the first two numbers by the third number
function returnRemainder(num1, num2, num3){
    let addFirstTwo = num1 + num2
    return addFirstTwo % num3
}
// console.log(returnRemainder(10, 4, 2))



//---Hard
//create a function that takes in 4 numbers. 
//Multiply the first two numbers. 
// If the product is greater than 100 
// add the sum of the last two numbers and console log the value.
// If the product is less that 100, 
// subtract the difference of the last two numbers and console log the value. 
// If the product is 100,
// multiply the first three numbers together 
// and alert the remainder of dividing the fourth number
function arithemtic100(num1, num2, num3, num4) {
    let productFirstTwo = num1 * num2
    let product
    if(productFirstTwo > 100) {
        product = productFirstTwo + num3 + num4
        console.log(product)
    }
    else if(productFirstTwo < 100) {
        product = productFirstTwo - (num3 - num4)
        console.log(product)
    }
    else {
        product = productFirstTwo * num3
        alert(product % num4)
    }
}
// arithemtic100(10, 20, 30, 40)