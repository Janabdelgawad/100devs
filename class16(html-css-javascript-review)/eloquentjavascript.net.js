function ascendingHash7(){
  let hash = '';
  for(let i = 0; i < 7; i++) {
      hash +='#';        
      console.log(hash);
  }
}
//ascendingHash7()


function fizzBuzz100(){
    for(let i = 1; i <=100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if(i % 3 == 0){
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
          console.log(i);  
        }
    }  
}
//fizzBuzz100()


function chessboard8x8() {
    let hash = '';
    let rehash = '';
    for(let j = 0; j < 4 ; j++){
        hash = ' ';
        for(let i = 8; i > 0; i--) {
            if(i % 2 != 0) {
                hash += '#'; 
            }
            else {
                hash += ' ';
            }
        }
        rehash = ' ';
        for(let i = 8; i > 0; i--) {
            if(i % 2 != 0) {
                rehash += ' '; 
            }
            else {
                rehash += '#';
            }
        }
        console.log(hash);
        console.log(rehash);
    }  
}
//chessboard8x8();


function chessboard8x8() {
    let hash = '';
    let rehash = '';
    let height = 8;
    let width = 8;
    for(let j = 0; j < height ; j++){
        hash = ' ';
        for(let i = width; i > 0; i--) {
            if(i % 2 != 0) {
                hash += '#'; 
            }
            else {
                hash += ' ';
            }
        }
        rehash = ' ';
        for(let i = width; i > 0; i--) {
            if(i % 2 != 0) {
                rehash += ' '; 
            }
            else {
                rehash += '#';
            }
        }
        console.log(hash);
        console.log(rehash);
    }  
}
//chessboard8x8();



function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

// console.log(min(0, -10));
// console.log(min(10, 0));
// console.log(min(20, 30));



function isEven(num) {
    let negNum = -1 * num;
    if(num < 0) num = negNum;  
    if(num === 0) return 'true';
    if(num === 1) return 'false';
    return isEven(num - 2);
}

// console.log(`Is the number 2 Even? ${isEven(2)}`);
// console.log(`Is the number 3 Even? ${isEven(3)}`);
// console.log(`Is the number 4 Even? ${isEven(4)}`);
// console.log(`Is the number 5 Even? ${isEven(5)}`);
// console.log(`Is the number 50 Even? ${isEven(50)}`);
// console.log(`Is the number 75 Even? ${isEven(75)}`);
// console.log(`Is the number -1 Even? ${isEven(-1)}`);
// console.log(`Is the number -2 Even? ${isEven(-2)}`);
// console.log(`Is the number -50 Even? ${isEven(-50)}`);
// console.log(`Is the number -75 Even? ${isEven(-75)}`);



function countBs(word) {
    let letterCountNumber = 0
    for(let i = 0; i < word.length; i++) {
        if(word[i] === 'B') letterCountNumber++;
    }
    return letterCountNumber;
}

// console.log(`The letter B was found in the word BBC ${countBs('BBC')} times.`)
// console.log(`The letter B was found in the word Banana ${countBs('Banana')} times.`)
// console.log(`The letter B was found in the word lala ${countBs('lala')} times.`)
// console.log(`The letter B was found in the word BoBBY BOB ${countBs('BoBBY BOB')} times.`)



function countChar(word, char) {
    let letterCountNumber = 0
    for(let i = 0; i < word.length; i++) {
        if(word[i] === char) letterCountNumber++;
    }
    return letterCountNumber;
}
// console.log(`The letter k was found in the word koko ${countChar('kaka', 'k')} times.`)
// console.log(`The letter U was found in the word UOUOUO ${countChar('UOUOUO', 'U')} times.`)
// console.log(`The letter U was found in the word kakkerlak ${countChar("kakkerlak", "k")} times.`)



function followingDay(){
    let dayOfWeek = prompt("What day of the week is it: ").toLowerCase();
    
    switch(dayOfWeek){
        case 'sunday': 
            console.log('Monday');
            break;
        case 'monday':
            console.log('Tuesday');
            break;
        case 'tuesday':
            console.log('Wednesday');
            break;
        case 'wednesday':
            console.log('Thursday');
            break;
        case 'thursday':
            console.log('Friday');
            break;
        case 'friday':
            console.log('Saturday');
            break;
        case 'saturday':
            console.log('Sunday');
            break;
        default:
            console.log('That is not a weekday, try again.')
    }
}



function numberComparison() {
    let n1 = Number(prompt('Enter a number: '));
    let n2 = Number(prompt('Enter a number: '));
    if(n1 > n2) {
        console.log('n1 is greater than n2\n');
    }
    else if (n1 < n2) {
        console.log('n1 is less than n2\n');
    }
    else {
        console.log('n1 and n2 are equal\n');
    }  
}
