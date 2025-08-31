function Musketeers() {
    let musketeers = ['Athos', 'Porthos', 'Aramis'];
    console.log('Using for-of loop: ');
    for(musketeer of musketeers) console.log(musketeer);
    console.log('Using for loop: ');
    for(let i = 0; i < musketeers.length; i++) console.log(musketeers[i]);
    console.log('Using forEach loop: ');
    musketeers.forEach(musketeer => console.log(musketeer));
    
    musketeers.push('D\'Artagnan');
    console.log(musketeers)
    
    musketeers.splice(2,1); //remove 1 element before index 2
    console.log(musketeers);
}
// Musketeers();


function sumOfValues() {
   const values = [3, 11, 7, 2, 9, 10];
   let sum = 0;
   values.forEach(value => sum+= value);
   console.log(`The sum of the elements in the array [${values}] is: ${sum}.\n`);
}
// sumOfValues();

function arrMax() {
    const values = [3, 11, 7, 2, 9, 10];
    let max = values[0];
    for(value of values) max = value > max ? value : max;
    console.log(`The max number in the array [${values}] is: ${max}.\n`);
}
// arrMax();

function listOfWords(){
   let word = prompt('Enter a word: ');
   let arr = [];
   while(word !== 'stop'){
        arr.push(word);
        word = prompt('Enter a word: ');
   } 
   console.log(`The list of words provided by you until stop is: [${arr}]`);
}
// listOfWords();


function camelize(str) {
    let first = str.split('-');
    console.log(first);

    let uppered = first.map((item, index) => {
    return index == 0 ? item : item[0].toUpperCase() + item.slice(1)        
    })

    console.log(uppered);
    
    let joined = uppered.join('');
    console.log(joined);
}
// camelize('background-color')

function filterRange(a, b) {
    let arr = [5, 3, 8, 1];
    return arr.filter(item => ( item >= a && item <= b));
}
// console.log(filterRange(1, 4));

function filterRangeInPlace(a, b) {
    let arr = [5, 3, 8, 1];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr)
}
// filterRangeInPlace(1, 4);

function descOrder() {
    let arr = [5, 2, 1, -10, 8];
    return arr.sort((a, b) => b - a);
}
// console.log(descOrder());

function copySorted() {
    let arr = ["HTML", "JavaScript", "CSS"];
    return arr.slice().sort();
}
// console.log(copySorted());


let secChar = 'lalole';
console.log(secChar.charAt(1));

function divide3MultLast(n1, n2, n3){
    return (n1 / n2) * n3;
}

function cubeRoot(num) {
    console.log(Math.cbrt(num));
}

function checkMonth(month) {
    console.log(month === 'june' || month==='july' ||month==='august' ? 'YAY' : 'Booo');
}

function logAndSkip5(nums) {
    // for(num of nums) {
    //     if(num % 5 === 0) continue;
    //     console.log(num + '\n');
    // }
    
    for(let i =1; i<= nums.lengt; i++) {
        if(i % 5 !== 0) console.log(num + '\n');
    }
}



function greeting(arr) {
    const first = arr[0];
    const last  = arr[arr.length - 1];
    if(first < last) console.log('Hi');
    else if(first > last) console.log('Bye');
    else console.log('We close in an hour')
}
// let arr = [1,4,5,6];
// greeting(arr);

function multAndConsoleArr(arr) {
    let product = 1;
    arr.forEach(item => product *= item)
    console.log(product)
}
// let arr2 = [10, 20, 30];
// multAndConsoleArr(arr2);

function arrayEvenNums(arr) {
    //new array
    let evens = [];
    //traverse
    arr.forEach(element => {
        //check even
        if(element % 2 === 0) {
            evens.push(element);
        }
    })
    return evens;
}
console.log(arrayEvenNums([1,2,3,4,5,6]))


