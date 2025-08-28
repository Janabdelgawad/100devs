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



function daysOfMonth() {
    let month = Number(prompt('Enter a month number (1-12)'));
    switch(month) {
        case 1:
            console.log('Number of days in january is 31\n');
            break;
        case 2:
            console.log('Number of days in february is 28\n');
            break;
        case 3:
            console.log('Number of days in march is 31\n');
            break;
        case 4:
            console.log('Number of days in april is 30\n');
            break;
        case 5:
            console.log('Number of days in may is 31\n');
            break;
        case 6:
            console.log('Number of days in june is 30\n');
            break;
        case 7:
            console.log('Number of days in july is 31\n');
            break;
        case 8:
            console.log('Number of days in august is 31\n');
            break;
        case 9:
            console.log('Number of days in september is 31\n');
            break;
        case 10:
            console.log('Number of days in october is 31\n');
            break;
        case 11:
            console.log('Number of days in november is 31\n');
            break;
        case 12:
            console.log('Number of days in december is 31\n');
            break;
        default:
        console.log('That is not a month number, try again...\n');
    }
}
// daysOfMonth();

function daysOfMonth() {
    let month = Number(prompt('Enter a month number (1-12): '));
    let days = 0;
    if(month == 2) days = 28;
    else if(month==4 || month==6 || month==9 || month==11) days = 30;
    else days = 31;
    
    console.log(`The month ${month} has ${days} days.\n`);
}
// daysOfMonth();



// 14h17m59s should give 14h18m0s
// 6h59m59s should give 7h0m0s
// 23h59m59s should give 0h0m0s (midnight)

//pseudo code
//is each 60 or not
//if num == 59, next num == 00
//if not sec++
//concatenate strings
function followingSecond(){
    //isolate each of the three
    let hour = Number(prompt('What hour is it: '));
    let minute = Number(prompt('What minute is it: '));
    let second = Number(prompt('What second is it: '));
    console.log(`${hour}h${minute}m${second}s should give `);
    
    //same logic as fizzbuzz
    if(hour == 23 && minute == 59 && second == 59){
        hour = 0;
        minute = 0;
        second = 0;
    }
    else if (minute == 59 && second == 59) {
        hour++;
        minute = 0;
        second = 0;
    }
    else if (second == 59) {
        minute++;
        second = 0;
    }
    else {
        second++;
    }
    console.log(`${hour}h${minute}m${second}s`);
}
// followingSecond();


function followingSecond(){
    //isolate each of the three
    let hour = Number(prompt('What hour is it: '));
    let minute = Number(prompt('What minute is it: '));
    let second = Number(prompt('What second is it: '));
    if (
        isNaN(hour) || isNaN(minute) || isNaN(second) ||
        hour < 0 || hour > 23 ||
        minute < 0 || minute > 59 ||
        second < 0 || second > 59
    ) {
        console.log("Invalid time input");
        return;
    }
    
    console.log(`${hour}h${minute}m${second}s should give `);
    
    //same logic as fizzbuzz
    if(hour == 24 && minute == 59 && second == 59){
        hour = 0;
        minute = 0;
        second = 0;
    }
    else if (minute == 59 && second == 59) {
        hour++;
        minute = 0;
        second = 0;
    }
    else if (second == 59) {
        minute++;
        second = 0;
    }
    else {
        second++;
    }
    console.log(`${hour}h${minute}m${second}s`);
}
// followingSecond();



function followingSecond(){
    //isolate each of the three
    let hour = Number(prompt('What hour is it: '));
    let minute = Number(prompt('What minute is it: '));
    let second = Number(prompt('What second is it: '));
    if (
        isNaN(hour) || isNaN(minute) || isNaN(second) ||
        hour < 0 || hour > 23 ||
        minute < 0 || minute > 59 ||
        second < 0 || second > 59
    ) {
        console.log("Invalid time input");
        return;
    }
    
    console.log(`${hour}h${minute}m${second}s should give `);
    
    //same logic as fizzbuzz
    if(second === 59) {
        second = 0;
        if(minute === 59) {
            minute = 0;
            if(hour === 23) {
                hour = 0;
            }
        }
        else {
            minute++;
        }
    }
    else {
        second++;
    }
    console.log(`${hour}h${minute}m${second}s`);
}
// followingSecond();


function Carousel(){
    let turnByUser = Number(prompt('Enter a number: '));
    for(let i = 0; i < turnByUser; i++) {
        console.log(i+1);
    }    
}

function parity() {
    let number = Number(prompt('Enter a number: '));
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        console.log(`${i} is even`);
      }
      
      if (i % 2 !== 0) {
        console.log(`${i} is odd`);
      }
    }   
}
