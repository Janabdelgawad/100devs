// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
// document.querySelector('#lollipopDon').addEventListener('click', don)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function don() {
//   total = total - 5
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

		// <h2>Result: <span id="placeToPutResult"></span></h2>
total = 0
document.querySelector('#pumpkin').addEventListener('click', zero)
document.querySelector('#dominosPizza').addEventListener('click', three)
document.querySelector('#zebra').addEventListener('click', nine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', negTwo)
document.querySelector('#lollipopDon').addEventListener('click', negFive)

function zero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
function three() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}
function nine() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}
function negTwo() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}
function negFive() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerText = total
}