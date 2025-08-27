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
    let size = 10;
    for(let j = 0; j < size ; j++){
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