function arrayEvenNums(arr) {
    //new array
    let evens = [];
    //traverse
    arr.map(element => (element % 2 === 0)? evens.push(element) : 'NAN')
    return evens;
}
// console.log(arrayEvenNums([1,2,3,4,5,6]))



function logObjName() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    
    let users = [ john, pete, mary ];
    
    let newNames = [];
    let names = Array.from(users).forEach(e => {
        newNames.push(e.name)
    // let names = users.map(item => item.name)
    })
    console.log( newNames ); // John, Pete, Mary
}

function logNewObj(){
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    
    let users = [ john, pete, mary ];
    
    let newUsers = users.map(item => ({
    fullName: `${item.name}, ' ', ${item.surname}`,
    id: item.id
    }))
    console.log(newUsers)
    console.log( newUsers[0].id ) // 1
    console.log( newUsers[0].fullName ) // John Smith
}

function sortByAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let arr = [ pete, john, mary ];
    
    //access array of objects
    arr.sort((a, b) => a.age - b.age)
    console.log(arr)
}
// sortByAge();

//DOESNT WORK 
// function shuffle() {
//     let arr = [1, 2, 3];
//     let rand = Math.floor(Math.random() * arr.length);
//     arr.map((item,index]) => item[rand])
//     console.log(arr)
    
// }
// shuffle()

function getAverageAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };
    
    let arr = [ john, pete, mary ];
    
    let result = 
    arr.reduce((sum, current) => sum + current.age, 0);
    console.log(result/arr.length)
}
// getAverageAge()


function unique() {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    // if index of 1st occurrence === index of current item; current item is first occurrence in the array.
    let newString = strings.filter((a,b) => strings.indexOf(a) === b)
    console.log(newString)
    
}
// unique()



function creatingObj() {
    const dog = {
        name: 'fang',
        species: 'boarhound',
        size: 75,
        bark() {
            return 'Grrr! Grrr!';
        }
    };
    
    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);    
}


function circleObj() {
    const r = Number(prompt("Enter the circle radius:"));
    
    const circle = {
        circumference(){
            return 2 * Math.PI * r
        },
        area() {
            return  Math.PI * (r ** 2)    
        }
    };
    
    console.log(`Its circumference is ${circle.circumference()}`);
    console.log(`Its area is ${circle.area()}`);    
}

function accountBalance() {
    const account = {
        name: 'Alex',
        balance: 0,
        credit(value) {
            return this.balance += value;
        },
        describe() {
            return `"owner: ${this.name}, balance ${this.balance}"`;
        }
    };
    console.log(account.describe());
    account.credit(250); //crediting
    account.credit(-80); //debiting
    console.log(account.describe());    
}


// let favHoliday = 'new years eve'.toUpperCase()
// console.log(favHoliday)

// let alertLastThree = 'idontknow'
// console.log(alertLastThree.substr(-3))

function absDiff(n1, n2, n3, n4, n5) {
    let from100 = 100 - n1 - n2 - n3 - n4 -n5
    console.log(Math.abs(from100))
}

function lowestHighestVals(n1, n2, n3) {
    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);
    console.log(`max: ${max} min: ${min}`);
}

const headOrTail = _ => Math.random() < 0.5 ? "head" : "tail"

function loopHeadOrTail(num){
    for(let i=0;i<num;i++) {
        let result = headOrTail()
        console.log(result)
    }
}
// loopHeadOrTail(10)

function arrayPractice() {
    let tvShows = ['black mirror', 'orphan black', 'how to get away with murder']
    tvShows.forEach(show => console.log(show));
    
    let arr3 = [10, 21, 30, 43]
    let evenNums = arr3.filter(num => num % 2 === 0)
    //  console.log(evenNums)
    
    function secondSum(){
        let arr = [68,73,19,52,48,5,0,99]
        let rar = arr.sort((a, b) => a - b, 0)
        console.log(`the array [${arr}]:\n the second lowest number is: ${rar[1]}\n the second highest number is ${rar[rar.length - 2]}\n their sum is: ${rar[1] + rar[rar.length - 2]}`)
    }
    // secondSum()    
} 

