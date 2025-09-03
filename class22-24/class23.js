let gay = 'why are you gay?';
// if(gay.includes('?')) console.log('who said i\'m gay');
// else console.log(gay);

let lovely = "everybody gay knows that you are so gay";
if(lovely.includes('gay')) lovely = lovely.replaceAll('gay', 'lovely');
// console.log(lovely);

function randomRPS() {
    let random = Math.random();
    switch(true){
        case random < 0.33: 
            return('rock');
            break;
        case random < 0.66:
            return('paper');
            break;
        case random < 0.99:
            return('scissors');
            break;
        default:
            return('what B?')
            break;
    }
}
// console.log(randomRPS());

function gameResult(yourChoice) {
    let result, displayMsg;
    //bot answer
    let botChoice = randomRPS();
    //compare your and bot answers
    if(yourChoice == botChoice) result = 'A DRAW';
    else if(
    (yourChoice == 'rock' && botChoice == 'scissors') ||
    (yourChoice == 'paper' && botChoice == 'rock') ||
    (yourChoice == 'scissors' && botChoice == 'paper')){
        result = 'You WOOOOOON!';
    } else {
        result = 'Bot won.'
    }
    //display result
    return displayMsg = `You played: ${yourChoice}   Bot played: ${botChoice}\n${result} in rock, papers, scissors\n\n`;
}
// console.log(gameResult('paper'));

function game(choices) {
    for(let i = 0; i < choices.length; i++) {
        console.log(gameResult(choices[i]));
    }
}
// game(['rock', 'rock', 'paper', 'scissors']);


let numbers = [10, 20, 30, 40];
//console.log(numbers.reduce((acc, curr) => acc + curr));

function squaredNums(nums) {
    return nums.map(num => num * 2);
}
//console.log(squaredNums(numbers));

function reversedString(str) {
    let str2 = Array.from(str)
    let popped;
    // let newString = [];
    // for(let i = 0; i < str.length; i++){
    //     popped = str2.pop();
    //     newString.push(popped);        
    // } 
    let newString = str.split('').reverse().join('')
    return newString;
}
// console.log(reversedString('reverse this'));

function palindrome(str) {
    let newString = reversedString(str);
    return (str === newString) ? 'palindrome' : 'not a palindrome'
}
// console.log(palindrome('nan'))


function createObj() {
    let dog = {};
    
    dog.breed  = 'chiwawa'
    dog.size   = 'small'
    dog.age    = 'newborn'
    dog.weight = 5
    
    dog.sound = function() {console.log('bark')}
    dog.sleep = () => {return 10}
    dog.diet  = () => {return 'carnivore'}
    
    console.log(dog)    
}

function Princess(name, age, knownFor, rat) {
    this.name     = name;
    this.age      = age;
    this.knownFor = knownFor;
    this.rat      = rat;
    
    this.greet    = () => (`Hi im ${this.name}`);
    this.cussRat  = () => (`my precious husband is ${this.rat}!`);
    this.farewell = () => (`Bye Bye...\n`);
}

let princess1 = new Princess('barbie', 21, 'doll', 'ken');
console.log(princess1);
console.log(princess1.greet());
console.log(princess1.cussRat());
console.log(princess1.farewell());

let princess2 = new Princess('bella', 22, 'reads', 'beast')
console.log(princess2);
console.log(princess2.greet());
console.log(princess2.cussRat());
console.log(princess2.farewell());

// what is an API?
// a simple interface for a complex object(server)
