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
