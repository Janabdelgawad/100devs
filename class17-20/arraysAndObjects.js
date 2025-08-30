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