function stopWatchObject() {
    let stopWatch = {
        shape: 'circular',
        color: 'black',
        button: 'side',
        buttonColor: 'yellow',
        clock: 12,
        start(){
            
        },
        stop() {
            
        }, eraseTimer() {
        }
        
    }
}

function remove(array, index){
    return array.slice(0, index).concat(array.slice(index + 1));
}
let arr = ['la', 'de', 'khe', 'ce', 'fe', 'be', 'b']
// console.log(arr)
// let removeInstance = remove(arr, arr.length-1)
// console.log(removeInstance)
// console.log(arr[0].padStart(7, "0"));



function classwork(){
    let favDrink = ' pina colada mojito '
    console.log(favDrink)
    favDrink = favDrink.trim()
    console.log(favDrink)
    
    const findApple = 'i am not an apple la la';
    findApple.includes('apple')? console.log('lolo') : console.log('hara')    
}

function rockPaperSci() {
    let choice = Math.floor(Math.random() * 3 + 1);
    switch(choice) {
        case 1: 
            return('rock');
        case 2:
            return('paper');
        case 3:
            return('scissors');
        default:
            return('???');
    }
}
// rockPaperSci();

function gameResult(choice) {
    //result
    let result = '';
    //play game for bot
    const botChoice = rockPaperSci();
    //won or lost condition
    if(choice == botChoice) result = 'draw';
    //rockpaper rockscissor paperscissor 
    else if(choice == 'rock' && botChoice == 'scissors' ||
            choice == 'paper'&& botChoice == 'rock' ||
            choice == 'scissors' && botChoice == 'paper') 
            result = 'you won'
            
    else result = 'bot won'
    
    let resultDisplay = `your choice: ${choice}\nbot  choice: ${botChoice}\n${result}\n`;

    // dispaly msg
    console.log(resultDisplay);
}
// gameResult('paper');


function regame(choices) {
    for(let i=0;i<choices.length;i++) {
        console.log(`Game trial: ${i+1}`);
        gameResult(choices[i]);
    }
}
// regame(['rock', 'paper', 'scissors']);

function sumArray() {
    let arr = [1,2,3,4,5,6,7];
    let reducedArr =arr.reduce((sum,current)=>sum+current, 0);
    console.log(reducedArr)    
}

function squaredArray(nums) {
    let squared = nums.map(item => item * item)
    console.log(squared)
}
// squaredArray([10,20,2,4])

function reverseString(str) {
    // let reversed = Array.from(str).map((item,index) => item = item[item.length-1])
    let arrify = Array.from(str);
    let newArr = []
    for(let i = arrify.length-1; i>=0;i--) {
        newArr.push(arrify[i])
    }
    console.log(newArr)
    
    // let lelo = arrify.map(char => char.pop())
    // console.log(lelo)
    
    // console.log(str.split("").reverse().join(""));
}
// reverseString('ilovethis')

function objectLiteral() {
    let mouse = {}
    mouse.shape = 'oval'
    mouse.size = 'small'
    mouse.design = 'ergonomic'
    mouse.brand = 'legion'
    
    mouse.leftClick = function(){
        console.log('left click')
    }
    mouse.rightClick = function() {
        console.log('right click')
    }
    mouse.doubleClick = function() {
        console.log('double click')
    }
    
    console.log(mouse)    
}

// function MakeCar() {
//     this.make = carMake
//     this.model = carModel
// }

// let honda = new MakeCar()

function Fighter(name, health, power, potion) {
    this.name   = name
    this.health = health
    this.power  = power
    this.potion = potion
    this.kill   = function(){
        console.log('killll')
    }
    this.run    = function(){
        console.log('runnnn')
    }
    this.defend = function(){
        console.log('defend')
    }
}
// let powerRanger = new Fighter('power ranger', 100, 100, 5);
// console.log(powerRanger.kill())
