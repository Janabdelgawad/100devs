//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let partyList = ['me', 'you', 'your mom'];
function reverseList() {
    // partyList.reverse().forEach((el) => {
    //     console.log(el);
    // });
    for(let i = partyList.length; i > 0; i--) {
        console.log(partyList[i-1]);
    }
    //console.log(partyList.reverse())
}
//reverseList();
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [2, 4, 6, 8, 10];
let b = [1, 3, 6, 9];
function squares(){
    let sumA = 0;
    let squareA = [];
    for(e in a){
        squareA.push(a[e] * a[e]);
    }
    for(e in squareA){
        sumA += squareA[e];
    }
    // console.log(squareA)
    // console.log(sumA)
    return sumA;
}
// squares();

function cubes(){
    let sumB = 0;
    let squareB = [];
    for(e in b){
        squareB.push(b[e] * b[e] * b[e]);
    }
    for(e in squareB){
        sumB += squareB[e];
    }
    // console.log(squareB)
    // console.log(sumB)
    return sumB;
}
// cubes();

function squaresAndCubes(){
    const squares_instance = squares();
    const cubes_instance   = cubes();

    console.log(` a squares sums: ${squares_instance}\n b cubes sums:   ${cubes_instance}`)

    return (squares_instance > cubes_instance)
}
// console.log(squaresAndCubes());

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function indexMultiples(arr) {
    let newArr = [];
    arr.map((e, i) => {
        // console.log(e, i)
        if(e % i === 0) newArr.push(e)
    })
    console.log(newArr)
}
// indexMultiples([22, -6, 32, 82, 9, 25]);
// indexMultiples([68, -1, 1, -7, 10, 10]);

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function intAsStrAndNum() {
    let arr = [1, '2', 3, '4'];
    let sum = arr.reduce((total, e) => total += Number(e), 0) // 0 is the starting value for total

    return sum
}
// console.log(intAsStrAndNum());