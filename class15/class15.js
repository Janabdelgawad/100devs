// document.querySelector("h1").addEventListener('click', what2do);

// function what2do() {
//     const did = Number(document.querySelector("input").value);
//     const age= document.querySelector(".age").value
//     const action = '';
    
//     if(age < 16) action = "You can't drive";
//     else if(age < 18) action = "You can't hate from outside of the club, because you can't even get in";
//     else if(age < 21) action = "You can't drink";
//     else if(age < 25) action = "You can't rent cars affordably";
//     else if(age < 30) action = "You can't rent fancy cars affordably";
//     else if(age >= 30) action = "There is nothing left to look forward to";
    
//     const shitYouCanDo = `you are ${age} and\n{action}`;
//     document.querySelector("placeToYell").innerText = shitYouCanDo;
// }

///////////////////////////////////////////////

function subtract2(num1, num2) {
    alert (num1 - num2);
}
// subtract2(50 ,30);

function divide3(num1, num2, num3) {
    let quotient = num1 / num2 / num3;
    console.log(quotient);
}

function multiply3(num1, num2, num3) {
    let product = num1 * num2 * num3;
    return product;
}

function arithmetic3(num1, num2, num3) {
    let sum1N2 = num1 + num2;
    let remainder = sum1N2 % 3;
    return remainder;
}

function arithemticConditional(num1, num2, num3, num4) {
    let product = num1 * num2;
    let remainder;
    if(product > 100) {
        product += (num3 + num4);
        console.log(`The product is: ${product}`);
    }
    else if(product < 100) {
        product -= (num3 - num4);
        console.log(`The product is: ${product}`);
    }
    else {
        product *= num3;
        remainder = product % num4;
        alert(`The remainder is: ${remainder}`);
    }
}

function loop21() {
    let loop = '';
    for(let i = 1; i <=21; i++) {
        loop += '21\n';
    }
}
// loop21();
// document.querySelector("h1").innerText = loop;

// function loopLeon21() {
//     for(let i=1; i< 22; i++)
//         document.querySelector("h1").innerText += " 21";
// }



// document.querySelector("#help").addEventListener('click', stopSnacking);
// function stopSnacking() {
//     const numSnacks = Number(document.querySelector("input").value);
//     document.querySelector("#stops").innerText = "";
//     for(let i=1; i <= numSnacks; i++) {
//         document.querySelector("#stops").innerText += "Stop Snacking!\n";
//     }
// }


//bring it on assignment
let variable = 10;
console.log(variable);

let value;
value + 10;
alert(value);

function subtract4numbers(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4);
}

function DivisionRemainder(num1, num2) {
    return num1 % num2;
}

function jumanji50(num1, num2) {
    let sum = num1 + num2;
    if(sum > 50) {
        alert("Jumanji");
    }
}

function productDivisibleBy3(num1, num2, num3) {
    let product = num1 * num2 * num3;
    if(product % 3 === 0) {
        alert("ZEBRA");
    }
}

function logWordNTimes(word, n) {
    for(let i=1; i<= n; i++)
        console.log(word);
}
