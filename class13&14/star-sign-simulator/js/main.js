// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText
// }
// document.querySelector("#yell").addEventListener("click", run);

// function run() {
//   const fName = document.querySelector("#firstName").value;
//   const fMiddle = document.querySelector("#firstMiddle").value;
//   const lMiddle = document.querySelector("#lastMiddle").value;
//   const lName = document.querySelector("#lastName").value;
//   const yell = `${fName} ${fMiddle} ${lMiddle} ${lName}`;

//   document.querySelector("#placeToYell").innerText = yell;
// }


let sign;

document.querySelector('#yell').addEventListener('click', getSign)
//compare 
function getSign(){
  //get value
  const day = Number(document.querySelector("#day").value);
  const month = Number(document.querySelector("#month").value);
  if((month == 1 && day >= 20 && day <= 31) || (month == 2 && day >= 1 && day <= 18))
  {
    sign = "Aquarius";
  }
  else if(
    ((month == 2) && (day >= 19 && day <= 31)) ||
    ((month == 3) && (day >= 1 && day <= 20))
    )
  {
    sign = "Pisces";
  }
  else if(
    ((month == 3) && (day >= 21 && day <= 31)) ||
    ((month == 4) && (day >= 1 && day <= 19))
    )
  {
    sign = "Aries";
  }
  else if(
    ((month == 4) && (day >= 20 && day <= 31)) ||
    ((month == 5) && (day >= 1 && day <= 20))
    )
  {
    sign = "Taurus";
  }
  else if(
    ((month == 5) && (day >= 21 && day <= 31)) ||
    ((month == 6) && (day >= 1 && day <= 21))
    )
  {
    sign = "Gemini";
  }
  else if(
    ((month == 6) && (day >= 22 && day <= 31)) ||
    ((month == 7) && (day >= 1 && day <= 22))
    )
  {
    sign = "Cancer";
  }
  else if(
    ((month == 7) && (day >= 23 && day <= 31)) ||
    ((month == 8) && (day >= 1 && day <= 22))
    )
  {
    sign = "Leo";
  }
  else if(
    ((month == 8) && (day >= 23 && day <= 31)) ||
    ((month == 9) && (day >= 1 && day <= 22))
    )
  {
    sign = "Virgo";
  }
  else if(
    ((month == 9) && (day >= 23 && day <= 31)) ||
    ((month == 10) && (day >= 1 && day <= 22))
    )
  {
    sign = "Libra";
  }
  else if(
    ((month == 10) && (day >= 23 && day <= 31)) ||
    ((month == 11) && (day >= 1 && day <= 21))
    )
  {
    sign = "Scorpio";
  }
  else if(
    ((month == 11) && (day >= 22 && day <= 31)) ||
    ((month == 12) && (day >= 1 && day <= 21))
    )
  {
    sign = "Sagittarius";
  }
  else if(
    ((month == 12) && (day >= 22 && day <= 31)) ||
    ((month == 1) && (day >= 1 && day <= 19))
    )
  {
    sign = "Capricorn";
  }

  //display
  const birth = `You were born on the ${day}th of the month number ${month}, which means\nyou are a\n${sign}`;
  document.querySelector("#placeToYell").innerText = birth;
}
