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
