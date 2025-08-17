// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value.toUpperCase()
//   const fMidName = document.querySelector('#firstMiddle').value.toUpperCase()
//   const lMidName = document.querySelector('#lastMiddle').value.toUpperCase()
//   const lName = document.querySelector('#lastName').value.toUpperCase()
//   const famName = document.querySelector('#familyName').value.toUpperCase()

//   document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName + ' ' + famName

//   //Add what you should be doing - conditionals go here

//   // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }



document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName  = document.querySelector('#firstName').value.toUpperCase()
  const fMName = document.querySelector('#firstMiddle').value.toUpperCase()
  const lMName = document.querySelector('#lastMiddle').value.toUpperCase()
  const lName  = document.querySelector('#lastName').value.toUpperCase()
  const famName = document.querySelector('#familyName').value.toUpperCase()

  document.querySelector('#placeToYell').innerText = `${fName}\n${fMName}\n${lMName}\n${lName}\n${famName}\n`
}